# Conditions in JavaScript

## Summary

|              Code | Description                                            | Example                                                                 |
|------------------:|--------------------------------------------------------|-------------------------------------------------------------------------|
|              `if` | Execute a block of code if a condition is true         | `if (<condition>) { ... }`                                              |
|            `else` | Execute a block of code if no other condition is true  | `if (<condition1>) { ... } else { ... }`                                |
|         `else if` | Execute a block of code if another condition is true   | `if (<condition1>) { ... } else if (<condition2>) { ... } else { ... }` |
|          `switch` | Execute a block of code depending on a condition       | `switch (<condition>) { ... }`                                          |
| `... ? ... : ...` | Execute a block of code if a condition is true         | `(<condition>) ? { <code_if_true> } : { <code_if_false> }`              |
|           `break` | Stop the execution of a block of code                  | `if (<condition>) { ... } break;`                                       |
|        `continue` | Skip the current iteration of a code then execute next | `for (<condition>) { ... continue; }`                                   |

>[!note]
> Look at the [comparison doc](js-comparison.md) for details on comparisons and logical operators.

## `if`

Use `if` to execute a block of code if a condition is true.

```js
if (<condition>) {
    // block of code to be executed if the condition is true
}
```

> `<condition>` is a condition that must be true or false.

## `if...else`

Use `if` to execute a block of code if a condition is true. Use `else` to execute a block of code if the condition is false.

```js
if (<condition>) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}
```

> `<condition>` is a condition that must be true or false.

## `else if`

Use `else if` to execute a block of code if another condition is true. Use `else` to execute a block of code if the condition is false.

```js
if (<condition1>) {
    // block of code to be executed if the condition1 is true
} else if (<condition2>) {
    // block of code to be executed if the condition1 is false and the condition2 is true
} else {
    // block of code to be executed if the condition1 and condition2 are false
}
```

> `<condition1>` and `<condition2>` are conditions that must be true or false.

## Ternary Operator

Use `condition ? value1 : value2` to execute a block of code depending on a condition.

```js
<condition> ? <value_if_true> : <value_if_false>
```

> `<condition>` is a condition that must be true or false.
> `<value_if_true>` and `<value_if_false>` are the values that will be returned if the condition is true or false, respectively.

Example:

```js
let x = 10;

x > 5 ? console.log("x is greater than 5") : console.log("x is less than or equal to 5"); // Output: "x is greater than 5"
```

## `switch`

Use `switch` to execute a block of code depending on a condition.

Use `case` to specify a block of code to be executed if the condition is equal to certain value.

Use `default` to specify a block of code to be executed if the condition is none of the above.

```js
switch (<condition>) {
    case <value1>:
        // block of code to be executed if the condition is <value1>
        break;
    case <value2>:
        // block of code to be executed if the condition is <value2>
        break;
    default:
        // block of code to be executed if the condition is none of the above
}
```

> `<condition>` is a condition that must be equal to one of the `<value1>` or `<value2>` values.
> `<value1>` and `<value2>` are values that can be compared to the `<condition>` variable.

Example:

```js
let x = 10;

switch (x) {
    case 5:
        console.log("x is 5"); // Output: "x is 5"
        break;
    case 10:
        console.log("x is 10"); // Output: "x is 10"
        break;
    default:
        console.log("x is neither 5 nor 10"); // Output: "x is neither 5 nor 10"
}
```

## `break` and `continue`

Use `break` to exit a loop.

Use `continue` to skip an iteration then continue with the next iteration.

```js
for (let i = 0; i < 10; i++) {
    if (<condition1>) {
        break; // exit the loop if the condition is true
    } else if (<condition2>) {
        continue; // skip the current iteration if the condition is true
    } else {
        // block of code to be executed if both conditions are false
    }
}
```

> `<condition1>` and `<condition2>` are conditions that must be true or false.

Example:

```js
// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    } else {
        console.log(i); // Output: 0, 1, 2, 3, 4
    }
}

// continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } else {
        console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
    }
}
```
