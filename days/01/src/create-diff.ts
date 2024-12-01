export const createDiff = (columns: readonly [readonly number[], readonly number[]]) => {
    const [firstColumn, secondColumn] = columns;

    const diffArray = new Array(firstColumn.length).fill(0).map((x, i) => {
        const firstItem = firstColumn[i];
        const secondItem = secondColumn[i];
        if (!firstItem || !secondItem) {
            throw new Error("One of the columns is empty");
        }
        return Math.abs(secondItem - firstItem);
    });

    return diffArray;
};
