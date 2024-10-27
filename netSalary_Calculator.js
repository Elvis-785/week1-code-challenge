function calculateNetSalary(basicSalary, benefits) {
    const taxRates = [
        { limit: 24000, rate: 0.1 },
        { limit: 32333, rate: 0.25 },
        { limit: 500000, rate: 0.3 },
		{limit: 800000, rate:0.325},
		{limit: Infinity, rate:0.35} 
    ];
    const nhifRates = [
        { limit: 5999, rate: 150 },
        { limit: 7999, rate: 300 },
        { limit: 11999, rate: 400 },
        { limit: 14999, rate: 500 },
        { limit: 19999, rate: 600 },
        { limit: 24999, rate: 750 },
        { limit: 29999, rate: 850 },
        { limit: 34999, rate: 900 },
        { limit: 39999, rate: 950 },
        { limit: 44999, rate: 1000 },
        { limit: 49999, rate: 1100 },
        { limit: 59999, rate: 1200 },
        { limit: 69999, rate: 1300 },
        { limit: 79999, rate: 1400 },
        { limit: 89999, rate: 1500 },
        { limit: 99999, rate: 1600 },
        { limit: Infinity, rate: 1700 }
    ];
    const nssfRate = 0.06;
    const maxNSSF = 1080;

    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let taxableIncome = grossSalary;
    let paye = 0;
    for (const bracket of taxRates) {
        if (taxableIncome > 0) {
            const taxedAmount = Math.min(taxableIncome, bracket.limit);
            paye += taxedAmount * bracket.rate;
            taxableIncome -= taxedAmount;
        }
    }

    // Calculate NHIF
    let nhif = 0;
    for (const bracket of nhifRates) {
        if (grossSalary <= bracket.limit) {
            nhif = bracket.rate;
            break;
        }
    }

    // Calculate NSSF
    let nssf = Math.min(grossSalary * nssfRate, maxNSSF);

    // Calculate Net Salary
    let netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Example usage
const basicSalary = 1400000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary: Ksh " + result.grossSalary);
console.log("PAYE: Ksh " + result.paye);
console.log("NHIF: Ksh " + result.nhif);
console.log("NSSF: Ksh " + result.nssf);
console.log("Net Salary: Ksh " + result.netSalary);
