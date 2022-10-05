# Objects

Objects can hold any type of data, primitive types, and other objects, as long as the data is wrapped in curly brackets and has a key attached to its value.

```JavaScript
const a = {// Objects are wrapped in a block of curly brackets
  item1: "Hello",
  item2: 12,
  item3: {
    name: "Bob",
  },
}; // End of object
```

```JavaScript
// Key: value
const a = {
  item1: "Hello"
}
```

We can then get the value of an object using. and []

```JavaScript
const a = {// Objects are wrapped in a block of curly brackets
  item1: "Hello",
  item2: 12,
  item3: {
    name: "Bob",
  },
}; // End of object

console.log(a.item3.name);
console.log(a["item1"]);
console.log(a.item2);
```
