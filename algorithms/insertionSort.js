arr = [4, 7, 2, 1, 8, 10, 6];

function insersionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insersionSort(arr));
