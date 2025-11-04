function CalcSal(){

    var x = document.getElementById("txt_wage").value;
    var y = document.getElementById("txt_hours").value;


    //parse to numeric
    var hourly = parseFloat(x);
    var hoursPerWeek = parseFloat(y);


  if (isNaN(hourly) || isNaN(hoursPerWeek)) {
    document.getElementById("output").innerHTML = "Please enter valid numbers!";
    return;
  }

    var annualSalary = hourly*hoursPerWeek*52;

    document.getElementById("output").innerHTML =
  "Estimated Annual Salary: $" + annualSalary.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

}
document.getElementById("time2calc").addEventListener("click", CalcSal);