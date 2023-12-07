
// 1
// var number = window.prompt("Enter Number");
// window.alert(number);
// =====================================
// 2
// var number = +window.prompt("write a number");

// if (number % 3 == 0&& number%4==0)
// {
//     window.alert("yes");
// } else {
//     window.alert("No");
// }
// =====================================
// 3
// var number1 =Number (window.prompt("Enter First number"));
// var number2 =Number (window.prompt("Enter second number"));

// if (number1>number2){
// window.alert("the max is "+ number1)
// }else{
//     window.alert("the max is "+ number2 )
// }
// =====================================
// 4
// var number =Number(window.prompt ("Enter number"));
// if(number<0){
//     window.alert("Negative")
// }else{
//     window.alert("Positive")
// }
// =====================================
//5
// var number1 = +window.prompt("Enter the first number");
// var number2 = +window.prompt("Enter the second number");
// var number3 = +window.prompt("Enter the third number");

// if (number1 > number2 && number2 > number3) {
//     window.alert("The maximum is " + number1);
//     window.alert("The minimum is " + number3);
// }
//  else if (number1 < number2 && number2 < number3) {
//     window.alert("The maximum is " + number3);
//     window.alert("The minimum is " + number1);
// } 
// else if (number1<number3 && number3<number2)
// {
//     window.alert(" the max is " +number2)
//     window.alert(" the min is " +number1) 
// }
// else if (number1>number2 && number2<number3)
// {
//     window.alert(" the max is " +number1)
//     window.alert(" the min is " +number2) 
// }
// else if (number1<number2 && number1>number3)
// {
//     window.alert(" the max is " +number2)
//     window.alert(" the min is " +number3) 
// }
// else if (number1<number3 && number1>number2)
// {
//     window.alert(" the max is " +number3)
//     window.alert(" the min is " +number2) 
// } 
// else {
//     window.alert("Some numbers are equal");
// }


// =====================================
// 6
// var number=Number(window.prompt("Enter the first number"));
// if (number%2==0){
//     window.alert(number + " is even")
// }
// else{
//     window.alert(number + " is odd")
// }
// =====================================
// 7
// var char = window.prompt("Write a letter");

// if (char == 'U' ||char == 'u' ||char == 'i' ||char == 'I' ||char == 'a' ||char == 'A' ||char == 'O' || char == 'o' ||char == 'E' || char== "e" ) {
//     window.alert("Vowel");
// } else {
//     window.alert("Not a vowel");
// }
// =====================================
// 8
// var number= +(window.prompt("Enter a number"));
// for(var i=1;i<=number; i++ ){
//     window.alert(i);
// }
// =====================================

// 9
// var number= +(window.prompt("Enter a number"));
// for(var i=1;i<=12; i++ ){
//     window.alert(i*number);
// }
// =====================================
// // 10
//  var number= +(window.prompt("Enter a number"));
// for(var i=2; i<=number; i+=2){
//     window.alert(i)
// }
// =====================================
// // 11
// var number1 =Number (window.prompt("Enter number"));
//  var number2 =Number (window.prompt("Enter Power "));
//  var result=number1**number2;
//  window.alert(result);

// =====================================
// // 12
// var number1 =Number (window.prompt("Enter Mark of first subject"));
//  var number2 =Number (window.prompt("Enter Mark of second subject "));
// var number3 =Number (window.prompt("Enter Mark of third subject"));
//  var number4 =Number (window.prompt("Enter Mark of forth subject "));
// var number5 =Number (window.prompt("Enter Mark of fifth subject"));
// var Total=number1+number2+number3+number4+number5
// var Average=(number1+number2+number3+number4+number5)/5
// var percentage=((number1+number2+number3+number4+number5)/500)*100
// window.alert(Total);
// window.alert(Average);
// window.alert(percentage);

// =====================================

// 13
// var month= window.prompt (Number=("Enter A Month"));
// if (month==1||month==3||month==5||month==7||month==10||month==8||month==12){
//     window.alert("31 Days")
// }else if (month==2){
//     window.alert("28 Days")
// }else if(month==4||month==6||month==9||month==11){
//     window.alert("30 Days")
// }
// =====================================
// 14
// var Physics= Number(window.prompt("Enter Physics Mark "));
// var chemistry=Number(window.prompt ("Enter chemistry Mark "));
// var biology=Number(window.prompt("Enter biology Mark "));
// var mathematics=Number(window.prompt ("Enter mathematics Mark "));
// var computer= Number(window.prompt("Enter computer Mark "));
// var percentage=(Physics+chemistry+biology+mathematics+computer)/500*100;
// if (percentage>=90){
//     window.alert("Grade A")
// }else if( percentage >= 80){
//     window.alert("Grade B")
// }else if( percentage >= 70){
//     window.alert("Grade C")
// }else if( percentage >= 60){
//     window.alert("Grade D")
// }else if( percentage >= 40){
//     window.alert("Grade E")
// }else if( percentage<40){
//     window.alert("Grade F")
// }
// =====================================
// 15
// var month= window.prompt (Number=("Enter A Month"));
// switch(month){
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "9":
//     case "10":
//         window.alert("31 Days")
//     break;
//     case "2":
//         window.alert("28 Days")
//         break;
//         case "2":
//         case "4":
//         case "6":
//         case "11":
//         case "12":
//         break;

// }
// =====================================
// 16

// var char= window.prompt (Number=("Enter A char"));
// switch(char){
//     case "A":
//     case "a":
//     case "O":
//     case "o":
//     case "U":
//     case "u":
//     case "E":
//     case "e":
//     case "I":
//     case "i":
//         window.alert("Vowel")
//     break;
//     default:
//         window.alert("Not a vowel"
//         break;
        
//     }
    // =====================================
// 17
// var number1=Number(window.prompt("enter first number"));
// var number2=Number(window.prompt("enter second number"));
// switch(number1>number2){
//     case true:
//         window.alert("maximum is Number "+number1)
//         break;
//         case false:
//             window.alert("maximum is Number "+number2)

// }
    // =====================================
    // 18
// var number=Number(window.prompt("Enter A number"));
// switch(number%2==0){
//     case true:
//         window.alert("even");
//         break;
//         case false:
//             window.alert("odd")
//             break;
// }
    // =====================================
// 19
// var number=Number(window.prompt("Enter A number"));
// switch(number>0){
//     case true:
//     window.alert("Positive")
//     break;
//     case false:
//         switch(number<0){
//         case true:
//             window.alert("Negative");
//         break;
//         case false:
//             window.alert("zero");
//             break;

//         }
//       break;  

// }
    // =====================================

// 20
// var number1=Number(window.prompt("Enter First number"));
// var calculation=(window.prompt("Enter A sign "));
// var number2=Number(window.prompt("Enter Second number"));
// switch(calculation){
// case "+":
//     window.alert(number1+number2);
//     break;
//     case "-":
//         window.alert(number1-number2);
//         break;
//         case "*":
//         window.alert(number1*number2);
//         break;
//         case "/":
//         window.alert(number1/number2)
//         break;
// }