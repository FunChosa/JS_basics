const matrix = [];

for (let i = 0; i < 3; i += 1) {
  const row = [];
  for (let j = 0; j < 5; j += 1) {
    row.push(j + 1);
  }
  matrix.push(row);
}

console.log(matrix);
