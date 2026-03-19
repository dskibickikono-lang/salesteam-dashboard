import os
from playwright.sync_api import sync_playwright

def run_tests():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Intercept and block external requests to avoid timeouts
        def intercept_route(route):
            if any(domain in route.request.url for domain in ["cdn.tailwindcss.com", "cdn.jsdelivr.net"]):
                route.abort()
            else:
                route.continue_()

        page.route("**/*", intercept_route)

        # Load the index.html file
        abs_path = os.path.abspath("index.html")
        page.goto(f"file://{abs_path}")

        print("Testing dashboardData().conversionRate logic...")

        # Test normal case
        res1 = page.evaluate("""() => {
            const data = dashboardData();
            Object.defineProperty(data, 'totalMeetings', { get: () => 10 });
            Object.defineProperty(data, 'totalContracts', { get: () => 2 });
            return data.conversionRate;
        }""")
        print(f"Normal Case (10 meetings, 2 contracts): Expected '20.0', Got '{res1}'")
        assert res1 == "20.0"

        # Test zero meetings case
        res2 = page.evaluate("""() => {
            const data = dashboardData();
            Object.defineProperty(data, 'totalMeetings', { get: () => 0 });
            Object.defineProperty(data, 'totalContracts', { get: () => 0 });
            return data.conversionRate;
        }""")
        print(f"Zero Meetings Case (0 meetings, 0 contracts): Expected '0.0', Got '{res2}'")
        assert res2 == "0.0"

        # Test zero contracts case
        res3 = page.evaluate("""() => {
            const data = dashboardData();
            Object.defineProperty(data, 'totalMeetings', { get: () => 10 });
            Object.defineProperty(data, 'totalContracts', { get: () => 0 });
            return data.conversionRate;
        }""")
        print(f"Zero Contracts Case (10 meetings, 0 contracts): Expected '0.0', Got '{res3}'")
        assert res3 == "0.0"

        print("Tests completed successfully!")
        browser.close()

if __name__ == "__main__":
    try:
        run_tests()
    except Exception as e:
        print(f"Test failed: {e}")
        exit(1)
