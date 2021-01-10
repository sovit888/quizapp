export const sortDataDescending = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    return a.age > b.age ? -1 : 1;
  });
  return sortedData;
};
export const sortDataAscending = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    return a.age > b.age ? 1 : -1;
  });
  return sortedData;
};
