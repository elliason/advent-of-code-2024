import { describe, expect, it } from "vitest";
import { orderColumns } from "../order-columns";

describe("order columns", () => {
    it("should order the arrays from lowest to highest", () => {
        const input = [
            [9, 6, 3, 1, 8, 2, 7],
            [5, 3, 0, 8, 9, 1, 6],
        ] as const;

        const expected = [
            [1, 2, 3, 6, 7, 8, 9],
            [0, 1, 3, 5, 6, 8, 9],
        ] as const;

        const result = orderColumns(input);
        expect(result).toEqual(expected);
    });
});
