let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
  
  // find the "main number" for this row (1,2,3,4,5,4,3,2,1)
  let row = i <= n ? i : 2 * n - i;
  let other = 2 * n - row; // the mirrored number

  let line = "";

  // left side
  for (let j = 1; j <= row; j++) {
    if (j % 2 === 1) line += row + " ";
    else line += other + " ";
  }

  // middle spacing
  for (let s = 1; s <= (n - row) * 4; s++) {
    line += " ";
  }

  // right side
  for (let j = 1; j <= row; j++) {
    if (j % 2 === 1) line += other + " ";
    else line += row + " ";
  }

  console.log(line);
}