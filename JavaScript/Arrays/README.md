# Arrays

```JavaScript
const a = [] // Empty array
```

Arrays are not a special type, they are technically objects, so they have a lot of methods attached to them for us to use:

```JavaScript
a.push("Hello") // adds the string "Hello" to the end of the array
a.unshift("World") // adds the string "World" to the end of the array

console.log(a) // Returns => ["World", "Hello"]
```

We can also use [] to get individual items in an array

```JavaScript
console.log(a[0]) // Returns "World"
console.log([1]) // Returns "Hello"
```

This is because arrays start their count at 0, so the first item is at index 0 => a[0]
So for an array of length 2, the last item is at index 1 => array_length - 1 = last index

```JavaScript
console.log(a[a.length - 1]) // Returns "Hello" => last item in the array
```
