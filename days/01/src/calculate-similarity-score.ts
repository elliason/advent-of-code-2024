export const calculateSimilarityScore = (
  columns: readonly [readonly number[], readonly number[]]
) => {
  const [firstColumn, secondColumn] = columns;

  const similarityScoreArray = new Array(firstColumn.length)
    .fill(0)
    .map((x, i) => {
      const leftItem = firstColumn[i];

      if (!leftItem) {
        throw new Error("One of the columns is empty");
      }

      const occurencesInRightColumn = secondColumn.filter(
        (x) => x === leftItem
      ).length;

      return leftItem * occurencesInRightColumn;
    });

  return similarityScoreArray;
};
