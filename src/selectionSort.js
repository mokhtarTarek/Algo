// SORTING ALGHORITHM O(n^2)

const findSmallest = function (arr) {
  let smallVal = arr[0];
  for (let i in arr) {
    arr[i] < smallVal && (smallVal = arr[i]);
  }
  return smallVal;
};

export const sortlist = function (arr) {
  let newArr = [];
  const n = arr.length;
  for (let i = 1; i <= n; i++) {
    let smallest = findSmallest(arr);
    newArr.push(smallest);
    // Remove smallest from the original array
    arr.splice(arr.indexOf(smallest), 1);
  }
  return newArr;
};
