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
function* pairwiser(arr) {};
function* findPair(arr, sum) {};

module.exports = {
  transposer,
  pairwiser,
  findPair
}