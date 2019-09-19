// 原始数据类型
        // 布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
// 1.布尔值：
let isDone: boolean =false

// 2.数值：
let num: number=6

// 3.字符串：
let name: string = 'Tom'

// 4.空值：JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：

let unusable: void = undefined;

// Null和Undefined







export{}