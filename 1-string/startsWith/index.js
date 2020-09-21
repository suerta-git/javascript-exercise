export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.reduce((count, item) => {
    if (item.startsWith('粤A')) {
      return count + 1;
    }
    return count;
  }, 0);
}
