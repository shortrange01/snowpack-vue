export default class UserColor {
    colorList: string[] = [];
    errMsg: string = "";

    insertNewNumber = (colorCode: number | string): void => {
        if (this.validateColorCodeMax(colorCode)) {
            this.errMsg = "カラーコードの最大値を超えた数字です";
            return;
        }
        const convertedColorCode: string = this.convertToColorCode(colorCode);
        if (convertedColorCode.slice(0, 1) !== "#") {
            this.errMsg = "「#」から入力してください。";
            return;
        }
        if (this.colorList.length > 1) this.colorList.shift();
        this.colorList.push(convertedColorCode);
    };

    private validateColorCodeMax(colorCode: number | string) {
        return typeof colorCode === "number" && colorCode > 16777215;
    }

    private convertToColorCode = (colorCode: number | string): string => {
        if (typeof colorCode === "string") return colorCode;
        return "#" + colorCode.toString(16).padStart(6, "0");
    };
}
