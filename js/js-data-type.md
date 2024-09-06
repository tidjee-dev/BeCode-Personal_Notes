# Data Types

Data types are used to store different data values.

## String

A string is a sequence of characters.

```js
let string = "Hello, World!";
```

### Length

Use `length` to get the length of a string.

```js
let string = "Hello, World!";

console.log(string.length); // Output: 13
```

### Concat

Use `concat` to concatenate multiple strings.

```js
let string1 = "Hello, ";
let string2 = "World!";

console.log(string1.concat(string2)); // Output: "Hello, World!"
```

### UpperCase

Use `toUpperCase` to convert a string to uppercase.

```js
let string = "Hello, World!";

console.log(string.toUpperCase()); // Output: "HELLO, WORLD!"
```

### LowerCase

Use `toLowerCase` to convert a string to lowercase.

```js
let string = "Hello, World!";

console.log(string.toLowerCase()); // Output: "hello, world!"
```

### Substring

Use `substring(<start_index>, <end_index>)` to get a substring of a string.

> `<start_index>` and `<end_index>` are the indexes of the substring you want to get.

```js
let string = "Hello, World!";

console.log(string.substring(0, 5)); // Output: "Hello"
console.log(string.substring(7, 11)); // Output: "World"
console.log(string.substring(12)); // Output: "!"
```

## Number

A number is a numerical value.
It can be positive, negative, or zero and integers or floats.

```js
let numberInt = 42;
let numberFloat = 42.0;
```

## Boolean

A boolean is a logical value that can be either true or false.

```js
let boolean = true;
```

### Invert boolean

Use `!` to invert a boolean.

```js
let boolean = true;

console.log(!boolean); // Output: false
```

### Compare boolean

Use `===` to compare two booleans.

```js
let boolean1 = true;
let boolean2 = false;
let boolean3 = true;

console.log(boolean1 === boolean2); // Output: false
console.log(boolean1 === boolean3); // Output: true
```

>[!note]
> `=` is to assign a value to a variable.
> `==` is to compare two values.
> `===` is to compare two values and check if their types are the same.

## Object

An object is a collection of key-value pairs.

### Create object

Use `{<key>: <value>, <key>: <value>, ...}` to create an object.

> `<key>` and `<value>` are the keys and values of the object you want to create.

```js
let object = {
    name: "John",
    age: 30
}
```

### Access object properties

Use `<object_name>[<property_name>]` to access object properties.

```js
let object = {
    name: "John",
    age: 30
};

console.log(object["name"]); // Output: "John"
console.log(object["age"]); // Output: 30
```

### Check if object has a property

Use `hasOwnProperty(<property_name>)` to check if an object has a property.

```js
let object = {
    name: "John",
    age: 30
}

console.log(object.hasOwnProperty("name")); // Output: true
console.log(object.hasOwnProperty("city")); // Output: false
```

### Add object properties

Use `<object_name>[<property_name>] = <value>` to add object properties.

```js
let object = {
    name: "John",
    age: 30
}

object["city"] = "New York";

console.log(object); // Output: { name: "John", age: 30, city: "New York" }
```

### Delete object properties

Use `delete <object_name>[<property_name>]` to delete object properties.

```js
let object = {
    name: "John",
    age: 30
}

delete object["age"];

console.log(object); // Output: { name: "John" }
```

## Null

A null value is a special value that represents the absence of a value.

```js
let nullValue = null;
```

### Check if value is null

Use `<variable_name> === null` to check if a value is null.

```js
let nullValue = null;
let notNullValue = "Hello, World!";

console.log(nullValue === null); // Output: true
console.log(notNullValue === null); // Output: false
```

### Convert value to null

Use `<variable_name> = null` to convert a value to null.

```js
let variable = "Hello, World!";
variable = null;

console.log(variable); // Output: null
```

## Undefined

An undefined value is a special value that represents the absence of a value.

```js
let undefinedValue;

console.log(undefinedValue); // Output: undefined
```
