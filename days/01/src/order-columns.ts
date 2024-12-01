import type { InputData } from "./parse-data";

export const orderColumns = (columns: InputData) => {
  const [firstColumn, secondColumn] = columns;
  const sortedFirstColumn = [...firstColumn].sort((a, b) => a - b);
  const sortedSecondColumn = [...secondColumn].sort((a, b) => a - b);

  return [sortedFirstColumn, sortedSecondColumn] as const;
};
