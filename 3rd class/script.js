// QUESTION 1
// const age = prompt("Enter your Age");

// if(age >= 18){
//     document.write('User is an Adult')
// }else{
//     document.write('User is a Kid')

// }

// QUESTION 2
// const input1 = prompt('Enter Number 1');
// const input2 = prompt('Enter Number 2');
// if( input1 == input2){
//     document.write('Both Numbers are Equal')
// }else if(input1 > input2){
//     document.write(" Number 1 is Greater than Number 2 ")
// }else{
//     document.write(" Number 2 is Greater than Number 1 ")

// }

// QUESTION 3
// const percentage = prompt("Enter your Grade");
// switch (percentage) {
//   case "A":
//     document.write("You have Passed with Excellent Remark");
//     break;
//   case "B":
//     document.write("You have Passed with Very Good Remark");
//     break;
//   case "C":
//     document.write("You have Passed with Good Remark");
//     break;
//   case "D":
//     document.write("You have Passed with Can do Better Remark");
//     break;
//   case "E":
//     document.write("You have Failed");
//     break;
//   default:
//     alert("Input a valid Grade under E");
//     break;
// }

 
 
//   QUESTION 4
 var subject1 = parseInt(prompt("Enter Subject 1 marks")) ;
 var subject2 = parseInt(prompt("Enter Subject 2 marks")) ;
 var subject3 = parseInt(prompt("Enter Subject 3 marks")) ;
 var subject4 = parseInt(prompt("Enter Subject 4  marks")) ;
 var subject5 = parseInt(prompt("Enter Subject 5 marks")) ;
 var subject6 = parseInt(prompt("Enter Subject 6 marks")) ;

 
 var total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
 var percentage = (total /600 ) * 100 ;
 document.write('Your percentage is ',parseFloat(percentage))
 switch (percentage) {
     case 100:
         document.write('Passed')
         break;
 
     default:
         break;
 }
 

 
 