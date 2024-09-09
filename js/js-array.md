# JavaScript Array

## Summary

|                                        Code | Description                             | Example                                                       |
|--------------------------------------------:|-----------------------------------------|---------------------------------------------------------------|
|                                 `new Array` | Create an array                         | `let array = new Array(<size>);`                              |
|                                    `length` | Get the length                          | `let length = array.length;`                                  |
|                                   `array[]` | Access an element                       | `let element = array[<index>];`                               |
|                                 `array[] =` | Update an element                       | `array[<index>] = value;`                                     |
|                             `array.unshift` | Add an element at the beginning         | `array.unshift(<value>);`                                     |
|                                `array.push` | Add an element at the end               | `array.push(<value>);`                                        |
|                               `array.shift` | Remove the first element                | `array.shift();`                                              |
|                                 `array.pop` | Remove the last element                 | `array.pop();`                                                |
|                      `splice(index, count)` | Remove elements from an array           | `array.splice(<index>, <number_of_elements>);`                |
| `splice(index, 0, element1, element2, ...)` | Add elements from an array              | `array.splice(<index>, 0, <element1>, <element2>, ...);`      |
|                       `[...new Set(array)]` | Get unique values (= remove duplicates) | `let uniqueArray = [...new Set(array)];`                      |
|                             `array.reverse` | Reverse the array                       | `array.reverse();`                                            |
|                        `Math.max(...array)` | Find the maximum value                  | `let max = Math.max(...array);`                               |
|                        `Math.min(...array)` | Find the minimum value                  | `let min = Math.min(...array);`                               |
|                                `array.sort` | Sort the array                          | `array.sort();`                                               |
|                                `array.flat` | Flatten the array                       | `array.flat();`                                               |
|                              `array.concat` | Merge two arrays                        | `array.concat(array2);`                                       |
|                `array.unshift(array.pop())` | Rotate the array (clockwise)            | `array.unshift(array.pop());`                                 |
|                 `array.push(array.shift())` | Rotate the array (conterclockwise)      | `array.push(array.shift());`                                  |
|                              `array.filter` | Find common elements                    | `let commonElements = array.filter(x => array2.includes(x));` |

## Create an array

Use `new Array(<size>)` to declare an array.

```js
let array = new Array(<size>);
```

> `<size>` is the size of the array.

Example:

```js
let arr = new Array(3);

console.log(arr); // Output: [ <3 empty items> ]
```

## Get the length of an array

Use `length` to get the length of an array.

Example:

```js
let array = [1, 2, 3];
let length = array.length;

console.log(length); // Output: 3
```

## Access array elements

Use `array[index]` to access an array element.

```js
let element = array[<index>];
```

> `<index>` is the index of the element you want to access.
> In an array, the index always starts from `0`.

Example:

```js
let array = [1, 2, 3];
let element = array[1];

console.log(element); // Output: 2
```

## Update array elements

Use `array[index] = value` to update an array element.

```js
array[index] = value;
```

> `<index>` is the index of the element you want to update.
> `<value>` is the new value of the element.

Example:

```js
let array = [1, 2, 3];
array[1] = 5;

console.log(array); // Output: [1, 5, 3]
```

## Add elements

Use `array.push(<value>)` to add an element to the end of an array.

```js
array.push(<value>);
```

> `<value>` is the new element you want to add.

Example:

```js
let array = [1, 2, 3];
array.push(4);

console.log(array); // Output: [1, 2, 3, 4]
```

### Add elements at first position

Use `array.unshift(<value>)` to add an element to the beginning of an array.

```js
array.unshift(<value>);
```

> `<value>` is the new element you want to add.

Example:

```js
let array = [1, 2, 3];
array.unshift(0);

console.log(array); // Output: [0, 1, 2, 3]
```

## Remove elements

Use `array.pop()` to remove an element from the end of an array.

```js
array.pop();
```

Example:

```js
let array = [1, 2, 3];
array.pop();

console.log(array); // Output: [1, 2]
```

### Remove elements at first position

Use `array.shift()` to remove an element from the beginning of an array.

```js
array.shift();
```

Example:

```js
let array = [1, 2, 3];
array.shift();

console.log(array); // Output: [2, 3]
```

## Remove/Add elements by index (splice)

Use `array.splice(<index>, <number_of_elements_to_remove>, <elements_to_add>)` to remove/add elements by index.

```js
array.splice(<index>, <number_of_elements_to_remove>, <elements_to_add>);
```

> `<index>` is the index of the element you want to remove.
> `<number_of_elements_to_remove>` is the number of elements you want to remove. If not specified, all following elements will be removed. If set to `0`, no elements will be removed. This is optional.
> `<elements_to_add>` is the new elements you want to add. This is optional.

Example:

