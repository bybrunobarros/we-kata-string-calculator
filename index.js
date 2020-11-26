export const add = (numbers) => {
  if (numbers === "") return 0;

  return numbers
    .split(/[\n,]/)
    .reduce((result, num) => result + parseInt(num, 10), 0);
};
