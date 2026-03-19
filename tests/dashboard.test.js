const { expect, test, describe } = require("bun:test");
const { calculateConversionRate, dashboardData } = require("../js/dashboard.js");

describe("calculateConversionRate", () => {
    test("calculates conversion rate correctly for normal case", () => {
        expect(calculateConversionRate(2, 10)).toBe("20.0");
    });

    test("handles zero meetings by returning 0", () => {
        expect(calculateConversionRate(2, 0)).toBe(0);
    });

    test("handles fractional results by rounding to 1 decimal place", () => {
        expect(calculateConversionRate(1, 3)).toBe("33.3");
    });

    test("handles zero contracts", () => {
        expect(calculateConversionRate(0, 10)).toBe("0.0");
    });

    test("handles very small conversion rates", () => {
        expect(calculateConversionRate(1, 1000)).toBe("0.1");
    });

    test("handles 100% conversion", () => {
        expect(calculateConversionRate(10, 10)).toBe("100.0");
    });
});

describe("dashboardData", () => {
    test("conversionRate getter calculates correctly from weeklyMetrics", () => {
        const data = dashboardData();
        // Override weeklyMetrics for testing
        data.weeklyMetrics = [
            { meetings: 10, contracts_signed: 2 },
            { meetings: 5, contracts_signed: 1 }
        ];
        // totalMeetings: 15, totalContracts: 3 -> 3/15 = 0.2 -> 20.0%
        expect(data.conversionRate).toBe("20.0");
    });

    test("totalMeetings getter sums correctly", () => {
        const data = dashboardData();
        data.weeklyMetrics = [
            { meetings: 5, contracts_signed: 0 },
            { meetings: 8, contracts_signed: 0 }
        ];
        expect(data.totalMeetings).toBe(13);
    });

    test("totalContracts getter sums correctly", () => {
        const data = dashboardData();
        data.weeklyMetrics = [
            { meetings: 0, contracts_signed: 3 },
            { meetings: 0, contracts_signed: 4 }
        ];
        expect(data.totalContracts).toBe(7);
    });

    test("handles zero meetings in dashboardData", () => {
        const data = dashboardData();
        data.weeklyMetrics = [];
        expect(data.totalMeetings).toBe(0);
        expect(data.conversionRate).toBe(0);
    });

    test("rankedMembers includes correctly calculated conversion rate", () => {
        const data = dashboardData();
        data.weeklyMetrics = [
            { team_member: "Alice", meetings: 10, contracts_signed: 2 },
            { team_member: "Bob", meetings: 10, contracts_signed: 5 }
        ];
        const ranked = data.rankedMembers;
        const alice = ranked.find(m => m.name === "Alice");
        const bob = ranked.find(m => m.name === "Bob");

        expect(alice.conversion).toBe("20.0");
        expect(bob.conversion).toBe("50.0");
    });
});
