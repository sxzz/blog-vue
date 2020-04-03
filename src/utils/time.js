const format = timestamp => {
  const date = new Date(timestamp * 1000);
  return date
    .toDateString()
    .split(" ")[1]
    .concat(date.getDate())
    .concat(", ")
    .concat(date.getFullYear());
};

export default {
  format,
};
