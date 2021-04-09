function generateCPR(start,end,gender){ 
    start = ((start == undefined ) ? new Date(2001, 0, 1) : new Date(start, 0, 1))
    end = ((end == undefined) ? new Date() : new Date(end, 0, 1))
    var d = new Date(start.getTime() + Math.random() * (end.getTime() -  start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear().toString().slice(-2);
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
        var dob =  [day, month, year].join('');

    var runID = Math.floor(1000 + Math.random() * 9000); 
    //Checking if gender is defined
    //Logic to create Male or Female run ID for CPR
    if(gender != undefined ){
        gender = gender.charAt(0).toUpperCase()  
        const result = (runID % 2  == 0) ? "F" : "M"; 
        if(result != gender)
            runID = runID + 1;
    }

    var randomCPR = dob+runID;
    return {cpr : randomCPR};
}


module.exports = {
    generateCPR
}