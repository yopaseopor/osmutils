#!/usr/bin/env python3
"""
Simple HTTP server to test the OSM map interface with tag search
"""

import http.server
import socketserver
import webbrowser
import os
import sys

def run_server():
    """Start a simple HTTP server to serve the map interface"""

    PORT = 8000

    # Change to the osmkeyvalue directory
    os.chdir('d:\\_x\\a\\GitHub\\_osmutils\\osmkeyvalue')

    # Create server
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), Handler)

    print(f"🚀 Starting server at http://localhost:{PORT}")
    print(f"📂 Serving files from: {os.getcwd()}")
    print(f"🗺️  Open http://localhost:{PORT} in your browser")
    print("🔍 Look for the 'Tags' button in the map controls")
    print("⚠️  Press Ctrl+C to stop the server")

    try:
        # Open browser automatically
        webbrowser.open(f'http://localhost:{PORT}')
    except:
        print("Could not open browser automatically")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")
        httpd.shutdown()

if __name__ == "__main__":
    run_server()
