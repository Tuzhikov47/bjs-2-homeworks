function compareArrays(arr1, arr2) {
  let result = false;
    if (arr1.length === arr2.length && arr1.every((n,i) => n === arr2[i])) {
      result = true;
    }
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
const newArr = arr.filter((number) => number > 0 && number % 3 === 0);
resultArr = newArr.map((number) => number*10);
  return resultArr; // array
}