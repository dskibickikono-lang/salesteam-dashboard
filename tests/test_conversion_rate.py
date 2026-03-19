import json
from playwright.sync_api import sync_playwright
import http.server
import threading
import socket
import sys

def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

class Server:
    def __init__(self):
        self.port = find_free_port()
        self.httpd = http.server.HTTPServer(("", self.port), http.server.SimpleHTTPRequestHandler)
        self.thread = threading.Thread(target=self.httpd.serve_forever)
        self.thread.daemon = True

    def start(self):
        self.thread.start()
        return f"http://localhost:{self.port}"

    def stop(self):
        self.httpd.shutdown()

def test_conversion_rate():
    server = Server()
    base_url = server.start()

    success = True
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()

            # Block external CDNs
            page.route("**/cdn.tailwindcss.com**", lambda route: route.abort())
            page.route("**/cdn.jsdelivr.net**", lambda route: route.abort())

            page.goto(f"{base_url}/index.html")

            test_scenarios = [
                {
                    "name": "Standard scenario",
                    "metrics": [{"meetings": 10, "contracts_signed": 2}],
                    "expected": "20.0"
                },
                {
                    "name": "Zero meetings",
                    "metrics": [{"meetings": 0, "contracts_signed": 0}],
                    "expected": 0
                },
                {
                    "name": "Rounding scenario",
                    "metrics": [{"meetings": 3, "contracts_signed": 1}],
                    "expected": "33.3"
                },
                {
                    "name": "Empty metrics",
                    "metrics": [],
                    "expected": 0
                },
                {
                    "name": "Multiple entries",
                    "metrics": [
                        {"meetings": 5, "contracts_signed": 1},
                        {"meetings": 5, "contracts_signed": 2}
                    ],
                    "expected": "30.0"
                }
            ]

            for scenario in test_scenarios:
                metrics_json = json.dumps(scenario['metrics'])
                result = page.evaluate(f"""
                    () => {{
                        const data = dashboardData();
                        data.weeklyMetrics = {metrics_json};
                        return data.conversionRate;
                    }}
                """)
                if result == scenario['expected']:
                    print(f"PASS: {scenario['name']}")
                else:
                    print(f"FAIL: {scenario['name']}. Expected {scenario['expected']}, got {result}")
                    success = False

            browser.close()
    finally:
        server.stop()
    return success

if __name__ == "__main__":
    if test_conversion_rate():
        print("\nAll tests passed!")
    else:
        print("\nSome tests failed!")
        sys.exit(1)
