const simpleSearch = (target, list) => {
  for (let i = 0; i < list.length; i++) {
    if (target === list[i]) {
      return { index: i, amountOfSteps: i + 1 };
    }
  }
  return null;
};
