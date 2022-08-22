const sum = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sum(list.slice(1));
  }
};

const countItemsInList = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    return 1 + countItemsInList(list.slice(1));
  }
};

const findMaxNumber = (list, n) => {
  if (n === 1) {
    return list[0];
  }

  return Math.max(findMaxNumber(list, n - 1));
};

console.log(findMaxNumber([1, 2, 3, 9, 4, 5], 6));
