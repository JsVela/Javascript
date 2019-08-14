// import java.util.Date;
// import java.util.Scanner;
// import java.util.ArrayList;
// import java.util.Comparator;



public class EjerciciosJava {

  // static char strIndex(String str, int n) {
  //   int len = str.length();
  //   char letter = ' ';
  //   if ( n < len) {
  //     letter = str.charAt(n);
  //   } else if ( n > len) {
  //     System.err.println("Pasaste numero de caracteres del string");
  //   }
  //   return letter;
  // }

  // static int charUnicodeIndex(String str, int n) {
  //   int len = str.length();
  //   int numToLetter = 0;
  //   if ( n < len) {
  //     numToLetter = str.codePointAt(n);
  //   } else if ( n > len) {
  //     System.err.println("Pasaste numero de caracteres del string");
  //   }
  //   return numToLetter;
  // }

  // static void lexicalComparison(String str1, Integer n1, String str2, Integer n2) {

  //   str1 = str1.concat(n1.toString());
  //   str2 = str2.concat(n2.toString());

  //    if ( (int)str1.charAt(str1.length() - 1) < (int)str2.charAt(str1.length() - 1) ) {
  //      System.out.println(str1 + " is less than " + str2);
  //    } else if ( (int) str1.charAt(str1.length() - 1) > (int) str2.charAt(str1.length() - 1) ) {
  //     System.out.println(str1 + " is greater than " + str2);
  //    } else if ( (int) str1.charAt(str1.length() - 1) == (int) str2.charAt(str1.length() - 1) ) {
  //     System.out.println(str1 + " is equal to " + str2);
  //    }

  // }

  // static void caseInsensitivelexicalComparison(String str1, Integer n1, String str2, Integer n2) {

  //   if (str1.matches("/str1/ig") == str2.matches("/str2/ig")) {
    
  //     str1 = str1.concat(n1.toString());
  //     str2 = str2.concat(n2.toString());

  //     if ( (int)str1.charAt(str1.length() - 1) < (int)str2.charAt(str1.length() - 1) ) {
  //       System.out.println(str1 + " is less than " + str2);
  //     } else if ( (int) str1.charAt(str1.length() - 1) > (int) str2.charAt(str1.length() - 1) ) {
  //       System.out.println(str1 + " is greater than " + str2);
  //     } else if ( (int) str1.charAt(str1.length() - 1) == (int) str2.charAt(str1.length() - 1) ) {
  //       System.out.println(str1 + " is equal to " + str2);
  //     }

  //   }

  // }

    // static void currentDateTime() {
      
    //   Date date = new Date();
    //   String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
    //   int[] numsMonths = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    
    //   System.out.println("Current Date and Time: ");
    //   for (int i = 0; i < months.length; i++) {
        
    //     if (date.getMonth() == numsMonths[i]) {
    //       System.out.println(months[i] + " " + date.getDate() +  "," + " " +  (date.getYear() + 1900) );
    //       //Checamos para poner am o pm
    //       if (date.getHours() <= 12) {
    //         //Checamos si ponemos un 0 antes o no
    //          if ( date.getMinutes() < 10) {
    //            System.out.println(date.getHours() + ":0" + date.getMinutes() + " am");           
    //          }else{
    //           System.out.println(date.getHours() + ":" + date.getMinutes() + " am"); 
    //          }
  
    //       } else {
    //         //Checamos si ponemos un 0 antes o no
    //         if ( date.getMinutes() < 10) {
    //           System.out.println(date.getHours() + ":0" + date.getMinutes() + " pm");           
    //         }else{
    //           System.out.println(date.getHours() + ":" + date.getMinutes() + " pm");
    //         }
  
    //       }

    //     }
    //   }
    // }

    // static void uniqueIdentifierString(String str) {

    //   int hash = str.hashCode();
    //   System.out.println("The hash for " + str + " is " + hash);
    // } 

    // static void replaceLetters(char l1, char l2) {
    //   String str = "The quick brown fox jumps over the lazy dog.";
    //   System.out.println("Original String: " + str);
    //   str = str.replace(l1, l2);
    //   System.out.println("New String: " + str);
    // }

    // static void sumValues(int[] nums) {
      
    //   int sum = 0;

    //   for (int num : nums) {
    //     sum = sum + num;
    //   }

    //   System.out.println("The sum is: " + sum);

    // }

