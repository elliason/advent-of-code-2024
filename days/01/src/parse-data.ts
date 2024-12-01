import { Schema } from "effect";

const SchemaLine = Schema.Tuple(Schema.NumberFromString, Schema.NumberFromString);
const parseLine = Schema.decodeUnknownSync(SchemaLine);
const InputSchema = Schema.Tuple(Schema.Array(Schema.Number), Schema.Array(Schema.Number));
export type InputData = Schema.Schema.Type<typeof InputSchema>;
const InputTransformation = Schema.transform(Schema.String, InputSchema, {
    strict: true,
    decode: (input) => {
        const arrayOfLines = input
            .trim()
            .split("\n")
            .map((x) => x.trim());
        const arrayOfColumnLines = arrayOfLines.map((line) => {
            const lineTuple = line
                .split(" ")
                .map((x) => x.trim())
                .filter((x) => x.length > 0);
            const parsed = parseLine(lineTuple);

            return parsed;
        });

        const arrayOfColumns = arrayOfColumnLines.reduce(
            (acc, line) => {
                acc[0].push(line[0]);
                acc[1].push(line[1]);
                return acc;
            },
            [[], []] as [Array<number>, Array<number>],
        );

        return arrayOfColumns;
    },
    encode: (input) => {
        return input.join("\n");
    },
});
const InputDecoder = Schema.decodeUnknownSync(InputTransformation);

export const parseData = (input: string): InputData => {
    const decoded = InputDecoder(input);
    return decoded;
};
