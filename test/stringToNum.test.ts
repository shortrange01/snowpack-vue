import stringToNum from "../src/stringToNum";

// test('1を渡すと"1"を返す', () => {
//     const result = stringToNum(1);
//     expect(result).toBe("1");
// });

// test('2を渡すと"2"を返す', () => {
//     const result = stringToNum(2);
//     expect(result).toBe("2");
// });

test('numberを渡すとstringを返す', () => {
    interface Result {
        num: number,
        result: string
    }
    const testArray: Result[] = [{num: 1, result: "1"},{num: 2, result: "2"},{num: 5, result: "5"},{num: 10, result: "10"}];
    testArray.forEach(({num, result}) => {
        expect(stringToNum(num)).toBe(result);
    });
})