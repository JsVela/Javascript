//Basic

// const multiplosDe10 = () => {
//   let n1 = 3;
//   let n2 = 5;
//   let acum = 0;
//   const MAX = 1000;
//   for (let i = 0; i < MAX; i++) {
//     if ( i % n1 === 0 || i % n2 === 0) {
//       console.log(`${acum = acum + i}`);
//     }
//   }
// }

// multiplosDe10();

// let sum = 0;
// let acum = 0;
// const MAX = 11;

// const diferenciaSumaRaíz = () => {
//   for (let i = 1; i < MAX; i++) {
//      sum = sum + (i**2);
//     }
//     regresoFor2();
//     console.log(`${acum - sum}`);
// }
// const regresoFor2 = () => {
//   for (let i = 1; i < MAX; i++){
//       acum = ((acum + i)**2);
//   }
//   return acum;
// }

// diferenciaSumaRaíz();


// const fibonacci = () => {
//   let sum = 0;
//   let n1 = 1;
//   let n2 = 2;
//   const MAX = 11;
//   for (let i = 1; i < MAX; i++) {
//      sum = n1 + n2;

//    }
// }

// fibonacci();

//1
// const currentDate = () => {
//   let d = new Date();
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
//   console.log(`Sample Output: Today is : ${days[d.getDay()]}`);
//   console.log(`Current time is: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
// }

// currentDate();

// //2
// const printWindow = () => window.print();
// printWindow();

//3
// const currentDate2 = () => {
//   let d = new Date();
//   console.log(d);
//   console.log();
// }

// currentDate2();

//4
// const areaTriangle = () => {
//   let a;
//   let b = 5;
//   let h = 6;
//   a = (b * h) / 2;
//   console.log(a);
// }

// areaTriangle();

//5
// let str = ["w", "3", "r", "e", "s", "o", "u", "r", "c", "e"];
// let primero = str[0];
// console.log(str);

// const rotateString = () => {
//   for (var i = 0; i < str.length - 1; i++){
//      str[i] = str[i + 1];
//   }
//   str[i] = primero;
//   return str; 
// }

// const rotate = () => {
//   for (var i = 0; i < str.length; i++){
//     console.log(rotateString(str));    
//   }
// }

// rotate();

//8
// const randomInteger1To10 = () => {
//   let rand = Math.floor((Math.random() * 10) + 1);
//   debugger;
//   let guess = parseInt(prompt(`Adivina el número del 1 al 10:`));
//   if (guess === rand) {
//     console.log(`Buen Trabajo`);
//   } else if (guess !== rand) {
//     console.log(`No le atinaste`);
//   }
// }

// randomInteger1To10();

//10
// const multiplicar = () => {
//   let $n1 = document.getElementById("1").value;
//   let $n2 = document.getElementById("2").value; 
//   document.getElementById("3").innerHTML = $n1 * $n2;
// }

// const dividir = () => {
//   let $n1 = document.getElementById("1").value;
//   let $n2 = document.getElementById("2").value; 
//   document.getElementById("3").innerHTML = ($n1 / $n2).toFixed(4);
// }

// //11
// const temperaturaCelsiusFahrenheit = () => {
//   let c, f;
//   // c = parseInt(prompt("Dime el número en Celsius para convertirlo a Fahrenheit"));
//    f = parseInt(prompt("Dime el número en Fahrenheit para convertirlo a Celsius"));
//   switch (f || c) {
//     case c:
//       f = (9/5 * c) + 32;
//       console.log(f);
//       break;
//     case f:
//       c = (f - 32) * 5/9;
//       console.log(c);
//       break;
//   }
// }

// temperaturaCelsiusFahrenheit();

//12
//  (function websiteURL() {
//     console.log(document.URL);
//   })();

//14
// (function fileNameExtension(fileName) {
//   //let res = fileName.split(".").pop();
//   let str = fileName.split(".");
//   //document.getElementById("3").innerHTML = str[1];
//   console.log(str[1]);
// })("hola_mundo_1232ed23f43f.js");

//15
// const diffNand13 = () => {
//   let total = 0;
//   const trece = 13;
//   let n = parseInt(prompt(`Dame un número para restarlo con 13: `));
//   if (n > trece) {
//     total = (n - trece) * 2;
//     console.log(total);
// } else if (n < trece) {
//   total = trece - n;
//   console.log(total);
//   }
// };

