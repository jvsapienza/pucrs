// Stack implementation using JavaScript array
const stack = [];

// Push items onto the stack
stack.push("Page 1");
stack.push("Page 2");
stack.push("Page 3");

// Pop item from the stack
const lastPage = stack.pop();

console.log(stack);    // Output: ["Page 1", "Page 2"]
console.log(lastPage); // Output: "Page 3"