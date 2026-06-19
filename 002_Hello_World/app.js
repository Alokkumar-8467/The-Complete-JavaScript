
// Operator

// 1. Comparision Operator

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// 2. Equality Operators

// === strict equality (type + value)
// ===/ strict non-equality (type + value)
// === loose equality (value)
// ==/ loose not equality (value)

/* ************************************************ */
// Operator Example

let num1 = 10;
let num2 = 20;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 == num2);
console.log(num1 !== num2);

/* ************************************************ */

// Strings

let str1 = 'kola';
let str2 = "alok";
let str3 = `ankit`;

console.log(str1)
console.log(str2)
console.log(str3)

// 1. Concatenation

// First Type
str1 = str1.concat(str2)
console.log(str1)

// Second Type
console.log(str1 + " " + str2)

// 2. Append

str1 += "Something added here";
console.log(str1)


// 3. Length

console.log(str1.length)

// 4. Cases

console.log(str1.toLowerCase());
console.log(str1.toUpperCase())

// 5. Slice

console.log(str1.slice(0, 1))
// it return "K"
// slice return the value or index value lies between 0 and 1 index.
console.log(str1.slice(0,2))
// it return "ko"

// 6. Split and Join

// Split make an string in array and.
// Join make an array into string.
console.log(str1.split(""));
// console.log(str1.join(""));

// 7. Includes
console.log(str1.includes("s"))
// it tell that either this value is exist or not.

// 8. Trim
let ex = "     kola       "
console.log(ex.trim())
// trim remove the extra spaces from the string.

// 9. backticks
// we can't write multiple line string inside "" and ''
// but we can do that wsing `` backticks.

/* ************************************************ */

// Type Conversion

let money = "50";
console.log(typeof money);

// convert string to number
money = parseInt(money)
money = +money;
money = Number(money)

console.log(money);
console.log(typeof money)

// convert string to decimal number
let money1 = "50.123";
console.log(typeof money1)


