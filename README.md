# danish-mock-cpr

---
__automationpi :)__
  

You may need to test with random Danish CPR numbers in your automation test scenarios. This package helps by generating CPR numbers for test.

---


## Getting started


    
    npm install danish-mock-cpr



Enable typographer option to see result.


    const cpr = require('danish-mock-cpr');

    console.log(cpr.generateCPR()) // default
    console.log(cpr.generateCPR(2012)) // Generate a CPR for a person born between 2012 and today
    console.log(cpr.generateCPR(1980,2000)) // Generate a CPR for a person born between 1980 and 2000
    console.log(cpr.generateCPR('','','male')) // Gender male
    console.log(cpr.generateCPR('','','Female')) // Gender female


  #Ouput 

    >node app.js
    { cpr: '0303117289' }
    { cpr: '2112155744' }
    { cpr: '1507967828' }
    { cpr: '0101009143' }
    { cpr: '0101006446' }
