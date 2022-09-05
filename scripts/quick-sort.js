const quickSort = (list) => {
  if (list.length < 2) {
    return list;
  } else {
    let pivot = list[0];

    let more = list.slice(1).filter((item) => item >= pivot);
    let less = list.slice(1).filter((item) => item < pivot);

    return [...quickSort(less), pivot, ...quickSort(more)];
  }
};
