function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = [];
  collection.forEach(number => {
    if (!result.includes(number)) {
      result.push(number);
    }
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
