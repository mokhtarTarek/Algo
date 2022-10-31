export const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  // since the array may contain duplicate value, the pivot
  // should be removed otherwise the code will enter infinite recursion (loop)
  let pivot = arr[Math.floor(arr.length / 2)]; //the arr len could be odd
  let index = arr.indexOf(pivot);
  arr.splice(index, 1);

  let left = [];
  let right = [];
  for (let item of arr) {
    if (item <= pivot) left.push(item);
    if (item > pivot) right.push(item);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
