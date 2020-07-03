let array = [9, 8, 7, 6, 5, 2, 3, 4, 0, -1, 6, -3, -2, -8];

function selectionSort(a) {
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    let temp = a[i];
    a[i] = a[min];
    a[min] = temp;
  }
  return a;
}

console.log("Original Array >> ", array);
console.log("Sorted Array >> ", selectionSort([...array]));
