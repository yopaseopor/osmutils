// Script para probar la búsqueda actual con "roba"
console.log('🔍 Testing current search for "roba"...');

// Simular datos reales del CSV
const mockData = {
  keys: new Map([
    ['amenity', {
      values: new Map([
        ['cloakroom', [{
          definition_en: '',
          definition_ca: 'amenitat/servei = guarda-roba',
          definition_es: 'amenidad/servicio = guardarropa',
          countAll: 13889
        }]],
        ['clothes_dryer', [{
          definition_en: '',
          definition_ca: 'amenitat/servei = assecadora de roba',
          definition_es: 'amenidad/servicio = secadora de ropa',
          countAll: 13950
        }]]
      ])
    }],
    ['shop', {
      values: new Map([
        ['clothes', [{
          definition_en: 'A clothing store',
          definition_ca: 'Una botiga de roba',
          definition_es: 'Una tienda de ropa',
          countAll: 50000
        }]]
      ])
    }],
    ['clothes', {
      values: new Map([
        ['fashion', [{
          definition_en: 'Fashion clothing',
          definition_ca: 'roba = Moda',
          definition_es: 'ropa = Moda',
          countAll: 14867
        }]]
      ])
    }]
  ])
};

// Función simplificada de removeDiacritics
function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Función de búsqueda basada en el código actual
function testCurrentSearch(query) {
  const results = [];
  const queryNormalized = removeDiacritics(query.toLowerCase());

  for (const [key, keyData] of mockData.keys) {
    for (const [value, valueEntries] of keyData.values) {
      // Skip generic values (containing *) unless explicitly searching for *
      if (value.includes('*') && !queryNormalized.includes('*')) {
        continue;
      }

      // Find keys that use this value
      const keysWithValue = [key];

      let matchFound = false;
      let matchScore = 0;
      const searchTexts = [];

      // Prioritize value and key names much higher than descriptions
      searchTexts.push(removeDiacritics(`${value}`.toLowerCase()));
      searchTexts.push(removeDiacritics(`${keysWithValue.join(' ')}`.toLowerCase()));

      // Add definition columns with lower weight
      for (const valueEntry of valueEntries) {
        searchTexts.push(removeDiacritics(`${valueEntry.definition_en || ''}`.toLowerCase()));
        searchTexts.push(removeDiacritics(`${valueEntry.definition_ca || ''}`.toLowerCase()));
        searchTexts.push(removeDiacritics(`${valueEntry.definition_es || ''}`.toLowerCase()));
      }

      for (const searchText of searchTexts) {
        if (searchText.includes(queryNormalized)) {
          matchFound = true;

          if (searchText === removeDiacritics(`${value}`.toLowerCase())) {
            matchScore += 1000;  // Exact value match gets highest priority
          } else if (searchText === removeDiacritics(`${keysWithValue.join(' ')}`.toLowerCase())) {
            matchScore += 500;   // Exact key name match
          } else if (searchText.startsWith(queryNormalized)) {
            matchScore += 100; // Higher priority for values that start with query
          } else {
            // For description matches, be more flexible
            const regex = new RegExp(`${queryNormalized}`, 'i');
            if (regex.test(searchText)) {
              matchScore += 15;   // Higher priority for description matches
            }
          }
        }
      }

      if (matchFound && matchScore >= 5) {
        results.push({
          key: key,
          value: value,
          matchScore: matchScore,
          totalCount: valueEntries[0].countAll,
          definition: valueEntries[0].definition_ca || valueEntries[0].definition_es || valueEntries[0].definition_en
        });
      }
    }
  }

  // Sort by relevance score first, then by count (most popular first)
  return results.sort((a, b) => {
    const aScore = (a.matchScore || 0) * 10;  // Give higher weight to relevance
    const bScore = (b.matchScore || 0) * 10;

    // First sort by relevance score (higher is better)
    if (aScore !== bScore) {
      return bScore - aScore;
    }

    // Then sort by count (most popular first)
    return b.totalCount - a.totalCount;
  }).slice(0, 10);
}

// Probar la búsqueda
console.log('🔍 Testing search for "roba":');
const results = testCurrentSearch('roba');
console.log('Results:');
results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.key}=${result.value} (score: ${result.matchScore}, count: ${result.totalCount})`);
  console.log(`   Definition: ${result.definition}`);
});
