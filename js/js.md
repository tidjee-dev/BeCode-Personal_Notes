# JavaScript Cheat Sheet

## Summary

| Code          | Description                | Example                             |
| ------------- | -------------------------- | ----------------------------------- |
| `let`         | Declare a variable         | `let variableName = value;`         |
| `const`       | Declare a constant         | `const constantName = value;`       |
| `console.log` | Print a variable           | `console.log(variableName);`        |
| `typeof`      | Get the type of a variable | `console.log(typeof variableName);` |
| `+`           | Addition operator          | `console.log(1 + 2);`               |
| `-`           | Subtraction operator       | `console.log(1 - 2);`               |
| `*`           | Multiplication operator    | `console.log(1 * 2);`               |
| `/`           | Division operator          | `console.log(1 / 2);`               |
| `%`           | Modulo operator            | `console.log(1 % 2);`               |
| `**`          | Exponentiation operator    | `console.log(1 ** 2);`              |
| `function`    | Declare a function         | `function functionName() {}`        |

## Variables

Use `let` to declare a variable.

```js
let <variable_name> = <value>;
```

> `<variable_name>` is the name of the variable you want to declare.
> `<value>` is the value of the variable.

### Naming conventions

There are some naming conventions in JavaScript:

- camelCase
- snake_case
- PascalCase

Example:

```js
let camelCase;
let snake_case;
let PascalCase;
```

### Printing variables

Use `console.log` to print a variable.

```js
console.log(<variable_name>);
```

> `<variable_name>` is the name of the variable you want to print.

```js
let numberInt = 42;
let numberFloat = 42.0;
let string = "Hello, World!";
let boolean = true;
let object = {
  name: "John",
  age: 30,
};
let array = [1, 2, 3];

console.log(numberInt); // Output: 42
console.log(numberFloat); // Output: 42.0
console.log(string); // Output: "Hello, World!"
console.log(boolean); // Output: true
console.log(object); // Output: {name: "John", age: 30}
console.log(array); // Output: [1, 2, 3]
```

### Variable types

Go to [Data types](js-data-type.md) to read about the types of variables and how to use them.

### Scope

There are some scopes in JavaScript:

- global
- local
- block

Example:

```js
let globalVariable = "GLOBAL";

console.log("1", globalVariable); // Output: "1 GLOBAL"
console.log("2", localVariable); // Output: "Error: ReferenceError: localVariable is not defined"
console.log("3", blockVariable); // Output: "Error: ReferenceError: blockVariable is not defined"

function myFunction(blockVariable = "BLOCK") {
  let localVariable = "LOCAL";

  console.log("4", globalVariable); // Output: "4 GLOBAL"
  console.log("5", localVariable); // Output: "5 LOCAL"
  console.log("6", blockVariable); // Output: "6 BLOCK"
}

myFunction();
console.log("7", globalVariable); // Output: "7 GLOBAL"
console.log("8", localVariable); // Output: "Error: ReferenceError: localVariable is not defined"
console.log("9", blockVariable); // Output: "Error: ReferenceError: blockVariable is not defined"
```

### Types of variables

Use `typeof` to get the type of a variable.

```js
console.log(typeof <variable_name>);
```

> `<variable_name>` is the name of the variable you want to get the type of.

Example:

```js
let numberInt = 42; // int
let numberFloat = 42.0; // float
let string = "Hello, World!";
let boolean = true;
let object = {
  name: "John",
  age: 30,
};
let array = [1, 2, 3];

console.log(typeof numberInt); // Output: "number"
console.log(typeof numberFloat); // Output: "number"
console.log(typeof string); // Output: "string"
console.log(typeof boolean); // Output: "boolean"
console.log(typeof object); // Output: "object"
console.log(typeof array); // Output: "object"
```

## Constants

Use `const` to declare a constant.

```js
const <constant_name> = <value>;
```

> `<constant_name>` is the name of the constant you want to declare.
> `<value>` is the value of the constant.

> [!warning]
> The value of a constant can't be changed.

## Operators

There are some operators in JavaScript:

- `+` : addition
- `-` : subtraction
- `*` : multiplication
- `/` : division
- `%` : modulo (remainder of Euclidean division)
- `**` : exponentiation

Examples:

```js
let a = 10;
let b = 3;

// Addition
let c = a + b;
console.log("Addition:", c); // Output: "Addition: 13"

// Subtraction
let d = a - b;
console.log("Subtraction:", d); // Output: "Subtraction: 7"

// Multiplication
let e = a * b;
console.log("Multiplication:", e); // Output: "Multiplication: 30"

// Division
let f = a / b;
console.log("Division:", f); // Output: "Division: 3.3333333333333335"

// Modulo
let g = a % b;
console.log("Modulo:", g); // Output: "Modulo: 1"

// Exponentiation
let h = a ** b;
console.log("Exponentiation:", h); // Output: "Exponentiation: 1000"
```

## Functions

Use `function` to declare a function.

```js
function <function_name>(<parameters>) {
    <function_body>
}
```

> `<function_name>` is the name of the function you want to declare.
> `<parameters>` are the parameters of the function.
> `<function_body>` is the body of the function.

> [!tip]
> To call a function, use `<function_name>()`.

### Return

Use `return` to return a value from a function.

```js
function <function_name>(<parameters>) {
    return <return_value>;
}
```

> `<return_value>` is the value that will be returned from the function.

Example:

```js
function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log(result); // Output: 15
```
