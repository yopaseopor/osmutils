//import { an } from './an.js';
//import { ar } from './ar.js';
//import { ast } from './ast.js';
//import { bn } from './bn.js';
import { ca } from './ca.js';
//import { da } from './da.js';
//import { de } from './de.js';
import { en } from './en.js';
import { es } from './es.js';
//import { eu } from './eu.js';
//import { fi } from './fi.js';
//import { fr } from './fr.js';
//import { gl } from './gl.js';
//import { hi } from './hi.js';
//import { it } from './it.js';
//import { ja } from './ja.js';
//import { ko } from './ko.js';
//import { nl } from './nl.js';
//import { no } from './no.js';
//import { pl } from './pl.js';
//import { pt } from './pt.js';
//import { ru } from './ru.js';
//import { sv } from './sv.js';
//import { uk } from './uk.js';
//import { vi } from './vi.js';
//import { zh } from './zh.js';
//import { bg } from './bg.js';
//import { cs } from './cs.js';
//import { el } from './el.js';
//import { hr } from './hr.js';
//import { hu } from './hu.js';
//import { ro } from './ro.js';
//import { sk } from './sk.js';
//import { sr } from './sr.js';

// Create a sorted and formatted languages object
export const languages = (() => {
    const langEntries = [
        { code: 'ca', native: 'Català', en: 'Catalan', translations: ca },
        { code: 'en', native: 'English', en: 'English', translations: en },
        { code: 'es', native: 'Español', en: 'Spanish', translations: es }
    ];

    // Sort by English name
    langEntries.sort((a, b) => a.en.localeCompare(b.en));

    // Convert to object with formatted names
    return langEntries.reduce((acc, { code, native, en, translations, rtl }) => {
        acc[code] = {
            name: `${native} (${en}) (AI-IA)`,
            translations,
            ...(rtl ? { rtl } : {})
        };
        return acc;
    }, {});
})();

let currentLanguage = 'en';

export function setLanguage(lang, updateURL = true) {
    if (languages[lang]) {
        currentLanguage = lang;
        // Update the HTML lang attribute
        document.documentElement.lang = lang;
        // Update all text elements with the new translations
        updateTranslations();
        // Re-initialize overlays with translations for the new language
        if (window.getAllOverlays) {
            window.allOverlays = window.getAllOverlays();
            window.dispatchEvent(new CustomEvent('overlaysUpdated', { detail: window.allOverlays }));
        }
        // Update config i18n if it exists
        if (window.config && window.config.i18n) {
            Object.keys(window.config.i18n).forEach(key => {
                window.config.i18n[key] = getTranslation(key);
            });
        }
        // Update URL if requested
        if (updateURL) {
            updateLanguageInURL(lang);
        }
        // Dispatch language changed event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
}

export function getCurrentLanguage() {
    return currentLanguage;
}

export function getTranslation(key) {
    // First try to get translation from the module system
    const moduleTranslation = languages[currentLanguage].translations[key];
    if (moduleTranslation) return moduleTranslation;
    
    // Then try to get it from config if available
    if (window.config && window.config.i18n && window.config.i18n[key]) {
        return window.config.i18n[key];
    }
    
    // Finally return the key itself if no translation found
    return key;
}

export function updateTranslations() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
}

function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return languages[langParam] ? langParam : null;
}

export function updateLanguageInURL(lang) {
    if (!lang || !languages[lang]) return;
    
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    
    // Only update if the language is different
    if (params.get('lang') !== lang) {
        params.set('lang', lang);
        url.search = params.toString();
        
        // Use replaceState to avoid adding to browser history
        window.history.replaceState({}, '', url);
        
        // Update the current language
        currentLanguage = lang;
        
        // Dispatch language changed event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
}

// Handle URL changes
window.addEventListener('popstate', () => {
    const urlLang = getLanguageFromURL();
    if (urlLang) {
        setLanguage(urlLang, false);
    }
});

// Expose updateTranslations globally for overlays/layers re-render
window.updateTranslations = updateTranslations;

// Initialize translations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // First check URL for language parameter
    const urlLang = getLanguageFromURL();
    if (urlLang) {
        setLanguage(urlLang, false);
        return;
    }

    // If no URL parameter, use browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'es', 'ca'];
    const initialLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    setLanguage(initialLang, true);
}); 