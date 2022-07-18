function* transposer(twoDArr) {
  let outerInd = -1;
  let innerInd = -1;

  while (true) {
    outerInd += 1;
    if (outerInd > twoDArr.length - 1) {
      outerInd = 0;
    }
    if (outerInd === 0) {
      innerInd += 1;
    }

    yield twoDArr[outerInd][innerInd];
  }
};

function* pairwiser(arr) {
  let i = -1;

  while (i < arr.length - 1) {
    i += 1;
    yield arr[i] + arr[i + 1];
  }
};

function* findPair(arr, sum) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      // console.log('i', i)
      // console.log('j', j)
      // console.log('arr[i]', arr[i])
      // console.log('arr[j]', arr[j])
      if (arr[i] + arr[j] === sum) {
        yield [arr[i], arr[j]];
      }
    }
  }
};

module.exports = {
  transposer,
  pairwiser,
  findPair
}
