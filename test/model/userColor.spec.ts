import UserColor from "../../src/model/userColor";

const model = new UserColor();

describe("3つ以上数字を入力する", () => {
    const lastNum = 999;
    const lastNumConfirm = "#0003e7";
    const secondLastNum = 888;
    const secondLastNumConfirm = "#000378";
    let testNums: number[] = [1, 3, 5, 7, 9, 10];
    testNums = [...testNums, secondLastNum, lastNum];
    testNums.forEach((num) => {
        model.insertNewNumber(num);
    });
    test("入力した数字が２つだけ保持される", () => {
        expect(model.colorList.length).toBe(2);
    });
    test("最後に入力した数字が配列の最後にStringで格納される", () => {
        expect(model.colorList[model.colorList.length - 1]).toBe(
            lastNumConfirm
        );
    });
    test("最後の前に入力した数字が配列の最初にStringで格納される", () => {
        expect(model.colorList[0]).toBe(secondLastNumConfirm);
    });
});

test("「#」から始まるカラーコードの入力が可能", () => {
    const colorCode = "#ffffff";
    model.insertNewNumber(colorCode);
    expect(model.colorList[model.colorList.length - 1]).toBe(colorCode);
});

test("10 進数で入力すると 16 進数に変換される", () => {
    const inputNum: number = 16777215;
    const resultColorCode: string = "#ffffff";
    model.insertNewNumber(inputNum);
    expect(model.colorList[model.colorList.length - 1]).toBe(resultColorCode);
});

describe("エラーパターン: 「#」を先頭につけないで入力", () => {
    const okCode = "#efefef";
    const ngCode = "ffffff";
    test("エラーメッセージが表示される", () => {
        model.insertNewNumber(okCode);
        model.insertNewNumber(ngCode);
        expect(model.errMsg).toBe("「#」から入力してください。");
    });
    test("エラーの場合はコードは保存されない", () => {
        expect(model.colorList[model.colorList.length - 1]).toBe(okCode);
    });
});

describe("エラーパターン: カラーコードの上限以上の数字を入力", () => {
    const ngNumber = 16777216;
    test("エラーメッセージが表示される", () => {
        model.insertNewNumber(ngNumber);
        expect(model.errMsg).toBe("カラーコードの最大値を超えた数字です");
    });
});
