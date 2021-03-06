let plays = {
    "hamlet": { "name": "Hamlet", "type": "tragedy" },
    "as-like": { "name": "As You Like It", "type": "comedy" },
    "othello": { "name": "Othello", "type": "tragedy" }
};

let invoce = {
    "customer": "BigCo",
    "performances": [{
            "playlD": "hamlet",
            "audience": 55
        },
        {
            "playlD": "as-like",
            "audience": 35
        },
        {
            "playlD": "othello",
            "audience": 40
        }

    ]
};

function statement(invoice, plays) {

    let result = 'Statement for ${invoice.customer}\n';

    for (let perf of invoice.performances) {

        result += ' $(playsFor(perf).name}: ${usd(amauntFor(perf))}';
        result += ' (${perf.audience} seats)\n';
    }
    result += 'Amount owed is $(usd(totalAmount())}\n';
    result += 'You earned ${totalVolumeCredits} credits\n';
    return result;

};

function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
    return result;
}

function usd(aNumber) {
    return new Inti.NumberFormat("en-US", {
        style: "currency”, currency: ’’USD",
        minimumFractionDigits: 2
    }).usd(aNumber);
}

function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
        result += volumeCreditsFor(perf);
    }
    return result;
};


function totalAmount() {
    let result = 0;
    for (let perf of invoice.performances) {
        totalAmount += amountFor(perf);
    }
    return result;
}

function amountFor(aPerformance) {
    let result = 0;
    switch (playsFor(perf).type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error('unknown type: ${playsFor(perf).type}');
    }
    return result;
};

function playsFor(aPerformance) {
    return plays[aPerformance.playlD];
};