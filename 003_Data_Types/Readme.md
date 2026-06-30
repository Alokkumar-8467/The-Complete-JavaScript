# Data Types in JavaScript

There are two types of data types in JavaScript. 

#### 1.Primitive
#### 2.Non Primitive

In this video we'll learn about primitive data types. 
We can classify primitive data types in 7 categories. 
```
1.string 
2.number 
3.boolean 
4.undefined 
5.null 
6.bigint 
7.symbol
```
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data Types</title>
    <script src="script.js"></script>
  </head>
  <body style="font-family: cursive">
    <h1>Data Types in JavaScript</h1>
    <h2>There are two types of data types in JavaScript.</h2>
    <ol>
      <li><p>Primitive</p></li>
      <li><p>Non Primitive</p></li>
    </ol>
    <h2>In this video we'll learn about primitive data types.</h2>
    <h3>We can classify primitive data types in 7 categories.</h3>
    <ol>
      <li>string</li>
      <li>number</li>
      <li>boolean</li>
      <li>undefined</li>
      <li>null</li>
      <li>bigint</li>
      <li>symbol</li>
    </ol>
  </body>
</html>
```

### See how string change there behaviour
```
typeof 100
'number'

typeof '100'
'string'

when i use + in front of string  number '100', then it behave as number 
+ '100'
100

when i use - in front of string  number '100', then it behave as number 
-'100'
-100

when i use * in front of string  number '100', then it syntax error 
*'100'
VM794:1 Uncaught SyntaxError: Unexpected token '*'

when i use / in front of string  number '100', then it syntax error 
/'100'
VM816:1 Uncaught SyntaxError: Invalid regular expression: missing /

+ 'alok'
NaN

```
