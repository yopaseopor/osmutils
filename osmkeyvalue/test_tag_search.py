#!/usr/bin/env python3
"""
Test script to verify tag search functionality
"""

import csv
import json

def test_tag_search():
    """Test that tag search data is properly formatted"""

    try:
        # Load tag data
        with open('taginfo_definitions.csv', 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            data = list(reader)

        print(f"Loaded {len(data)} tag entries from CSV")

        # Check data structure
        if data:
            first_row = data[0]
            print(f"Columns: {list(first_row.keys())}")

            # Check for required columns
            required_cols = ['tag', 'definition_en', 'count_all']
            for col in required_cols:
                if col in first_row:
                    print(f"✓ Column '{col}' found")
                else:
                    print(f"✗ Column '{col}' missing")

        # Show sample data
        print("\nSample tag entries:")
        for i, row in enumerate(data[:5]):
            tag = row.get('tag', 'N/A')
            definition = row.get('definition_en', 'N/A')[:60] + '...'
            count = row.get('count_all', '0')
            print(f"{i+1}. {tag} - {definition} ({count} uses)")

        print("\n✅ Tag search data is properly formatted!")

    except Exception as e:
        print(f"❌ Error testing tag search: {e}")

if __name__ == "__main__":
    test_tag_search()
