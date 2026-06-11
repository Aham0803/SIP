let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
  let row = i <= n ? i : 2 * n - i;
  let other = 2 * n - row;

  let line = "";
  for (let j = 1; j <= row; j++) {
    if (j % 2 === 1) line += row + " ";
    else line += other + " ";
  }


  for (let s = 1; s <= (n - row) * 4; s++) {
    line += " ";
  }


  for (let j = 1; j <= row; j++) {
    if (j % 2 === 1) line += other + " ";
    else line += row + " ";
  }

  console.log(line);
}