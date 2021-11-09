var subject1 = document.getElementById("subject1");
var subject2 = document.getElementById("subject2");
var subject3 = document.getElementById("subject3");
var subject4 = document.getElementById("subject4");
var subject5 = document.getElementById("subject5");
var subject6 = document.getElementById("subject6");

var total,percentage;
function calcTotal() {
    total = parseInt(subject1.value)  + parseInt(subject2.value) + parseInt(subject3.value) + parseInt(subject4.value)  + parseInt(subject5.value) + parseInt(subject6.value);
    alert("Total of the Student is = " +total)
    percent();
    
}
function percent() {
     percentage = (total / 600) *100;
    alert("Percentage of the Student is = " +percentage)
    grade();
}
function grade() {
    if(percentage < 45){
        alert("Student has Failed ")
    }else if (percentage < 55){
        alert("Student has Just Passed ")
        
    } else if (percentage <85){
        alert("Student has  Passed with Good Score")
        
    }else{
        alert("Student has  Passed with Excellent Score")
               
    }
}