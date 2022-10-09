const testObj = {
  date: "2001-06-02",
  data: {
    name: "John",
    age: 32,
  },
};

const { date: d } = testObj;
const { data: info } = testObj;

console.log(d); // Returns "2001-06-02"
console.log(info); // Returns { name: "John", age: 32 }
console.log(info.name); // Returns "John"
console.log(info.age); // Returns 32