// diffNand13();

//16
// const tripleSum = () => {
//   let n1 = parseInt(prompt("Dame el 1er número: "));
//   let n2 = parseInt(prompt("Dame el 2do número: "));
//   if (n1 === n2) {
//     console.log((n1 + n2) * 3);
//   }else if (n1 !== n2) {
//     console.log(n1 + n2);
//   }
// }

// tripleSum();

//17
// const absDiffTriple = (n = 0) => {
//   const MAGIC_NUMBER = 19;
//   if (n > MAGIC_NUMBER) {
//     return (Math.abs(n - 19) * 3);
//   } else if (n <= MAGIC_NUMBER) {
//     return Math.abs(n - 19);
//   }
// }
// console.log(absDiffTriple(12));
// console.log(absDiffTriple(19));
// console.log(absDiffTriple(22));

//18
// const trueFiftyOrSumFifty = (n1 = 0, n2 = 0) => {
//   const FIFTY = 50;
//   let sum = n1 + n2;
//   if (n1 === FIFTY || n2 === FIFTY || sum === FIFTY) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(trueFiftyOrSumFifty(50, 50));
// console.log(trueFiftyOrSumFifty(20, 50));
// console.log(trueFiftyOrSumFifty(20, 20));
// console.log(trueFiftyOrSumFifty(20, 30));

