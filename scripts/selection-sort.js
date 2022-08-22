const findLargest = (list) => {
  let largestIndex = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[largestIndex]) {
      largestIndex = i;
    }
  }

  return largestIndex;
};

const findSmallest = (list) => {
  let smallestIndex = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[smallestIndex]) {
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (list, direction = "ascending") => {
  // find largest
  // pop element from array
  // store element in another array
  // repeat

  let newArr = [];

  while (list.length) {
    const largestIndex =
      direction === "ascending" ? findSmallest(list) : findLargest(list);
    newArr.push(list[largestIndex]);
    list.splice(largestIndex, 1);
  }

  return newArr;
};

console.log(selectionSort([4, 2, 2, 4, 6], "ascending"));
