import { describe, expect, it } from "vitest";
import { createDiff } from "../create-diff";

describe("create diff", () => {
  it("should take a tuple of two arrays of numbers of the same lenght, compate each item in the first array with the corresponding item in the second array, and return a new array of the differences", () => {
    const input = [
      [1, 2, 3, 6, 7, 8, 9],
      [3, 4, 5, 6, 7, 8, 9],
    ] as const;

    const expected = [2, 2, 2, 0, 0, 0, 0];

    const result = createDiff(input);
    expect(result).toEqual(expected);
  });
});
