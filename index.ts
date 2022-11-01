function plusOne(digits: number[]): number[] {
  let excess = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!excess) break;
    digits[i]++;
    if (digits[i] === 10) {
      digits[i] = 0;
      excess = true;
    } else {
      excess = false;
    }
  }

  if (excess) digits.unshift(1);
  return digits;
}

let a = [9, 9, 9, 9, 9, 9];
console.log(plusOne(a));
