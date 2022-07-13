const {
  transposer,
  pairwiser,
  findPair
} = require('./index');

/**
The first learning objective would create a generator function that accomplishes the following:

Input: A 2-d rectangular list. An example is [[1, 2, 3], [6, 5, 4]].
Output: The sequence of the transpose. For the given example, the sequence is 1, 6, 2, 5, 3, 4.

The second learning objective would transform a list into pairwise sums of contiguous entries:

Input: A list of values. An example is [1, 9, 2, 4, 1, 4].
Output: The pairwise sums of the elements. For the given example, the return value is a list containing [10, 11, 6, 5, 5].

The third learning objective would find two consecutive entries in a list (it doesn’t have to be unique) that sum to a specified value.

Input: A list of values and a target sum. An example is a list [1, 9, 2, 4, 7, 4] and a specified target sum of 11.
Output: The procedure will identify any of these pairs: (9, 2), (2, 9), (4, 7), or (7, 4)
 */

describe('let\'s learn generator functions* !!', () => {
  describe('transposer', () => {
    it('is a generator function', () => {
      const generator = transposer();
      expect(generator).toHaveProperty('next');
    });

    it('outputs the elements of the input array in a transposed order', () => {
      const generator = transposer([[1, 2, 3], [6, 5, 4]]);

      [1, 6, 2, 5, 3, 4].forEach(num => {
        expect(generator.next().value).toBe(num);
      });
    });
  });

  describe('pairwiser', () => {
    it('is a generator function', () => {
      const generator = pairwiser();
      expect(generator).toHaveProperty('next');
    });

    it('returns the sum of the element at the index of the call iteration and the next element', () => {
      const generator = pairwiser([1, 9, 2, 4, 1, 4]);

      [10, 11, 6, 5, 5].forEach(num => {
        expect(generator.next().value).toBe(num);
      });
    });
  });

  describe('findPair', () => {
    it('is a generator function', () => {
      const generator = findPair();
      expect(generator).toHaveProperty('next');
    });

    it('finds each pair (order agnostic) that adds up to the sum', () => {
      const generator = findPair([1, 9, 2, 4, 7, 4]);

      [[[9, 2], [2, 9]], [[4, 7], [7, 4]]].forEach(pairs => {
        expect(pairs).toContain(generator.next().value);
      })
    });
  });
});
