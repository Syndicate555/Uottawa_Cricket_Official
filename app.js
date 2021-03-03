function func(items) {
 return items.filter((value), index) => {
  return items.indexOf(value) == index;
 });
}