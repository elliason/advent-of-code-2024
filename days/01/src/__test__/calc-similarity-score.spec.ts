import { describe, expect, it } from "vitest";
import { calculateSimilarityScore } from "../calculate-similarity-score";

describe("calculate similarity score", () => {
  it(`should take a tuple of two arrays of numbers of the same lenght, take each item in the first array, 
    find out how many times it appears in the second array, 
    and construct a new array where each item is the original number times the number of times it appears in the second array
    `, () => {
    const input = [
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3],
    ] as const;

    const expected = [9, 4, 0, 0, 9, 9];

    const result = calculateSimilarityScore(input);
    expect(result).toEqual(expected);
  });
});
