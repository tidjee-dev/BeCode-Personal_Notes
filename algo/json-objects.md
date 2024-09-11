# JSON & Objects in JavaScript

## Summary

|        Code | Description      | Example                                     |
|------------:|------------------|---------------------------------------------|
|     `parse` | JSON parser      | `let json = JSON.parse(<json_string>);`     |
| `stringify` | JSON stringifier | `let json = JSON.stringify(<json_object>);` |
|   `obj[] =` | Add value        | `<object>[<new_key>] = <value>;`            |
|     `obj[]` | Get value        | `let value = <object>[<key>];`              |
|     `obj[]` | Update value     | `<object>[<key>] = <value>;`                |
|    `delete` | Delete value     | `delete <object>[<key>];`                   |

## Difference between JSON and JS objects

- JSON (JavaScript Object Notation)  is:
  - a text file with the `.json` extension
  - a lightweight format for storing and transporting data.
  - a string format that is easy to parse and manipulate.
  - mainly used for sending and receiving data between applications annd servers.

- JS objects are:
  - created with curly brackets (`{}`) inside a JS file
  - a data structure that is used to store key-value pairs.
  - mainly used for storing data in JavaScript applications.

Example:

```js
// JSON (string format)
/* example.json */
{
  "name": "John",
  "age": 30
  "pets": [
    "cat",
    "dog"
  ]
}

// JS object (key-value pairs)
let jsObject = { name: "John", age: 30, pets: ["cat", "dog"] };
```

## Manipulating JSON

### Parse JSON

Use `JSON.parse` to parse JSON.

```js
let obj = JSON.parse(<json_string>);
```

> `<json_string>` is the string you want to parse.

Example:

```js
let obj = JSON.parse('{"name": "John", "age": 30}');

console.log(obj); // Output: { name: "John", age: 30 }
```

### Stringify JSON

Use `JSON.stringify` to stringify JSON.

```js
let json = JSON.stringify(<json_object>);
```

> `<json_object>` is the object you want to stringify.

Example:

```js
let json = JSON.stringify({ name: "John", age: 30 });

console.log(json); // Output: '{"name":"John","age":30}'
```

## Manipulating JS objects

### Add value to an object

Use `<object>[<new_key>] = <value>` to add value to JSON.

```js
<object>[<new_key>] = <value>
```

> `<object>` is the object you want to add value to.
> `<new_key>` is the new key you want to add value to.
> `<value>` is the value you want to add.

Example:

```js
let obj = {
  name: "John",
  age: 30,
};

obj["city"] = "New York";

console.log(obj); // Output: { name: "John", age: 30, city: "New York" }
```

### Get value from an object

Use `<object>[<key>]` to get value from JSON.

```js
<object>[<key>]
```

> `<object>` is the object you want to get value from.
> `<key>` is the key you want to get value from.

Example:

```js
let obj = {
  name: "John",
  age: 30,
};

console.log(obj.name); // Output: "John"
```

### Update value in an object

Use `<object>[<key>] = <value>` to update value in JSON.

```js
<object>[<key>] = <value>
```

> `<object>` is the object you want to update value in.
> `<key>` is the key you want to update value in.

Example:

```js
let obj = {
  name: "John",
  age: 30,
};

obj.age = 31;

console.log(obj); // Output: { name: "John", age: 31 }
```

### Delete value from an object

Use `delete <object>[<key>]` to delete value from JSON.

```js
delete <object>[<key>]
```

> `<object>` is the object you want to delete value from.
> `<key>` is the key you want to delete value from.

Example:

```js
let obj = {
  name: "John",
  age: 30,
};

delete obj.age;

console.log(obj); // Output: { name: "John" }
```
