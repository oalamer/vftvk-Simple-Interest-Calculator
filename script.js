/* 
the file contain a the funciton of peject 
OALAMR 2021/12/18 
*/

//this fucntion will be used to calc and formate interset
function compute() {

    var principal = document.getElementById("principal").value;
    // a varaible to hold Validartion result true for valid / false for invalid
    var valResult = validateAmount();
    //if not valid the alert will be shown and focuse on amount field and set field of result to empty
    if (!valResult) {
     alert ("Enter a positive number");
     document.getElementById("principal").focus();
     document.getElementById("result").innerHTML= "";
    }
    else {
        
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        //to make sure the years value is parsed to Int
        years = parseInt(years);
        var interest = principal * years * rate / 100;

        var year = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerHTML = "If you deposit <span style='background-color: yellow;'>" + principal + "\</span>,\<br\>at an interest rate of <span style='background-color: yellow;'>" + rate + "% </span>\<br\>You will receive an amount of <span style='background-color: yellow;'>" + interest + "</span>,\<br\>in the year <span style='background-color: yellow;'>" + year + "</span>\<br\>";
    }
}


//this funciton will be used to show value besides the Range control
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

//this funciton will be used tovalide Amount has no 0 nd cant have negative value
function validateAmount() {
    var amount = document.getElementById("principal").value;
    if (amount <= 0)
        return false;
    else
        return true;

}

