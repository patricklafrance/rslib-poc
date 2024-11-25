import { generateRandomNumber } from "../src/generateRandomNumber.ts";

test("return a value", () => {
    const value = generateRandomNumber();

    expect(value).toBeDefined();
});
