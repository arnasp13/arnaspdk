function binarySearch(target, list) {
  let low = 0,
    high = list.length - 1;

  let amountOfSteps = 0;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (list[mid] == target) {
      return { index: mid, amountOfSteps };
    }

    if (list[mid] < target) {
      low = mid + 1;
      amountOfSteps += 1;
    }

    if (list[mid] > target) {
      high = mid - 1;
      amountOfSteps += 1;
    }
  }

  return { index: null, amountOfSteps: 0 };
}
