const cpr = require('danish-mock-cpr');

console.log(cpr.generateCPR()) // default

console.log(cpr.generateCPR(2012)) // Generate a CPR for a person born between 2012 and today

console.log(cpr.generateCPR(1980,2000)) // Generate a CPR for a person born between 1980 and 2000

console.log(cpr.generateCPR('','','male')) // Gender

console.log(cpr.generateCPR('','','Female')) // Gender