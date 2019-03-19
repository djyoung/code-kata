function sortArray(array) {
  const odds = array
    .filter(isOdd)
    .sort((first, second) => {
      return first <= second ? -1 : 1;
    });
  
  let i = 0;
  const sortedOdds = array.map(value => {
      let result = value;
      if (isOdd(value)) {
        result = odds[i];
        i++;
      }
      
      return result;
  });
  
  return sortedOdds;
}

const isOdd = value => value % 2 === 1;