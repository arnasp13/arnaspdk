function countdown(start) {
  setTimeout(() => {
    console.log(start);
    if (start > 0) {
      countdown(start - 1);
    }
  }, 500);
}

countdown(10);
