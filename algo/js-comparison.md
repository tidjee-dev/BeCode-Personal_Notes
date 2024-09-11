# Comparison in JavaScript

Comparison operators are used to compare two values. They always return a boolean value.

## Summary

| Operator | Description              | Example                 |
|---------:|--------------------------|-------------------------|
|     `==` | Equals                   | `if (x == y) { ... }`   |
|     `!=` | Not equals               | `if (x != y) { ... }`   |
|    `===` | Identical                | `if (x === y) { ... }`  |
|    `!==` | Not identical            | `if (x !== y) { ... }`  |
|      `<` | Less than                | `if (x < y) { ... }`    |
|     `<=` | Less than or equal to    | `if (x <= y) { ... }`   |
|      `>` | Greater than             | `if (x > y) { ... }`    |
|     `>=` | Greater than or equal to | `if (x >= y) { ... }`   |
|     `&&` | And                      | `if (x && y) { ... }`   |
|   `\|\|` | Or                       | `if (x \|\| y) { ... }` |
|      `!` | Not                      | `if (!x) { ... }`       |

## Comparison Operators

### `==` (EQUALS)

Use `==` to check if two values are equal.

```js
if (<value1> == <value2>) {
    // block of code to be executed if the values are equal
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = "5";

if (x == y) {
    console.log("x is equal to y"); // Output: "x is equal to y"
} else {
    console.log("x is not equal to y"); // Output: "x is not equal to y"
}
```

### `!=` (NOT EQUALS)

Use `!=` to check if two values are not equal.

```js
if (<value1> != <value2>) {
    // block of code to be executed if the values are not equal
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = "5";

if (x != y) {
    console.log("x is not equal to y"); // Output: "x is not equal to y"
} else {
    console.log("x is equal to y"); // Output: "x is equal to y"
}
```

### `===` (IDENTICAL)

Use `===` to check if two values are identical (equal and of the same type).

```js
if (<value1> === <value2>) {
    // block of code to be executed if the values are identical
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = "5";

if (x === y) {
    console.log("x is identical to y"); // Output: "x is identical to y"
} else {
    console.log("x is not identical to y"); // Output: "x is not identical to y"
}
```

### `!==` (NOT IDENTICAL)

Use `!==` to check if two values are not identical (not equal and of the same type).

```js
if (<value1> !== <value2>) {
    // block of code to be executed if the values are not identical
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = "5";

if (x !== y) {
    console.log("x is not identical to y"); // Output: "x is not identical to y"
} else {
    console.log("x is identical to y"); // Output: "x is identical to y"
}
```

### `>` (GREATER THAN)

Use `>` to check if a value is greater than another value.

```js
if (<value1> > <value2>) {
    // block of code to be executed if the value1 is greater than value2
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = 10;

if (x > y) {
    console.log("x is greater than y"); // Output: "x is greater than y"
} else {
    console.log("x is not greater than y"); // Output: "x is not greater than y"
}
```

### `<` (LESS THAN)

Use `<` to check if a value is less than another value.

```js
if (<value1> < <value2>) {
    // block of code to be executed if the value1 is less than value2
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = 10;

if (x < y) {
    console.log("x is less than y"); // Output: "x is less than y"
} else {
    console.log("x is not less than y"); // Output: "x is not less than y"
}
```

### `>=` (GREATER THAN OR EQUAL TO)

Use `>=` to check if a value is greater than or equal to another value.

```js
if (<value1> >= <value2>) {
    // block of code to be executed if the value1 is greater than or equal to value2
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = 10;

if (x >= y) {
    console.log("x is greater than or equal to y"); // Output: "x is greater than or equal to y"
} else {
    console.log("x is not greater than or equal to y"); // Output: "x is not greater than or equal to y"
}
```

### `<=` (LESS THAN OR EQUAL TO)

Use `<=` to check if a value is less than or equal to another value.

```js
if (<value1> <= <value2>) {
    // block of code to be executed if the value1 is less than or equal to value2
}
```

> `<value1>` and `<value2>` can be numbers, strings, arrays, objects, etc.

Example:

```js
let x = 5;
let y = 10;

if (x <= y) {
    console.log("x is less than or equal to y"); // Output: "x is less than or equal to y"
} else {
    console.log("x is not less than or equal to y"); // Output: "x is not less than or equal to y"
}
```

## Logical Operators

### `&&` (AND)

Use `&&` to execute a block of code if both conditions are true.

```js
if (<condition1> && <condition2>) {
    // block of code to be executed if the condition1 and condition2 are true
}
```

> `<condition1>` and `<condition2>` are conditions. They return a boolean value.

Example:

```js
for (let i = 0; i < 10; i++) {
    if (i > 5 && i < 8) {
        console.log(i); // Output: 6, 7
    }
}
```

### `||` (OR)

Use `||` to execute a block of code if either condition is true.

```js
if (<condition1> || <condition2>) {
    // block of code to be executed if the condition1 or condition2 is true
}
```

> `<condition1>` and `<condition2>` are conditions. They return a boolean value.

Example:

```js
for (let i = 0; i < 10; i++) {
    if (i > 5 || i < 8) {
        console.log(i); // Output: 0, 1, 2, 3, 4, 5, 8, 9
    }
}
```

### `!` (NOT)

Use `!` to execute a block of code if the condition is false.

```js
if (!<condition>) {
    // block of code to be executed if the condition is false
}
```

> `<condition>` is a condition. It returns the opposite of a boolean value.

Example:

```js
for (let i = 0; i < 10; i++) {
    if (!(i > 5)) {
        console.log(i); // Output: 0, 1, 2, 3, 4
    }
}
```

### Results of logical comparisons

#### AND (`&&`)

| value1 | value2 | result |
|--------|--------|--------|
| true   | true   | true   |
| true   | false  | false  |
| false  | true   | false  |
| false  | false  | false  |

#### OR (`||`)

| value1 | value2 | result |
|--------|--------|--------|
| true   | true   | true   |
| true   | false  | true   |
| false  | true   | true   |
| false  | false  | false  |

#### NOT (`!`)

| value | result |
|-------|--------|
| true  | false  |
| false | true   |