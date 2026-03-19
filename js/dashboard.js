function calculateConversionRate(contracts, meetings) {
    return meetings > 0 ? ((contracts / meetings) * 100).toFixed(1) : 0;
}

function dashboardData() {
    return {
        currentView: 'overview',
        selectedMonth: 'all',
        selectedMember: 'all',

        // REAL DATA FROM CSV FILES (COMPLETED)
        weeklyMetrics: [
            {"team_member":"Dawid S.","month_number":1,"month_name":"Styczeń","emails_introduction":0,"meetings":1,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":1,"month_name":"Styczeń","emails_introduction":2,"meetings":1,"emails_offers":1,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":1,"month_name":"Styczeń","emails_introduction":3,"meetings":2,"emails_offers":2,"phone_calls":19,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":1,"month_name":"Styczeń","emails_introduction":2,"meetings":1,"emails_offers":2,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":1,"month_name":"Styczeń","emails_introduction":14,"meetings":2,"emails_offers":2,"phone_calls":7,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":1,"month_name":"Styczeń","emails_introduction":2,"meetings":3,"emails_offers":7,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":1,"month_name":"Styczeń","emails_introduction":5,"meetings":2,"emails_offers":2,"phone_calls":12,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":1,"month_name":"Styczeń","emails_introduction":4,"meetings":1,"emails_offers":2,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Piotr","month_number":1,"month_name":"Styczeń","emails_introduction":5,"meetings":4,"emails_offers":1,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Piotr","month_number":1,"month_name":"Styczeń","emails_introduction":2,"meetings":4,"emails_offers":2,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Piotr","month_number":1,"month_name":"Styczeń","emails_introduction":4,"meetings":4,"emails_offers":3,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":1,"month_name":"Styczeń","emails_introduction":8,"meetings":0,"emails_offers":0,"phone_calls":21,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":1,"month_name":"Styczeń","emails_introduction":1,"meetings":1,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":1,"month_name":"Styczeń","emails_introduction":0,"meetings":1,"emails_offers":2,"phone_calls":22,"contracts_signed":1},
            {"team_member":"Bartek C.","month_number":1,"month_name":"Styczeń","emails_introduction":1,"meetings":0,"emails_offers":4,"phone_calls":40,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":1,"month_name":"Styczeń","emails_introduction":27,"meetings":21,"emails_offers":2,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":1,"month_name":"Styczeń","emails_introduction":15,"meetings":25,"emails_offers":7,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":1,"month_name":"Styczeń","emails_introduction":24,"meetings":16,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":1,"month_name":"Styczeń","emails_introduction":36,"meetings":22,"emails_offers":2,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":2,"month_name":"Luty","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":6,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":2,"month_name":"Luty","emails_introduction":2,"meetings":2,"emails_offers":2,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":2,"month_name":"Luty","emails_introduction":2,"meetings":0,"emails_offers":1,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":2,"month_name":"Luty","emails_introduction":6,"meetings":1,"emails_offers":1,"phone_calls":13,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":2,"month_name":"Luty","emails_introduction":3,"meetings":2,"emails_offers":2,"phone_calls":8,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":2,"month_name":"Luty","emails_introduction":3,"meetings":2,"emails_offers":2,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":2,"month_name":"Luty","emails_introduction":4,"meetings":2,"emails_offers":2,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Piotr","month_number":2,"month_name":"Luty","emails_introduction":4,"meetings":10,"emails_offers":2,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":2,"month_name":"Luty","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":0,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":2,"month_name":"Luty","emails_introduction":4,"meetings":1,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":2,"month_name":"Luty","emails_introduction":14,"meetings":0,"emails_offers":2,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":2,"month_name":"Luty","emails_introduction":14,"meetings":1,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":2,"month_name":"Luty","emails_introduction":4,"meetings":2,"emails_offers":1,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":2,"month_name":"Luty","emails_introduction":6,"meetings":2,"emails_offers":3,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":2,"month_name":"Luty","emails_introduction":1,"meetings":1,"emails_offers":1,"phone_calls":13,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":2,"month_name":"Luty","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":0,"emails_offers":4,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":1,"emails_offers":1,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":3,"month_name":"Marzec","emails_introduction":2,"meetings":1,"emails_offers":3,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":3,"month_name":"Marzec","emails_introduction":1,"meetings":2,"emails_offers":0,"phone_calls":8,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":0,"emails_offers":2,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":3,"month_name":"Marzec","emails_introduction":5,"meetings":1,"emails_offers":3,"phone_calls":8,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":1,"emails_offers":1,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":3,"month_name":"Marzec","emails_introduction":2,"meetings":2,"emails_offers":2,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Piotr","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":10,"emails_offers":2,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":3,"month_name":"Marzec","emails_introduction":8,"meetings":6,"emails_offers":2,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Piotr","month_number":3,"month_name":"Marzec","emails_introduction":5,"meetings":12,"emails_offers":2,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Piotr","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":4,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":3,"month_name":"Marzec","emails_introduction":4,"meetings":3,"emails_offers":1,"phone_calls":1,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":3,"month_name":"Marzec","emails_introduction":2,"meetings":0,"emails_offers":0,"phone_calls":28,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":3,"month_name":"Marzec","emails_introduction":0,"meetings":1,"emails_offers":3,"phone_calls":29,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":3,"month_name":"Marzec","emails_introduction":3,"meetings":0,"emails_offers":0,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":3,"month_name":"Marzec","emails_introduction":8,"meetings":0,"emails_offers":0,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":3,"month_name":"Marzec","emails_introduction":5,"meetings":0,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":3,"month_name":"Marzec","emails_introduction":3,"meetings":0,"emails_offers":1,"phone_calls":13,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":3,"month_name":"Marzec","emails_introduction":6,"meetings":1,"emails_offers":0,"phone_calls":2,"contracts_signed":1},
            {"team_member":"Bartek Z.","month_number":3,"month_name":"Marzec","emails_introduction":10,"meetings":4,"emails_offers":3,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":3,"month_name":"Marzec","emails_introduction":13,"meetings":0,"emails_offers":0,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":3,"month_name":"Marzec","emails_introduction":14,"meetings":2,"emails_offers":1,"phone_calls":30,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":0,"emails_offers":1,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":4,"month_name":"Kwiecień","emails_introduction":4,"meetings":0,"emails_offers":2,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":4,"month_name":"Kwiecień","emails_introduction":2,"meetings":1,"emails_offers":2,"phone_calls":12,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":4,"month_name":"Kwiecień","emails_introduction":1,"meetings":1,"emails_offers":0,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":4,"month_name":"Kwiecień","emails_introduction":2,"meetings":0,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":4,"month_name":"Kwiecień","emails_introduction":6,"meetings":1,"emails_offers":1,"phone_calls":5,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":4,"month_name":"Kwiecień","emails_introduction":7,"meetings":1,"emails_offers":1,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":4,"month_name":"Kwiecień","emails_introduction":12,"meetings":1,"emails_offers":1,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":4,"month_name":"Kwiecień","emails_introduction":10,"meetings":0,"emails_offers":2,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":4,"month_name":"Kwiecień","emails_introduction":1,"meetings":0,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Piotr","month_number":4,"month_name":"Kwiecień","emails_introduction":3,"meetings":2,"emails_offers":2,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":4,"month_name":"Kwiecień","emails_introduction":4,"meetings":4,"emails_offers":4,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":4,"month_name":"Kwiecień","emails_introduction":3,"meetings":4,"emails_offers":2,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":4,"emails_offers":2,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Piotr","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":2,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":4,"month_name":"Kwiecień","emails_introduction":5,"meetings":1,"emails_offers":1,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":0,"emails_offers":1,"phone_calls":46,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":4,"month_name":"Kwiecień","emails_introduction":8,"meetings":0,"emails_offers":4,"phone_calls":7,"contracts_signed":1},
            {"team_member":"Bartek C.","month_number":4,"month_name":"Kwiecień","emails_introduction":5,"meetings":0,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":17,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":4,"month_name":"Kwiecień","emails_introduction":6,"meetings":0,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":4,"month_name":"Kwiecień","emails_introduction":3,"meetings":1,"emails_offers":0,"phone_calls":1,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":4,"month_name":"Kwiecień","emails_introduction":2,"meetings":0,"emails_offers":1,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":4,"month_name":"Kwiecień","emails_introduction":1,"meetings":0,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":4,"month_name":"Kwiecień","emails_introduction":0,"meetings":1,"emails_offers":2,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":4,"month_name":"Kwiecień","emails_introduction":41,"meetings":0,"emails_offers":2,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":4,"month_name":"Kwiecień","emails_introduction":14,"meetings":0,"emails_offers":0,"phone_calls":35,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":4,"month_name":"Kwiecień","emails_introduction":21,"meetings":1,"emails_offers":1,"phone_calls":30,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":4,"month_name":"Kwiecień","emails_introduction":20,"meetings":0,"emails_offers":1,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":4,"month_name":"Kwiecień","emails_introduction":20,"meetings":0,"emails_offers":0,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":5,"month_name":"Maj","emails_introduction":1,"meetings":1,"emails_offers":1,"phone_calls":13,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":5,"month_name":"Maj","emails_introduction":1,"meetings":4,"emails_offers":2,"phone_calls":13,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":5,"month_name":"Maj","emails_introduction":8,"meetings":1,"emails_offers":3,"phone_calls":14,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":5,"month_name":"Maj","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":0,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":5,"month_name":"Maj","emails_introduction":15,"meetings":2,"emails_offers":1,"phone_calls":18,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":5,"month_name":"Maj","emails_introduction":16,"meetings":3,"emails_offers":3,"phone_calls":28,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":5,"month_name":"Maj","emails_introduction":14,"meetings":4,"emails_offers":3,"phone_calls":17,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":5,"month_name":"Maj","emails_introduction":22,"meetings":4,"emails_offers":2,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Piotr","month_number":5,"month_name":"Maj","emails_introduction":3,"meetings":4,"emails_offers":3,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":5,"month_name":"Maj","emails_introduction":3,"meetings":3,"emails_offers":5,"phone_calls":7,"contracts_signed":0},
            {"team_member":"Piotr","month_number":5,"month_name":"Maj","emails_introduction":3,"meetings":3,"emails_offers":4,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Piotr","month_number":5,"month_name":"Maj","emails_introduction":4,"meetings":3,"emails_offers":3,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":5,"month_name":"Maj","emails_introduction":0,"meetings":6,"emails_offers":2,"phone_calls":18,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":5,"month_name":"Maj","emails_introduction":1,"meetings":2,"emails_offers":2,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":5,"month_name":"Maj","emails_introduction":2,"meetings":2,"emails_offers":1,"phone_calls":19,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":5,"month_name":"Maj","emails_introduction":1,"meetings":2,"emails_offers":0,"phone_calls":19,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":5,"month_name":"Maj","emails_introduction":2,"meetings":4,"emails_offers":1,"phone_calls":1,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":5,"month_name":"Maj","emails_introduction":2,"meetings":8,"emails_offers":1,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":5,"month_name":"Maj","emails_introduction":6,"meetings":1,"emails_offers":2,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":5,"month_name":"Maj","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":1,"contracts_signed":1},
            {"team_member":"Bartek Z.","month_number":5,"month_name":"Maj","emails_introduction":9,"meetings":3,"emails_offers":6,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":5,"month_name":"Maj","emails_introduction":18,"meetings":4,"emails_offers":3,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":5,"month_name":"Maj","emails_introduction":10,"meetings":3,"emails_offers":0,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":5,"month_name":"Maj","emails_introduction":16,"meetings":2,"emails_offers":2,"phone_calls":15,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":6,"month_name":"Czerwiec","emails_introduction":0,"meetings":0,"emails_offers":2,"phone_calls":3,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":6,"month_name":"Czerwiec","emails_introduction":2,"meetings":2,"emails_offers":3,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":6,"month_name":"Czerwiec","emails_introduction":2,"meetings":2,"emails_offers":2,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":6,"month_name":"Czerwiec","emails_introduction":4,"meetings":0,"emails_offers":3,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":6,"month_name":"Czerwiec","emails_introduction":11,"meetings":3,"emails_offers":3,"phone_calls":20,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":6,"month_name":"Czerwiec","emails_introduction":12,"meetings":3,"emails_offers":2,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":6,"month_name":"Czerwiec","emails_introduction":6,"meetings":2,"emails_offers":1,"phone_calls":8,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":6,"month_name":"Czerwiec","emails_introduction":6,"meetings":0,"emails_offers":0,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Piotr","month_number":6,"month_name":"Czerwiec","emails_introduction":3,"meetings":6,"emails_offers":1,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Piotr","month_number":6,"month_name":"Czerwiec","emails_introduction":2,"meetings":4,"emails_offers":0,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Piotr","month_number":6,"month_name":"Czerwiec","emails_introduction":2,"meetings":2,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Piotr","month_number":6,"month_name":"Czerwiec","emails_introduction":3,"meetings":5,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":6,"month_name":"Czerwiec","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":6,"month_name":"Czerwiec","emails_introduction":2,"meetings":2,"emails_offers":0,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":6,"month_name":"Czerwiec","emails_introduction":1,"meetings":3,"emails_offers":1,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":6,"month_name":"Czerwiec","emails_introduction":1,"meetings":1,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":6,"month_name":"Czerwiec","emails_introduction":7,"meetings":2,"emails_offers":3,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":6,"month_name":"Czerwiec","emails_introduction":0,"meetings":1,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":6,"month_name":"Czerwiec","emails_introduction":0,"meetings":4,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":6,"month_name":"Czerwiec","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":6,"month_name":"Czerwiec","emails_introduction":15,"meetings":3,"emails_offers":0,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":6,"month_name":"Czerwiec","emails_introduction":0,"meetings":1,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":6,"month_name":"Czerwiec","emails_introduction":3,"meetings":1,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":6,"month_name":"Czerwiec","emails_introduction":7,"meetings":1,"emails_offers":0,"phone_calls":20,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":7,"month_name":"Lipiec","emails_introduction":5,"meetings":1,"emails_offers":3,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":2,"emails_offers":4,"phone_calls":21,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":2,"emails_offers":2,"phone_calls":7,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":7,"month_name":"Lipiec","emails_introduction":2,"meetings":1,"emails_offers":2,"phone_calls":5,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":7,"month_name":"Lipiec","emails_introduction":13,"meetings":2,"emails_offers":2,"phone_calls":18,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":7,"month_name":"Lipiec","emails_introduction":6,"meetings":2,"emails_offers":2,"phone_calls":11,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":7,"month_name":"Lipiec","emails_introduction":16,"meetings":2,"emails_offers":2,"phone_calls":14,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":7,"month_name":"Lipiec","emails_introduction":2,"meetings":2,"emails_offers":2,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":7,"month_name":"Lipiec","emails_introduction":4,"meetings":3,"emails_offers":2,"phone_calls":11,"contracts_signed":1},
            {"team_member":"Piotr","month_number":7,"month_name":"Lipiec","emails_introduction":4,"meetings":4,"emails_offers":1,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":7,"month_name":"Lipiec","emails_introduction":4,"meetings":6,"emails_offers":2,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":7,"month_name":"Lipiec","emails_introduction":3,"meetings":8,"emails_offers":3,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Piotr","month_number":7,"month_name":"Lipiec","emails_introduction":6,"meetings":5,"emails_offers":4,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":7,"month_name":"Lipiec","emails_introduction":5,"meetings":5,"emails_offers":3,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":0,"emails_offers":1,"phone_calls":2,"contracts_signed":1},
            {"team_member":"Bartek C.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":3,"emails_offers":2,"phone_calls":24,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":7,"month_name":"Lipiec","emails_introduction":4,"meetings":3,"emails_offers":2,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":1,"emails_offers":2,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":7,"month_name":"Lipiec","emails_introduction":5,"meetings":1,"emails_offers":0,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":2,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":3,"emails_offers":3,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":7,"month_name":"Lipiec","emails_introduction":3,"meetings":1,"emails_offers":1,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":7,"month_name":"Lipiec","emails_introduction":1,"meetings":3,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":7,"month_name":"Lipiec","emails_introduction":15,"meetings":3,"emails_offers":1,"phone_calls":20,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":7,"month_name":"Lipiec","emails_introduction":15,"meetings":2,"emails_offers":3,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":7,"month_name":"Lipiec","emails_introduction":7,"meetings":3,"emails_offers":5,"phone_calls":10,"contracts_signed":1},
            {"team_member":"Bartek Z.","month_number":7,"month_name":"Lipiec","emails_introduction":8,"meetings":1,"emails_offers":3,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":7,"month_name":"Lipiec","emails_introduction":22,"meetings":0,"emails_offers":0,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":1,"emails_offers":0,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":7,"month_name":"Lipiec","emails_introduction":0,"meetings":2,"emails_offers":0,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":8,"month_name":"Sierpień","emails_introduction":1,"meetings":3,"emails_offers":3,"phone_calls":13,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":8,"month_name":"Sierpień","emails_introduction":2,"meetings":1,"emails_offers":1,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":8,"month_name":"Sierpień","emails_introduction":1,"meetings":2,"emails_offers":2,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":2,"emails_offers":1,"phone_calls":12,"contracts_signed":2},
            {"team_member":"Dawid K.","month_number":8,"month_name":"Sierpień","emails_introduction":8,"meetings":1,"emails_offers":1,"phone_calls":7,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":8,"month_name":"Sierpień","emails_introduction":11,"meetings":2,"emails_offers":3,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Piotr","month_number":8,"month_name":"Sierpień","emails_introduction":6,"meetings":3,"emails_offers":3,"phone_calls":6,"contracts_signed":0},
            {"team_member":"Piotr","month_number":8,"month_name":"Sierpień","emails_introduction":10,"meetings":5,"emails_offers":3,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Piotr","month_number":8,"month_name":"Sierpień","emails_introduction":4,"meetings":3,"emails_offers":3,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":8,"month_name":"Sierpień","emails_introduction":4,"meetings":4,"emails_offers":2,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":4,"emails_offers":3,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":8,"month_name":"Sierpień","emails_introduction":4,"meetings":3,"emails_offers":2,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":8,"month_name":"Sierpień","emails_introduction":3,"meetings":2,"emails_offers":2,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Bartek C.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":1,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":6,"emails_offers":2,"phone_calls":3,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":8,"month_name":"Sierpień","emails_introduction":1,"meetings":11,"emails_offers":0,"phone_calls":1,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":8,"month_name":"Sierpień","emails_introduction":0,"meetings":4,"emails_offers":0,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":8,"month_name":"Sierpień","emails_introduction":1,"meetings":5,"emails_offers":0,"phone_calls":2,"contracts_signed":1},
            {"team_member":"Bartek Z.","month_number":8,"month_name":"Sierpień","emails_introduction":12,"meetings":2,"emails_offers":1,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":8,"month_name":"Sierpień","emails_introduction":9,"meetings":3,"emails_offers":1,"phone_calls":20,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":8,"month_name":"Sierpień","emails_introduction":10,"meetings":2,"emails_offers":4,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":8,"month_name":"Sierpień","emails_introduction":10,"meetings":2,"emails_offers":2,"phone_calls":20,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":8,"month_name":"Sierpień","emails_introduction":45,"meetings":2,"emails_offers":0,"phone_calls":28,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":8,"month_name":"Sierpień","emails_introduction":17,"meetings":0,"emails_offers":2,"phone_calls":23,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":8,"month_name":"Sierpień","emails_introduction":16,"meetings":3,"emails_offers":3,"phone_calls":25,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":8,"month_name":"Sierpień","emails_introduction":32,"meetings":3,"emails_offers":1,"phone_calls":23,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":9,"month_name":"Wrzesień","emails_introduction":2,"meetings":3,"emails_offers":3,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":9,"month_name":"Wrzesień","emails_introduction":3,"meetings":0,"emails_offers":4,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":9,"month_name":"Wrzesień","emails_introduction":3,"meetings":2,"emails_offers":5,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":9,"month_name":"Wrzesień","emails_introduction":1,"meetings":3,"emails_offers":3,"phone_calls":11,"contracts_signed":1},
            {"team_member":"Dawid S.","month_number":9,"month_name":"Wrzesień","emails_introduction":0,"meetings":3,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":9,"month_name":"Wrzesień","emails_introduction":10,"meetings":3,"emails_offers":3,"phone_calls":16,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":9,"month_name":"Wrzesień","emails_introduction":12,"meetings":2,"emails_offers":2,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":9,"month_name":"Wrzesień","emails_introduction":13,"meetings":2,"emails_offers":4,"phone_calls":19,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":9,"month_name":"Wrzesień","emails_introduction":4,"meetings":1,"emails_offers":2,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":9,"month_name":"Wrzesień","emails_introduction":0,"meetings":1,"emails_offers":2,"phone_calls":0,"contracts_signed":1},
            {"team_member":"Piotr","month_number":9,"month_name":"Wrzesień","emails_introduction":12,"meetings":10,"emails_offers":5,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Piotr","month_number":9,"month_name":"Wrzesień","emails_introduction":6,"meetings":4,"emails_offers":4,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Piotr","month_number":9,"month_name":"Wrzesień","emails_introduction":4,"meetings":4,"emails_offers":3,"phone_calls":5,"contracts_signed":1},
            {"team_member":"Piotr","month_number":9,"month_name":"Wrzesień","emails_introduction":2,"meetings":4,"emails_offers":1,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Piotr","month_number":9,"month_name":"Wrzesień","emails_introduction":4,"meetings":4,"emails_offers":4,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":9,"month_name":"Wrzesień","emails_introduction":2,"meetings":4,"emails_offers":1,"phone_calls":1,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":9,"month_name":"Wrzesień","emails_introduction":1,"meetings":4,"emails_offers":4,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":9,"month_name":"Wrzesień","emails_introduction":0,"meetings":5,"emails_offers":0,"phone_calls":0,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":9,"month_name":"Wrzesień","emails_introduction":1,"meetings":3,"emails_offers":1,"phone_calls":1,"contracts_signed":1},
            {"team_member":"Szymon O.","month_number":9,"month_name":"Wrzesień","emails_introduction":1,"meetings":0,"emails_offers":0,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":9,"month_name":"Wrzesień","emails_introduction":11,"meetings":3,"emails_offers":3,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":9,"month_name":"Wrzesień","emails_introduction":20,"meetings":2,"emails_offers":5,"phone_calls":20,"contracts_signed":0},
            {"team_member":"Bartek Z.","month_number":9,"month_name":"Wrzesień","emails_introduction":10,"meetings":4,"emails_offers":5,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":9,"month_name":"Wrzesień","emails_introduction":14,"meetings":1,"emails_offers":2,"phone_calls":22,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":9,"month_name":"Wrzesień","emails_introduction":15,"meetings":2,"emails_offers":3,"phone_calls":17,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":9,"month_name":"Wrzesień","emails_introduction":5,"meetings":0,"emails_offers":3,"phone_calls":18,"contracts_signed":0},
            {"team_member":"Szymon S.","month_number":9,"month_name":"Wrzesień","emails_introduction":12,"meetings":2,"emails_offers":3,"phone_calls":21,"contracts_signed":0},
            // PAŹDZIERNIK (Nowe dane)
            {"team_member":"Dawid S.","month_number":10,"month_name":"Październik","emails_introduction":0,"meetings":5,"emails_offers":4,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":10,"month_name":"Październik","emails_introduction":3,"meetings":1,"emails_offers":4,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":10,"month_name":"Październik","emails_introduction":4,"meetings":2,"emails_offers":3,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":10,"month_name":"Październik","emails_introduction":2,"meetings":3,"emails_offers":4,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":10,"month_name":"Październik","emails_introduction":2,"meetings":2,"emails_offers":3,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":10,"month_name":"Październik","emails_introduction":7,"meetings":3,"emails_offers":3,"phone_calls":8,"contracts_signed":1},
            {"team_member":"Dawid K.","month_number":10,"month_name":"Październik","emails_introduction":11,"meetings":2,"emails_offers":1,"phone_calls":13,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":10,"month_name":"Październik","emails_introduction":5,"meetings":3,"emails_offers":3,"phone_calls":12,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":10,"month_name":"Październik","emails_introduction":8,"meetings":3,"emails_offers":3,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":10,"month_name":"Październik","emails_introduction":8,"meetings":2,"emails_offers":2,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Erwin","month_number":10,"month_name":"Październik","emails_introduction":5,"meetings":6,"emails_offers":5,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Erwin","month_number":10,"month_name":"Październik","emails_introduction":9,"meetings":7,"emails_offers":9,"phone_calls":14,"contracts_signed":0},
            {"team_member":"Piotr","month_number":10,"month_name":"Październik","emails_introduction":5,"meetings":5,"emails_offers":4,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Piotr","month_number":10,"month_name":"Październik","emails_introduction":4,"meetings":6,"emails_offers":3,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":10,"month_name":"Październik","emails_introduction":0,"meetings":0,"emails_offers":3,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":10,"month_name":"Październik","emails_introduction":5,"meetings":2,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":10,"month_name":"Październik","emails_introduction":2,"meetings":0,"emails_offers":0,"phone_calls":1,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":10,"month_name":"Październik","emails_introduction":4,"meetings":2,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":10,"month_name":"Październik","emails_introduction":5,"meetings":0,"emails_offers":0,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Wojtek","month_number":10,"month_name":"Październik","emails_introduction":10,"meetings":1,"emails_offers":1,"phone_calls":48,"contracts_signed":0},
            // LISTOPAD (Nowe dane)
            {"team_member":"Dawid S.","month_number":11,"month_name":"Listopad","emails_introduction":2,"meetings":2,"emails_offers":4,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":11,"month_name":"Listopad","emails_introduction":3,"meetings":2,"emails_offers":4,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":11,"month_name":"Listopad","emails_introduction":8,"meetings":1,"emails_offers":2,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":11,"month_name":"Listopad","emails_introduction":4,"meetings":0,"emails_offers":0,"phone_calls":7,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":11,"month_name":"Listopad","emails_introduction":4,"meetings":1,"emails_offers":2,"phone_calls":15,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":11,"month_name":"Listopad","emails_introduction":8,"meetings":2,"emails_offers":3,"phone_calls":7,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":11,"month_name":"Listopad","emails_introduction":8,"meetings":1,"emails_offers":0,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":11,"month_name":"Listopad","emails_introduction":3,"meetings":2,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":11,"month_name":"Listopad","emails_introduction":5,"meetings":3,"emails_offers":0,"phone_calls":3,"contracts_signed":0},
            {"team_member":"Erwin","month_number":11,"month_name":"Listopad","emails_introduction":4,"meetings":7,"emails_offers":2,"phone_calls":10,"contracts_signed":0},
            {"team_member":"Erwin","month_number":11,"month_name":"Listopad","emails_introduction":3,"meetings":9,"emails_offers":4,"phone_calls":11,"contracts_signed":1},
            {"team_member":"Erwin","month_number":11,"month_name":"Listopad","emails_introduction":7,"meetings":2,"emails_offers":7,"phone_calls":10,"contracts_signed":0},
            // GRUDZIEŃ (Nowe dane)
            {"team_member":"Dawid S.","month_number":12,"month_name":"Grudzień","emails_introduction":2,"meetings":3,"emails_offers":4,"phone_calls":5,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":12,"month_name":"Grudzień","emails_introduction":2,"meetings":6,"emails_offers":4,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":12,"month_name":"Grudzień","emails_introduction":1,"meetings":9,"emails_offers":2,"phone_calls":11,"contracts_signed":0},
            {"team_member":"Dawid S.","month_number":12,"month_name":"Grudzień","emails_introduction":0,"meetings":4,"emails_offers":1,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":12,"month_name":"Grudzień","emails_introduction":6,"meetings":2,"emails_offers":3,"phone_calls":8,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":12,"month_name":"Grudzień","emails_introduction":2,"meetings":1,"emails_offers":2,"phone_calls":9,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":12,"month_name":"Grudzień","emails_introduction":0,"meetings":8,"emails_offers":0,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Dawid K.","month_number":12,"month_name":"Grudzień","emails_introduction":0,"meetings":0,"emails_offers":1,"phone_calls":0,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":12,"month_name":"Grudzień","emails_introduction":2,"meetings":4,"emails_offers":0,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":12,"month_name":"Grudzień","emails_introduction":1,"meetings":7,"emails_offers":1,"phone_calls":4,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":12,"month_name":"Grudzień","emails_introduction":0,"meetings":3,"emails_offers":2,"phone_calls":2,"contracts_signed":0},
            {"team_member":"Szymon O.","month_number":12,"month_name":"Grudzień","emails_introduction":0,"meetings":0,"emails_offers":0,"phone_calls":1,"contracts_signed":0}
        ],

        volumeData: [
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Bazalt","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":20,"Suma_Wolumenu":25},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Drop","Typ_Kontraktu":"New Business","Wolumen_Startowy":15,"Wolumen_Dodatkowy":20,"Suma_Wolumenu":35},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Everdeck","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":10,"Suma_Wolumenu":15},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"FILL","Typ_Kontraktu":"New Business","Wolumen_Startowy":15,"Wolumen_Dodatkowy":20,"Suma_Wolumenu":35},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Ferita","Typ_Kontraktu":"New Business","Wolumen_Startowy":0,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":0},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Fungus","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":10,"Suma_Wolumenu":15},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"MWH Meble","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":5,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Natsu","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":20,"Suma_Wolumenu":30},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"PackProfil","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":10,"Suma_Wolumenu":15},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Pantos Nowa Wieś/LG","Typ_Kontraktu":"New Business","Wolumen_Startowy":20,"Wolumen_Dodatkowy":130,"Suma_Wolumenu":150},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Refresco","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":10,"Suma_Wolumenu":15},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Rossmann","Typ_Kontraktu":"New Business","Wolumen_Startowy":0,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":0},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Servis","Typ_Kontraktu":"New Business","Wolumen_Startowy":3,"Wolumen_Dodatkowy":5,"Suma_Wolumenu":8},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Blachere","Typ_Kontraktu":"Portfel","Wolumen_Startowy":30,"Wolumen_Dodatkowy":30,"Suma_Wolumenu":60},
            {"Rok":2025,"Sprzedawca":"Dawid K.","Klient":"Rhenus","Typ_Kontraktu":"Portfel","Wolumen_Startowy":16,"Wolumen_Dodatkowy":50,"Suma_Wolumenu":66},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"ADEX COSMETICS & PHARMA","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":53,"Suma_Wolumenu":63},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"BARWA SYSTEM","Typ_Kontraktu":"New Business","Wolumen_Startowy":6,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":6},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"BUDIZOL","Typ_Kontraktu":"New Business","Wolumen_Startowy":20,"Wolumen_Dodatkowy":14,"Suma_Wolumenu":34},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"DAM-ROB","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"EUROS ENERGY","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":4,"Suma_Wolumenu":9},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"FULL-CLEANING","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":14,"Suma_Wolumenu":24},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"Gospodarstwo Cichocki","Typ_Kontraktu":"New Business","Wolumen_Startowy":6,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":6},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"KULIKGO","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"MATPOL","Typ_Kontraktu":"New Business","Wolumen_Startowy":4,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":4},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"PIEKARNIA CHYLAK","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"PRODMAX","Typ_Kontraktu":"New Business","Wolumen_Startowy":6,"Wolumen_Dodatkowy":8,"Suma_Wolumenu":14},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"SZKŁOMAL","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"Sienkiewicz MAT-BUD","Typ_Kontraktu":"New Business","Wolumen_Startowy":20,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":20},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"BAKS","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":109,"Suma_Wolumenu":109},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"BUD-MASZ","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":5,"Suma_Wolumenu":5},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"METALKAS","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":25,"Suma_Wolumenu":25},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"NIFCO","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":52,"Suma_Wolumenu":52},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"PACZKA SMAKU","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":63,"Suma_Wolumenu":63},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"RELAX","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":4,"Suma_Wolumenu":4},
            {"Rok":2025,"Sprzedawca":"Dawid S.","Klient":"SIMOLDES (Żory + Jelcz)","Typ_Kontraktu":"Portfel","Wolumen_Startowy":0,"Wolumen_Dodatkowy":153,"Suma_Wolumenu":153},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Baczewski","Typ_Kontraktu":"New Business","Wolumen_Startowy":3,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":3},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Center-Mebel","Typ_Kontraktu":"New Business","Wolumen_Startowy":3,"Wolumen_Dodatkowy":2,"Suma_Wolumenu":5},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Cymes","Typ_Kontraktu":"New Business","Wolumen_Startowy":3,"Wolumen_Dodatkowy":2,"Suma_Wolumenu":5},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Diagnosis","Typ_Kontraktu":"New Business","Wolumen_Startowy":4,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":4},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Equalan Pharma","Typ_Kontraktu":"New Business","Wolumen_Startowy":2,"Wolumen_Dodatkowy":10,"Suma_Wolumenu":12},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"JBB","Typ_Kontraktu":"New Business","Wolumen_Startowy":10,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":10},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"Mackiewicz","Typ_Kontraktu":"New Business","Wolumen_Startowy":5,"Wolumen_Dodatkowy":1,"Suma_Wolumenu":6},
            {"Rok":2025,"Sprzedawca":"Szymon O.","Klient":"PPH Magma","Typ_Kontraktu":"New Business","Wolumen_Startowy":2,"Wolumen_Dodatkowy":0,"Suma_Wolumenu":2}
        ],

        months: [
            {num: 1, name: 'Styczeń'}, {num: 2, name: 'Luty'}, {num: 3, name: 'Marzec'},
            {num: 4, name: 'Kwiecień'}, {num: 5, name: 'Maj'}, {num: 6, name: 'Czerwiec'},
            {num: 7, name: 'Lipiec'}, {num: 8, name: 'Sierpień'}, {num: 9, name: 'Wrzesień'},
            {num: 10, name: 'Październik'}, {num: 11, name: 'Listopad'}, {num: 12, name: 'Grudzień'}
        ],

        get filteredMetrics() {
            let data = this.weeklyMetrics;
            if (this.selectedMonth !== 'all') {
                data = data.filter(d => d.month_number == this.selectedMonth);
            }
            if (this.selectedMember !== 'all') {
                data = data.filter(d => d.team_member === this.selectedMember);
            }
            return data;
        },

        get teamMembers() {
            return [...new Set(this.weeklyMetrics.map(d => d.team_member))].sort();
        },

        get totalMeetings() {
            return this.weeklyMetrics.reduce((sum, d) => sum + d.meetings, 0);
        },

        get totalContracts() {
            return this.weeklyMetrics.reduce((sum, d) => sum + d.contracts_signed, 0);
        },

        get conversionRate() {
            const meetings = this.totalMeetings;
            const contracts = this.totalContracts;
            return calculateConversionRate(contracts, meetings);
        },

        get totalActivity() {
            return this.weeklyMetrics.reduce((sum, d) => sum + d.emails_introduction + d.emails_offers + d.phone_calls, 0);
        },

        get rankedMembers() {
            const memberStats = {};
            this.filteredMetrics.forEach(d => {
                if (!memberStats[d.team_member]) {
                    memberStats[d.team_member] = { meetings: 0, contracts: 0 };
                }
                memberStats[d.team_member].meetings += d.meetings;
                memberStats[d.team_member].contracts += d.contracts_signed;
            });

            return Object.keys(memberStats).map(name => ({
                name,
                meetings: memberStats[name].meetings,
                contracts: memberStats[name].contracts,
                conversion: calculateConversionRate(memberStats[name].contracts, memberStats[name].meetings)
            })).sort((a, b) => b.contracts - a.contracts);
        },

        get top3Sellers() {
            const sellerStats = {};
            this.volumeData.forEach(d => {
                if (!sellerStats[d.Sprzedawca]) {
                    sellerStats[d.Sprzedawca] = { totalVolume: 0, newBusiness: 0, portfolio: 0 };
                }
                sellerStats[d.Sprzedawca].totalVolume += d.Suma_Wolumenu;
                if (d.Typ_Kontraktu === 'New Business') {
                    sellerStats[d.Sprzedawca].newBusiness += d.Suma_Wolumenu;
                } else {
                    sellerStats[d.Sprzedawca].portfolio += d.Suma_Wolumenu;
                }
            });

            return Object.keys(sellerStats).map(name => ({
                name,
                ...sellerStats[name]
            })).sort((a, b) => b.totalVolume - a.totalVolume).slice(0, 3);
        },

        get aiInsights() {
            const insights = [];

            // Insight 1: Best converter
            const bestConverter = this.rankedMembers[0];
            if (bestConverter) {
                insights.push(`${bestConverter.name} ma najwyższą skuteczność domykania kontraktów: ${bestConverter.contracts} kontraktów z ${bestConverter.meetings} spotkań (${bestConverter.conversion}% conv.).`);
            }

            // Insight 2: Total volume
            const totalVolume = this.volumeData.reduce((sum, d) => sum + d.Suma_Wolumenu, 0);
            const newBusinessVolume = this.volumeData.filter(d => d.Typ_Kontraktu === 'New Business').reduce((sum, d) => sum + d.Suma_Wolumenu, 0);
            const nbPercentage = ((newBusinessVolume / totalVolume) * 100).toFixed(0);
            insights.push(`Dominacja New Business: ${nbPercentage}% całkowitego wolumenu (${newBusinessVolume} z ${totalVolume}) pochodzi z nowych klientów.`);

            // Insight 3: Activity correlation
            insights.push(`Zespół przeprowadził ${this.totalMeetings} spotkań i wykonał ${this.totalActivity} aktywności sprzedażowych, co przełożyło się na ${this.totalContracts} podpisanych kontraktów.`);

            return insights;
        },

        init() {
            this.$nextTick(() => {
                this.renderEffortChart();
                this.renderFunnelChart();
                this.renderMonthlyActivityChart();
                this.renderBusinessTypeChart();
                this.renderTop3ComparisonChart();
            });
        },

        renderEffortChart() {
            const monthlyData = {};
            this.weeklyMetrics.forEach(d => {
                if (!monthlyData[d.month_name]) {
                    monthlyData[d.month_name] = { activity: 0, contracts: 0 };
                }
                monthlyData[d.month_name].activity += d.emails_introduction + d.emails_offers + d.phone_calls;
                monthlyData[d.month_name].contracts += d.contracts_signed;
            });

            const labels = Object.keys(monthlyData);
            const activityData = labels.map(m => monthlyData[m].activity);
            const contractsData = labels.map(m => monthlyData[m].contracts);

            new Chart(document.getElementById('effortChart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Aktywność (Maile + Telefony)',
                        data: activityData,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    }, {
                        label: 'Kontrakty',
                        data: contractsData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { labels: { color: '#cbd5e1' } }
                    },
                    scales: {
                        y: {
                            type: 'linear',
                            position: 'left',
                            ticks: { color: '#cbd5e1' },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' },
                            suggestedMax: 800
                        },
                        y1: {
                            type: 'linear',
                            position: 'right',
                            ticks: { color: '#cbd5e1' },
                            grid: { drawOnChartArea: false },
                            suggestedMax: 8
                        },
                        x: {
                            ticks: { color: '#cbd5e1' },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' }
                        }
                    }
                }
            });
        },

        renderFunnelChart() {
            const totalIntroEmails = this.filteredMetrics.reduce((s, d) => s + d.emails_introduction, 0);
            const totalMeetings = this.filteredMetrics.reduce((s, d) => s + d.meetings, 0);
            const totalOfferEmails = this.filteredMetrics.reduce((s, d) => s + d.emails_offers, 0);
            const totalContracts = this.filteredMetrics.reduce((s, d) => s + d.contracts_signed, 0);

            new Chart(document.getElementById('funnelChart'), {
                type: 'bar',
                data: {
                    labels: ['Maile Intro', 'Spotkania', 'Maile Oferty', 'Kontrakty'],
                    datasets: [{
                        label: 'Lejek Sprzedaży',
                        data: [totalIntroEmails, totalMeetings, totalOfferEmails, totalContracts],
                        backgroundColor: ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981']
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#cbd5e1' },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' }
                        },
                        y: {
                            ticks: { color: '#cbd5e1' },
                            grid: { display: false }
                        }
                    }
                }
            });
        },

        renderMonthlyActivityChart() {
            const monthlyActivity = {};
            this.filteredMetrics.forEach(d => {
                if (!monthlyActivity[d.month_name]) {
                    monthlyActivity[d.month_name] = { meetings: 0, emails: 0, calls: 0 };
                }
                monthlyActivity[d.month_name].meetings += d.meetings;
                monthlyActivity[d.month_name].emails += d.emails_introduction + d.emails_offers;
                monthlyActivity[d.month_name].calls += d.phone_calls;
            });

            const labels = Object.keys(monthlyActivity);

            new Chart(document.getElementById('monthlyActivityChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Spotkania',
                            data: labels.map(m => monthlyActivity[m].meetings),
                            backgroundColor: '#10b981'
                        },
                        {
                            label: 'Maile',
                            data: labels.map(m => monthlyActivity[m].emails),
                            backgroundColor: '#3b82f6'
                        },
                        {
                            label: 'Telefony',
                            data: labels.map(m => monthlyActivity[m].calls),
                            backgroundColor: '#f59e0b'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { labels: { color: '#cbd5e1' } }
                    },
                    scales: {
                        x: {
                            stacked: false,
                            ticks: { color: '#cbd5e1' },
                            grid: { display: false }
                        },
                        y: {
                            ticks: { color: '#cbd5e1' },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' }
                        }
                    }
                }
            });
        },

        renderBusinessTypeChart() {
            const newBusiness = this.volumeData.filter(d => d.Typ_Kontraktu === 'New Business').reduce((s, d) => s + d.Suma_Wolumenu, 0);
            const portfolio = this.volumeData.filter(d => d.Typ_Kontraktu === 'Portfel').reduce((s, d) => s + d.Suma_Wolumenu, 0);

            new Chart(document.getElementById('businessTypeChart'), {
                type: 'doughnut',
                data: {
                    labels: ['New Business', 'Portfel'],
                    datasets: [{
                        data: [newBusiness, portfolio],
                        backgroundColor: ['#3b82f6', '#8b5cf6']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { labels: { color: '#cbd5e1' } }
                    }
                }
            });
        },

        renderTop3ComparisonChart() {
            const top3 = this.top3Sellers;

            new Chart(document.getElementById('top3ComparisonChart'), {
                type: 'bar',
                data: {
                    labels: top3.map(s => s.name),
                    datasets: [{
                        label: 'Całkowity Wolumen',
                        data: top3.map(s => s.totalVolume),
                        backgroundColor: '#10b981'
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#cbd5e1' },
                            grid: { display: false }
                        },
                        y: {
                            ticks: { color: '#cbd5e1' },
                            grid: { color: 'rgba(148, 163, 184, 0.1)' }
                        }
                    }
                }
            });
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateConversionRate, dashboardData };
}
