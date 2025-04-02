// Array of arrays (2d array)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix)

// access elements
console.log(matrix[1][2]); // Output: 6

// matrices iterates
matrix.forEach(row => {
  row.forEach(item => console.log(item));
});

