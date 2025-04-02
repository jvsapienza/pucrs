// Queue implementation using JavaScript array
const queue = [];

// Push items into the queue
queue.push("Job 1");
queue.push("Job 2");
queue.push("Job 3");

// Shift item from the queue
const firstJob = queue.shift();

console.log(queue);    // Output: ["Job 2", "Job 3"]
console.log(firstJob); // Output: "Job 1"