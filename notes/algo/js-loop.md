# JavaScript Loop

## Summary

## `for` Loop

Use `for` to execute a block of code for a specified number of times.

```js
for (let i = 0; i < <number>; i++) {
    // block of code to be executed
}
```

> `<number>` represents the number of times the block of code is executed. It must be a number.

Example:

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

## `while` Loop

Use `while` to execute a block of code while a specified condition is true.

```js
while (<condition>) {
    // block of code to be executed while the condition is true
}
```

> `<condition>` is a condition that must be true or false.

Example:

```js
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

## `do...while` Loop

Use `do...while` to execute a block of code at least once, then repeat the block of code while a specified condition is true.

```js
do {
    // block of code to be executed at least once then repeat while the condition is true
} while (<condition>);
```

> `<condition>` is a condition that must be true or false.

> [!note]
> A `do...while` loop is similar to a `while` loop, except that it executes the block of code at least once before checking the condition.

Example:

```js
let i = 0;
do {
    console.log(i);
    i++;
}
while (i < 10);
```

## `for...in` Loop

Use `for...in` to loop through the properties of an object.

```js
for (let key in object) {
    // block of code to be executed
}
```

> `<key>` is each key of the object you want to loop through.
> `<object>` is an object.

Example:

```js
let object = {
    a: 1,
    b: 2,
    c: 3
}

for (let key in object) {
    console.log(key + ":", object[key]); // Output: a: 1, b: 2, c: 3
}
```

## `for...of` Loop

Use `for...of` to loop through the values of an array.

```js
for (let value of array) {
    // block of code to be executed
}
```

> `<value>` is each value of the array you want to loop through.
> `<array>` is an array.

Example:

```js
let array = [1, 2, 3];

for (let value of array) {
    console.log(value); // Output: 1, 2, 3
}
```
