let array = [9, 8, 7, 6, 5, 2, 3, 4, 0, -1, 6, -3, -2, -8];

function bubblesort(a) {
  for (let i = 0; i < a.length; i++) {
    let sorted = true;
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return a;
}

console.log("Original Array >> ", array);
console.log("Sorted Array >> ", bubblesort([...array]));