```js
let array = [1, 2, 3, 4, 5];
console.log("Original array:", array); // Output: [1, 2, 3, 4, 5]

// Remove the element from index 2
array = [1, 2, 3, 4, 5];
let array2 = array.splice(2);

console.log("array:", array); // Output: [1, 2]
console.log("array2:", array2); // Output: [3, 4, 5]

// Remove 2 elements from index 1
array = [1, 2, 3, 4, 5];
let array3 = array.splice(2, 2);

console.log("array:", array); // Output: [1, 2, 5]
console.log("array3:", array3); // Output: [3, 4]

// Add 2 elements at index 1
array = [1, 2, 3, 4, 5];
let array4 = array.splice(1, 0, 3, 6);

console.log("array:", array); // Output: [1, 3, 6, 2, 3, 4, 5]
console.log("array4:", array4); // Output: []

// Remove 2 elements from index 1 and add 2 elements at index 1
array = [1, 2, 3, 4, 5];
let array5 = array.splice(1, 2, 3, 6);

console.log("array:", array); // Output: [1, 3, 6, 4, 5]
console.log("array5:", array5); // Output: [2, 3]
```

## Get unique values (= remove duplicates)

Use `[...new Set(array)]` to get unique values from an array.

You can also use `Array.from(new Set(array))`.

```js
let uniqueArray = [...new Set(array)];
```

```js
let uniqueArray = Array.from(new Set(array));
```

Example:

```js
let array = [1, 2, 2, 3, 3, 3];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3]
```

## Reverse an array

Use `array.reverse()` to reverse an array.

```js
array.reverse();
```

Example:

```js
let array = [1, 2, 3];
array.reverse();

console.log(array); // Output: [3, 2, 1]
```

## Find maximum value

Use `Math.max(...array)` to find the maximum value in an array.

```js
let max = Math.max(...array);
```

Example:

```js
let array = [1, 2, 3];
let max = Math.max(...array);

console.log(max); // Output: 3
```

## Find minimum value

Use `Math.min(...array)` to find the minimum value in an array.

```js
let min = Math.min(...array);
```

Example:

```js
let array = [1, 2, 3];
let min = Math.min(...array);

console.log(min); // Output: 1
```

## Sort an array

Use `array.sort(<comparison_function)` to sort an array.

```js
array.sort(<comparison_function>);
```

> `<comparison_function>` is the comparison function you want to use.

Example:

```js
let array = [3, 2, 1];
array.sort((a, b) => b - a);

console.log(array); // Output: [1, 2, 3]
```

> [!note]
> If you don't specify a comparison function, the array will be sorted in ascending order by default.
> `(a, b) => b - a` is a comparison function that sorts the array in descending order.
> `(a, b) => a - b` is a comparison function that sorts the array in ascending order.

## Flatten an array

Use `array.flat()` to flatten an array.

```js
array.flat(<depth>);
```

> `<depth>` is the depth of the array you want to flatten. Default value is 1.
> Set `<depth>` to `Infinity` to flatten the array completely.

Example:

```js
let unflattenArr = [1, [2, 3, [4, 5], 6], 7, 8];
let flattenArr = unflattenArr.flat();
let deepFlattenArr = unflattenArr.flat(Infinity);
console.log(unflattenArr); // Output: [ 1, [ 2, 3, [ 4, 5 ], 6 ], 7, 8 ]
console.log(flattenArr); // Output: [ 1, 2, 3, [4, 5], 6, 7, 8 ]
console.log(deepFlattenArr); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

## Merge arrays

Use `array.concat(array2)` to merge two arrays.

```js
let mergedArray = array.concat(array2);
```

Example:

```js
let array = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array.concat(array2);

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

## Rotate an array

There are many ways to rotate an array:

### Unshift / Pop (clockwise rotation)

Use `array.unshift(array.pop())` to rotate an array.

```js
array.unshift(array.pop());
```

Example:

```js
let array = [1, 2, 3, 4, 5, 6];

array.unshift(array.pop());

console.log(array); // Output: [6, 1, 2, 3, 4, 5]
```

> [!note]
> Use a `for` loop to rotate an array many times.
> Example:

```js
let array = [1, 2, 3, 4, 5, 6];

// Rotate the array 2 times
for (let i = 0; i < 2; i++) {
  array.unshift(array.pop());
}

console.log(array); // Output: [5, 6, 1, 2, 3, 4]
```

### Push / Shift (conterclockwise rotation)

Use `array.push(array.shift())` to rotate an array.

```js
array.push(array.shift());
```

Example:

```js
let array = [1, 2, 3, 4, 5, 6];

array.push(array.shift());

console.log(array); // Output: [2, 3, 4, 5, 6, 1]
```

> [!note]
> Use a `for` loop to rotate an array many times.
> Example:

```js
let array = [1, 2, 3, 4, 5, 6];

// Rotate the array 2 times
for (let i = 0; i < 2; i++) {
  array.push(array.shift());
}

console.log(array); // Output: [3, 4, 5, 6, 1, 2]
```

## Find common elements

Use `array1.filter(x => array2.includes(x))` to find common elements in two arrays.

```js
let commonElements = array1.filter(x => array2.includes(x));
```

Example:

```js
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let commonElements = array1.filter(x => array2.includes(x));

console.log(commonElements); // Output: [2, 3]
```
