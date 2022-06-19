arr = [4, 7, 2, 1, 8, 10, 6];

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
