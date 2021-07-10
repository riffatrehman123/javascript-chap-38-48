// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;        
//         }
//         return ans;
// }
// console.log(exp(2, 3));


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// int area(int a, int b, int c);
// void main()
// {
//     int a, b, c;

//     printf("Enter a: ");
//     scanf("%d", &a);
//     printf("Enter b: ");
//     scanf("%d", &b);
//     printf("Enter c: ");
//     scanf("%d", &c);

//     area(a,b,c);
// }
// int area(int a, int b, int c)
// {
//     float S,ar;

//     S = (a+b+c)/2.0;
//     ar = sqrt(S*(S-a)*(S-b)*(S-c));

//     printf("Area of Triangle: %f",ar);
// }



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// void func(int a, int b, int c, float *avg, float *per);
// void main()
// {
//     int a, b, c;
//     float avg, per;

//     printf("Enter the marks of subject 1: ");
//     scanf("%d", &a);
//     printf("Enter the marks of subject 2: ");
//     scanf("%d", &b);
//     printf("Enter the marks of subject 3: ");
//     scanf("%d", &c);

//     func(a, b, c, &avg, &per);

//     printf("\n The Average: %.2f", avg);
//     printf("\n The Percentage: %.2f%%", per);
// }

// void func(int a, int b, int c, float *avg, float *per)
// {
//     *avg = (a+b+c)/3.0;
//     *per = ((a+b+c)/300.0)*100;
// }

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// let pattern = /y/g;
// pattern.lastIndex = 3;
// let match = pattern.exec("xyzzy");
// console.log(match.index);

// console.log(pattern.lastIndex);

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function remVowel(str)
// {
//     let al = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";
     
//     for(let i = 0; i < str.length; i++)
//     {
         
//         if (!al.includes(str[i]))
//         {
//             result += str[i];
//         }
//     }
//     return result;
// }
 
// let str = "Our cat was quite sick for a while "; 
          
// document.write(remVowel(str));

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// findOccurrences();
// javascript

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// int main()
// {
//     float km, m, cm, f, in;
//     printf("Enter distance in kilometers: ");
//     scanf("%f", &km);
//     /* calculate the conversion */
//     m = km * 1000;
//     cm = km * 1000 * 100;
//     f = km * 3280.84;
//     in = km * 39370.08;
//     printf("The distance in Feet: %f\n", f);
//     printf("The distance in Inches: %f\n", in);
//     printf("The distance in Meters: %f\n", m);
//     printf("The distance in Centimeters: %f\n", cm);
//     return (0);
// }

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
// int main()  
// {  
//     int hours, count = 1, ot = 0;  
  
//     while(count <= 10)  
//     {  
//         printf("\nEnter no of hours employee %d has worked\n", count);  
//         scanf("%d", &hours);  
  
//         if(hours > 40)  
//         {  
//             ot = ot + (hours - 40);  
  
//             printf("Employee %d has worked %d hours\n", count, hours);  
//             printf("Overtime pay is Rs %d\n", (hours-40)*12);  
//         }  
//         else  
//         {  
//             printf("no of hours worked is %d, which is less than 40 hours, so no over time pay for employee %d\n", hours, count);  
//         }  
//         count++;  
//     }  
  
//     printf("\nTotal Overtime pay is Rs %d\n", (ot*12));  
  
//     return 0;  

// }  


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// #include <stdio.h>
// #include<conio.h>
// void main()
// {
//     int r,a,b,c,d,e,f;
  
//     // taking input
//     c/r scr();   
//     printf("Enter the amount to be withdrawn in hundreds = ");
//     scanf("%d", &r);
//     a = r %100;
//     b = r % 100;
//     printf("\n\nRequired notes of Rs. 100  :  %d", a);
//     // e.g. if amount entered is 987 then 987 / 100 will answer 9 (because amount is an intiger variable) 
//    c = b /50;
//    d =b %50;
//     printf("\n\nRequired notes of Rs. 50   :  %d", c);
//     //e.g. 987 % 100 will answer 87 and then 87 / 50 will answer 1.
//     e = d%10;
//     f = d%10;
   
//     printf("\n\nRequired notes of Rs. 10   :  %d", (((amount % 100) % 50) / 10));
   
//     printf("\n\nAmount still remaining Rs. :  %d", (((amount % 100) % 50) % 10));
   
//     getch();
// }






                                //end//

                                //Event..

// 1. Show an alert box on click on a link.

// $(document).ready(function(){

//     $("a").click(function(event){
//     alert("Redirecting you to jQuery.com!");
//     });
// });
//     <a href="http://jquery.com/">
// Click here to know about jQuery</a>

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user

/* <a href="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F1%2FMobile-PNG-Image.png&imgrefurl=http%3A%2F%2Fwww.pngall.com%2Fmobile-png&tbnid=nl15cB8H5QgcIM&vet=12ahUKEwjY7PKY5M7xAhVbPbcAHcN5CSwQMyg3egQIARBV..i&docid=nlz-_J0HVaqpDM&w=1264&h=692&q=mobile%20images%20png&ved=2ahUKEwjY7PKY5M7xAhVbPbcAHcN5CSwQMyg3egQIARBV" onClick="alert('Thanks for purchasing a phone from us');">Click</a> */

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.


// function SomeDeleteRowFunction() {
//     //no clue what to put here?
//    }
   
//    $('table').on('click', 'input[type="button"]', function(e){
//    $(this).closest('tr').remove()
// })

// function SomeDeleteRowFunction() {
//     // event.target will be the input element.
//     var td = event.target.parentNode; 
//     var tr = td.parentNode; // the row to be removed
//     tr.parentNode.removeChild(tr);
// }

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.



/* <img src="https://unsplash.com/photos/eqW1MPinEV4" onMouseover="https://unsplash.com/photos/eqW1MPinEV4" onMouseout="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2BrIrOUy8-MmK91sioARQT&ust=1625677025185000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjpi__0zvECFQAAAAAdAAAAABAD"></img> */

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