    // static void printNxNGrid(int n) {
    //   for (int i = 0; i < n; i++) {
    //     for (int j = 0; j < n; j++) {
    //       System.out.print("-" + " ");
    //     }
    //     System.out.println();
    //   }
    // }
    
    // static void individualDigits(String str) {
     
    //   char c = ' ';
      
    //   for (int i = 0; i < str.length(); i++) {
       
    //       c = str.charAt(i);
    //       System.out.print( c + " ");
    //   } 
    
    // }

    // static void repeatedNumber(int n) {

    //   int number = 1;

    //   for (int i = 0; i < n; i++) {
    //     for (int j = 0; j <= i; j++) {
    //       System.out.print(number); 
    //     }
    //     number++;
    //     System.out.println();
    //   }

    // }
    
    // static void rigthAngleTriangle(int n) {
     
    //    int number = 1;

    //   for (int i = 0; i < n; i++) {
    //     for (int j = 0; j <= i; j++) {
    //       System.out.print(number);
    //       number++; 
    //     }
    //     number = 1;
    //     System.out.println();
    //   }

    // }

    // static void countVowels(String str) {
      
    //   String[] arr = str.split("");
    //   int count = 0;

    //   for (int i = 0; i < arr.length; i++) {
    //     switch (arr[i]) {
    //       case "a":
    //       case "e":
    //       case "i":
    //       case "o":
    //       case "u":
    //         count++;
    //     }
    //   }
    //   System.out.println("The total number of vowels are: " + count);
      
    //   }

    // static void sumDigits(Integer n) {
    //   String str = n.toString();
    //   int num, sum = 0;
    //   for (int i = 0; i < str.length(); i++) {
    //       num = Character.getNumericValue(str.charAt(i));
    //       sum = sum + num;
    //   }
    //   System.out.println("The total sum is: " + sum);
    // }

    // static void checkPositiveNegativeNumbers(int n) {
    //   if (n > 0) {
    //     System.out.println("Positive number");
    //   } else if (n < 0) {
    //     System.out.println("Negative number");
    //   }
    // }
  
  public static void main(String[] args) {
   
  // Strings
  // 1
  //  System.out.println("The position of the char of the input number is: " + strIndex( "Java Exercises", 2));
  //  System.out.println("The position of the char of the input number is: " + strIndex( "Java Exercises", 5));
  //  System.out.println("The position of the char of the input number is: " + strIndex( "Java Exercises", 20));
   
  // 2 
  // System.out.println("The position of the char of the input number is: " + charUnicodeIndex( "w3resources.com", 0));
  // System.out.println("The position of the char of the input number is: " + charUnicodeIndex( "w3resources.com", 1));
  // System.out.println("The position of the char of the input number is: " +charUnicodeIndex( "w3resources.com", 20));
 
  //5
  // lexicalComparison("This is Exercise ", 1, "This is Exercise ", 2);
  // lexicalComparison("This is Exercise ", 2, "This is Exercise ", 1);
  // lexicalComparison("This is Exercise ", 3, "This is Exercise ", 4);
  // lexicalComparison("This is Exercise ", 4,"This is Exercise ", 3);
  // lexicalComparison("This is Exercise ", 7,"This is Exercise ", 7);

  //6
  // caseInsensitivelexicalComparison("this Is exercise ", 1, "This is Exercise ", 2);
  // caseInsensitivelexicalComparison("this Is exercise ", 2, "This is Exercise ", 1);
  // caseInsensitivelexicalComparison("this Is exercise ", 3, "This is Exercise ", 4);
  // caseInsensitivelexicalComparison("this Is exercise ", 4,"This is Exercise ", 3);
  // caseInsensitivelexicalComparison("this Is exercise ", 7,"This is Exercise ", 7);

  //15
  // currentDateTime();

  //18
  //  uniqueIdentifierString("Python Exercises.");

  //24
  // replaceLetters('o', 'f');
 
  //Arrays
  //2
  // int[] nums = {1, 2, 3, 4, 5};
  // sumValues(nums);

  //3
  // printNxNGrid(10);

  // String
  // 10
  // individualDigits("123456789");

  // Data Types

  // 16
  // rigthAngleTriangle(10);

  // 17
  // repeatedNumber(15);

   //Method
  //  4
  //  countVowels("lol");

  // sumDigits(11);

  // checkPositiveNegativeNumbers(23);
  // checkPositiveNegativeNumbers(-23);

  
  }
}