//20
// const checkNum = (n1 = 0) => {
//   let arr = [];
//   let str = n1.toString(10);
//   arr = arr.push(str);
//   // if (arr[0] === "-") {
//   //   str = str.split("-");
//   // }else {
//   //   str = str.split("");
//   // }
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === "-") {
//       console.log("Es negativo");
//     } else if (arr[i] === arr[i]) {
//       console.log("Es positivo");
//     }
//   }
// }

// console.log(checkNum(1));
// console.log(checkNum(-1));

//21 
//  const pyString = () => {
//    let word1 = prompt("Dame el string: ");
//    if (word1.startsWith("Py")) {
//     console.log(word1);
//    } else if (!word1.startsWith("Py")) {
//     console.log(`Py${word1}`);
//    }else {
//    console.log("Introduce algo we, no seas huevón jajaja");
//  }
// }

// pyString();

//22
// const removeCharAtPositionAndReturnIt = (pos) => {
//   let str;
//   str = prompt("Dame el string: ");
//   if (pos > str.length - 1) {
//     return false;
//   } else if (pos <= str.length - 1)
//     return str.charAt(pos);
// }

// console.log(removeCharAtPositionAndReturnIt(3));

//23
// const shiftFirstAndLastLetter = () => {
//   let str = prompt("Dame el string: ");
//   let exchange = `${str.substring(str.length - 1)}${str.slice(1, str.length - 1)}${str.substring(0, 1)}`;
//   return exchange;
// }

// console.log(shiftFirstAndLastLetter());

// //24
// const shiftFirstAndLastLetterFrontBack = () => {
//   let str = prompt("Dame el string: ");
//   let exchange = `${str.substring(0, 1)}${str.slice(0)}${str.substring(0, 1)}`;
//   return exchange;
// }

// console.log(shiftFirstAndLastLetterFrontBack());

//25
// const checkMultiple3And7 = (n1) => {
//   if ( (n1 % 3 === 0 || n1 % 7 === 0) ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkMultiple3And7(12));
// console.log(checkMultiple3And7(14));
// console.log(checkMultiple3And7(10));
// console.log(checkMultiple3And7(11));

//26
// const shiftFirstAndLast3Letters = () => {
//   let str = prompt("Dame el string: ");
//   let exchange = `${str.substring(str.length - 3)}${str.slice(0)}${str.substring(str.length - 3)}`;
//   return exchange;
// }

// console.log(shiftFirstAndLast3Letters());

//27
// const startsWithJava = (str) => {
//   switch (str) {
//     case str:
//       let res = (str.startsWith("Java") || str.startsWith("java"));
//       return res;
//     default:
//       return false;
//   }
// }

// console.log(startsWithJava("Javascript"));
// console.log(startsWithJava("Java"));
// console.log(startsWithJava("Python"));

//28
// function range50To99Inclusive (n1, n2) {
//   if ( (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(range50To99Inclusive(12, 101));
// console.log(range50To99Inclusive(52, 80));
// console.log(range50To99Inclusive(15, 99));

//29
// function range50To99Inclusive (n1, n2, n3) {
//   if ( (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99) ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(range50To99Inclusive(50, 90, 99));
// console.log(range50To99Inclusive(5, 9, 199));
// console.log(range50To99Inclusive(65, 89, 199));
// console.log(range50To99Inclusive(65, 9, 199));

//30
// const returnScrip5thPosition = () => {

//   let word = prompt("Dame el string: ");
//   word = word.split("");
//   if (word[4] === "s" || word[4] === "S"){
//      word = word.slice(0, 4);
//      return word.toString().split(",").join("");
//   } else if (word[4] !== "s" || word[4] !== "S"){
//     return word.toString().split(",").join("");
//   }

// }

//console.log(returnScrip5thPosition());

//49
// const nextAlphabet = () => {
// let str = prompt("Dame el string");
// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let arr2 = arr.map(lol);
// let res = str.split("").map(exchange);

//   function exchange(value) {
//     function lol(value2) {
//       if (value === value2) {
//         res = arr[i + 1];
//         return res;
//       }
      
//     }
  
// }

// }

// console.log(nextAlphabet());

//60
// const removeFirstLastChar = (str) => {
//   let nstr = str.split("");
  
//   for (let i = 0; i < nstr.length; i++) {
   
//     if (nstr[0] || nstr[nstr.length - 1]) {
//       nstr[0] = " ";
//       nstr[nstr.length - 1] = " ";
//     }
    
//   }
//   return nstr.join("");
// }

// console.log(removeFirstLastChar("JavaScript"));
// console.log(removeFirstLastChar("PHP"));
// console.log(removeFirstLastChar("JS"));

//61
// const conc2StrWithoutFirstChar = (str1, str2) => {
//   let word = "";
//   str1 = str1.substring(1);
//   str2 = str2.substring(1);
//   word = word.concat(str1, str2);
//   return word;  
// }

// console.log(conc2StrWithoutFirstChar("PHP", "JS"));
// console.log(conc2StrWithoutFirstChar("A", "B"));
// console.log(conc2StrWithoutFirstChar("AA", "BB"));

//62
// const moveLast3Chars = str => {
//   let wrd1 = "";
//   let wrd2 = "";
//   let con =  "";
//   if (str.length >= 3) {
//     wrd1 = str.substring(str.length - 3);
//     wrd2 = str.substring(0, str.length - 3);
//     con = con.concat(wrd1, wrd2);
//   } else if ((str.length < 3)) {
//     return str;
//   }
//   return con;  
// }

// console.log(moveLast3Chars("Python"));
// console.log(moveLast3Chars("JavaScript"));
// console.log(moveLast3Chars("Hi"));

//63
// const firstLastNChars = (str, n) => {
//   let len = str.length;
//   let word1 = "";
//   let word2 = "";
//   let word3 = "";
//   if (len >= n) { 
//     word1 = str.slice(0, n);
//     word2 = str.substring(len - n);
//     word3 = word3.concat(word1, word2);
    
//   }
//   return word3;
// }

// console.log(firstLastNChars("JavaScript", 2));
// console.log(firstLastNChars("JavaScript", 4));

//65
// const conctStrsRmvLong = (str1, str2) => {
//   let word = "";
//   if (str1.length >= str2.length) {
//     str1 = str1.substring(str1.length - str2.length);
//     word = word.concat(str1, str2);
//     return word;
//   } else if (str2.length >= str1.length){
//     str2 = str2.substring(str2.length - str1.length);
//     word = word.concat(str1, str2);
//     return word;
//   }else if (str1.length === str2.length) {
//     return word.concat(str1, str2);
//   } 
// }

// console.log(conctStrsRmvLong("Python", "JS"));
// console.log(conctStrsRmvLong("ab", "cdef"));

//66
// const searchBeginStrng = (str) => {
//   if (str.startsWith("New") === true || str.startsWith("new") === true || str.startsWith("Los") === true || str.startsWith("los") === true) {
//     return str;
//   } else {
//     return "";
//   }
// }

// console.log(searchBeginStrng("New York"));
// console.log(searchBeginStrng("Los Angeles"));
// console.log(searchBeginStrng("London"));

//67
// const rmvP = (str) => {
//  str = str.split("");

//  for (let i = 0; i < str.length; i++) {
  
//   if ( (str[0] === "P") || (str[0] === "p") ) {
//       str[i] = " ";
//    } 

//    if ( (str[str.length - 1] === "P" || str[str.length - 1] === "p") ){
//     str[str.length - 1] = " "; 
//    }

//    if ((str[0] !== "P" || str[str.length - 1] !== "P") || (str[0] !== "p" || str[str.length - 1] !== "p")) {
//      return str.join("");
//    }
//  }

// }

// console.log(rmvP("PythonP"));
// console.log(rmvP("Python"));
// console.log(rmvP("JavaScript"));

//69
// const arrLen3 = (arr) => {
// let len = arr.length;
// let sum = 0;
// if (len === 3) {
//    sum = arr.reduce(sum);

//    function sum( initialVal , value ) {
//       value = initialVal + value;
//       return value;    
//    }
//    return sum;
//   }

// }

// console.log(arrLen3([10, 32, 20]));
// console.log(arrLen3([5, 7, 9]));
// console.log(arrLen3([0, 8, -11]));





//95
// const replaceNumInArray = (num1, num2) => {
//   let arr = [1, 2, 3, 2, 2, 8, 1, 9];
//   console.log(`Original array: ${arr}`);
//   arr = arr.map(find);

//   function find(value) {
//     if (value === num1) {
//       return num2;
//     } else if (value !== num1) {
//       return value;
//     }
//   }

//   return arr;

// }
// console.log(replaceNumInArray(2, 5));
// console.log(replaceNumInArray(3, 1));


//Functions

//1

// const reversNum = ()=> {
//    let rev;
//    let num = 32243;
//    rev = num.toString(10);
//    rev = rev.split("").reverse().join("");
//    return rev;
// }

// console.log( reversNum() );

//2
// const isPalindromeOrNot = () => {
//   let str = "   Anita lava la    TINA   ";
//   str = str.toLowerCase();
//   let strng = str.replace(/ /g, "").split("").join("").trim();
//   let check = str.replace(/ /g, "").split("").reverse().join("").trim();
//   if (check === strng) {
//     return true;
//   } else if (check !== str) {
//     return false;
//   }
// }

// console.log(isPalindromeOrNot());



//4
// const alphabeticalString = (str) => {
//   str = str.trim().replace(/ /g, "").split("").sort().join("");
//   return str;
// }

// console.log(alphabeticalString(" we   b          mas  te    r "));

//5
// const capitalizeFirstLetter = (str) => {
//   str = str.split("");
  
//   for (let i = 0; i < str.length; i++) {
    
//     if (str[i] === " ") {
//       str[i + 1] = str[i + 1].toUpperCase();
//     } else if (str[0]) {
//       str[0] = str[0].toUpperCase();
//     }
    
//   }
//   return str;
// }

// console.log(capitalizeFirstLetter("the quick brown fox"));

//6
// const longestWordinString = (str) => { 
//  str = str.split(" ");
//  let aux = str[0].length;
//  let aux2 = str[0].valueOf();

//  for (let i = 0; i < str.length; i++) {
      
//     if( str[i].length > aux) {
//         aux = str[i].length;
//         aux2 = str[i].valueOf();
//       }

//     }

//     return aux2;

// }

// console.log(longestWordinString("@Web Development #Tutorial"));


//7

// const returnNumVowels = () => {
//   let str = "lv pnch pt";
//   let str2 = str.split("").filter(getVowel);
  
//   function getVowel(value) {
//     switch (value) {
//       case "A":
//       case "a":
//       case "E":
//       case "e":
//       case "I":
//       case "i":
//       case "O":
//       case "o":
//       case "U":
//       case "u":
//         return value;
//       default:
//         return 0;
//     }
//    }

//   return str2.length;
// }

// console.log(returnNumVowels());

//9

// const returnType = x => typeof x;;

// console.log(returnType(12));
// console.log(returnType("w3resource"));
// console.log(returnType(false));

//15
// const bToThePowerN = () => {
//   let b = parseInt(prompt("Dame b: "));
//   let n = parseInt(prompt("Dame n: "));
//   return `bn = ${b**n}`;
// }

// console.log(bToThePowerN());

//22
// const countOcurrences = (str, letter) => {
//   let re = new RegExp(letter, "ig");
//   str = str.match(re);
//   return str.length;
// }

// console.log(countOcurrences("w3resource.com", "o"));
// console.log(countOcurrences("w3resource.com", "3"));
// console.log(countOcurrences("w3resource.com", "e"));

//Conditional and Loops

//5

// const checkEvenOdd = () => {
//   const MAGIC_NUMBER = 15;

//   for (let i = 0; i <= MAGIC_NUMBER; i++) {
    
//     if (i % 2 === 0){
//       console.log(`${i} es par`);
//     }else if (i % 2 !== 0){
//       console.log(`${i} es impar`);
      
//     }
    
//   }

// }

// checkEvenOdd();

//7
// const FizzBuzz = () => {
//  for (let i = 1; i <= 100; i++) {

//    if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i.toString(10).replace(i.toString(10), "FizzBuzz"));
//    }else if (i % 3 === 0) {
//     console.log(i.toString(10).replace(i.toString(10), "Fizz"));
//    }else if (i % 5 === 0) {
//      console.log(i.toString(10).replace(i.toString(10), "Buzz"));
//    }
   
//    if (i % 3 != 0  &&  i % 5 != 0) {
//      console.log(i);  
//    }

//   }

// }

// FizzBuzz();

//DOM

  // document.getElementById("btn").onclick = js_style;

  // function js_style() 
  // {
  //  let p = document.getElementById("text");
  //  p.style.fontSize = "14px";
  //  p.style.fontFamily = "Courier";
  //  p.style.color = "blue";
  // }

// document.getElementById("form1").onsubmit = getFormValue;

// function getFormValue() 
// {
//   let fname = document.getElementById("fname").value;
//   let lname = document.getElementById("lname").value;
//   alert(`${fname} ${lname}`);
// }

// function set_background() {
//   let p1 = document.getElementById("1");
//   let p2 = document.getElementById("2");
//   p1.style.backgroundColor = "red";
//   p2.style.backgroundColor = "orange";
// }

// function getAttributes() {
//   let attr1 = document.getElementById("w3r").getAttribute("href");
//   let attr2 = document.getElementById("w3r").getAttribute("hreflang");
//   let attr3 = document.getElementById("w3r").getAttribute("rel");
//   let attr4 = document.getElementById("w3r").getAttribute("target");
//   let attr5 = document.getElementById("w3r").getAttribute("type");
//   console.log(attr1, attr2, attr3, attr4, attr5);
// }

// function removecolor() {
  // let $select = document.getElementById("colorSelect").getElementsByTagName("option").length;
  // let $option1 = document.getElementsByTagName("option").item(0).value;
  // let $option2 = document.getElementsByTagName("option").item(1).value;
  // let $option3 = document.getElementsByTagName("option").item(2).value;
  // let $option4 = document.getElementsByTagName("option").item(3).value;
  
  // for (let i = 0; i < $select; i++) {

  //    if ($option1) {
  //      $option1.remove();
  //    }else if($option2) {
  //     $option2.remove();
  //    }else if($option3){
  //     $option3.remove();
  //    }else if($option4){
  //     $option4.remove();
  //    }
    
  //   }    
  // }
  // let $option1 = document.getElementsByTagName("option").item(0).remove();
  // let $option2 = document.getElementsByTagName("option").item(1).remove();
  // let $option3 = document.getElementsByTagName("option").item(2).remove();
  // let $option4 = document.getElementsByTagName("option").item(3).remove();


// const sumaDe2NumsQueDen7 = ()  => {
//   let arr = [4, 2, 8, -3, 1, 5, 12, -10];
//   let target = 7;
//   let aux = arr[0];
//   let cont = 0;
//   for (let i = 0; i < arr.length; i++) {
   
//     switch (arr[i]) {
//       case :
        
//         break;
    
//       default:
//         break;
//     }

//    if (aux + arr[i + 1] === target) {
//      return true;
//    }
   
//   }
  
//   aux = arr[cont++];
  
//   }



 

// console.log(sumaDe2NumsQueDen7());












