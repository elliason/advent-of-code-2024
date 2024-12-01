import { describe, it, expect } from "vitest";
import { parseData } from "../parse-data";

describe("parse data", () => {
    it("should parse the text input of two columns of numbers to a tuple of two arrays. In each array, there are numbers from one of the two columns", () => {
        const input = `
    16435   48069
    29877   97906
    75256   47355
    25417   59861
    32479   25840
    93953   70621
    21297   57288`;

        const parsed = parseData(input);
        expect(parsed).toEqual([
            [16435, 29877, 75256, 25417, 32479, 93953, 21297],
            [48069, 97906, 47355, 59861, 25840, 70621, 57288],
        ]);
    });
});
