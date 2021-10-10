
// どのタイプのインスタンスか特定する
export const identifyInstance = (value: any): string => {

    if (value.constructor === String) {
        return "String"
    } else if (value.constructor === Number) {
        return "Number"
    } else if (value.constructor === Boolean) {
        return "Boolean"
    } else if (value.constructor === Array) {
        return "Array"
    } else if (value.constructor === Object) {
        return "Object"
    } else if (value.constructor === Function) {
        return "Function"
    } else if (value.constructor === Date) {
        return "Date"
    } else {
        return "undefined"
    }
}