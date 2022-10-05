"strict mode";

// console.log(true || true); // Returns true
// console.log(true || false); // Returns true
// console.log(false || true); // Returns true
// console.log(false || false); // Returns false
// console.log("--------------------------------");
// console.log(true && true); // Returns true
// console.log(true && false); // Returns false
// console.log(false && true); // Returns false
// console.log(false && false); // Returns false
// console.log("--------------------------------");
// console.log(null ?? undefined); // Returns undefined
// console.log(undefined ?? null); // Returns null
// console.log(null ?? 1); // Returns 1
// console.log(1 ?? null); // Returns 1
// console.log(undefined ?? 1); // Returns 1
// console.log(1 ?? undefined); // Returns 1
// console.log("--------------------------------");
// short circuit

// const a = true || "Hello";
// const b = false || "Hello";

// console.log(a);
// console.log(b);

const c = false && "";
const d = true && "Hello";

console.log(c);
console.log(d);
