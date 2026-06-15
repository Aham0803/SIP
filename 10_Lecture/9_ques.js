// 9. Bank Transactions
// [
//  { type: "credit", amount: 1000 },
//  { type: "debit", amount: 300 },
//  { type: "credit", amount: 500 }
// ]
// Task
// • Find total credit amount only
const txns = [
    { type: "credit", amount: 1000 }, { type: "debit", amount: 300 }, { type: "credit", amount: 500 }
];

let onlyCredit = txns.filter(txns => txns.type==="credit");
let totalCredit = onlyCredit.reduce((total, credits)=>total+credits.amount,0);

console.log(totalCredit);