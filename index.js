// Task 1
// Even and Odd numbers check
var a = 4;
function number_check(){if(a%2 ==0){return "Even Number"}else{return "Odd Number"}}
console.log(number_check());

// Task 2
// Not a number return if not number
var b = 2;
function check_type(){if(isNaN(b)){return "Not a number"}else{return "Number"}}
console.log(check_type());

// Task 3
// Find largest number
var num1 = 20;
var num2 = 30;

function largest(){
    if (num1 > num2) {
        return "Num1 is greater"
    }
    else if(num2 > num1){
        return "Num2 is greater"
    }
    else{
        return "Error"
    }
}
console.log(largest());

// Task 4
// Find largest numbers
var num3 = 20;
var num4 = 30;
var num5 = 40;


function largest2(){
    if (num3 > num4 && num3 > num5) {
        return "Num3 is greater"
    }
    else if(num4 > num3 && num4 > num5){
        return "Num4 is greater"
    }
    else if(num5 > num1 && num5 > num4){
        return "Num5 is greater"
    }
    else{
        return "Error"
    }
}
console.log(largest2());

// Task 5
// Triangle
var sides = [20,40,30]
function equilateral(){
    var a = 0;
    var b = 0;
    var c = 0;
   for(var i = 0; i  < sides.length; i++){
    for(var j = i; j < sides.length-1; j++){
        console.log(j);
        if(sides[j+1] == sides[i]){
          a =  a + 1;
           if(a == 3){
            return "Equilateral";
           }
        }
        if (a == 1) {
            return "Isolence"
        }
        else{
            return "OSc"
        }
    }
   }
}
console.log(equilateral())

// Task 6
// Calculator
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operations(a,b,op){
switch (op) {
    case "+":
        return "Addition "+add(a,b)
        break;
 case "-":
        return "Subtraction "+sub(a,b)
        break;
        case "*":
            return "Multiplication "+mul(a,b)
            break;
            case "/":
                return "Division "+div(a,b)
                break;
    default:
        break;
}
}
console.log(operations(2,2,"-"));


// Task 7
// Checking Grades
function grades(grade){
if (grade >= 80 && grade <= 100) {
    return "S Grade"
}
else if(grade >= 80 && grade <= 80){
    return "A Grade"
}
else if(grade >= 70 && grade <= 80){
    return "B Grade"
}
else if(grade >= 60 && grade <= 70){
    return "C Grade"
}
else if(grade >= 60 && grade <= 50){
    return "D Grade"
}
else if(grade >= 40 && grade <= 50){
    return "E Grade"
}
else{
    return "Fail"
}
}
console.log(grades(20));

// Patterns  Task 8
// Star Pattern
var pattern = 5;
for(var i = 0; i <= 5; i++){
    console.log("<br>");
    for(var j = 0; j <= i; j++){
        console.log("*");
    }
}

// Task 9
// Sum of two arrays
var arr1 = [2,3,3,4];
var arr2 = [23,4,5,1];
var ar1 = 0;
var ar2 = 0;
function sum1(){
    for(var i = 0; i < arr1.length; i++){
        ar1 += arr1[i]
    }
    return ar1;
}
function sum2(){
    for(var i = 0; i < arr2.length; i++){
        ar2 += arr2[i]
    }
    return ar2;
}
var f_sum = sum1()+sum2();
console.log("Final Sum is "+f_sum);

// Task 10
// Print Even Numbers to 100
for(var i = 1; i <= 100; i++){
    if(i%2 == 0){
        console.log("Even Numbers "+i);
    }
}

// Task 11

// Reversing the array
var core_arr = [1,2,3,4,5,6];
var rev_arr = [];
var j = 0;
for(var i = core_arr.length-1; i >= 0; i--){
rev_arr[j] = core_arr[i];
j++;
}
console.log(rev_arr);