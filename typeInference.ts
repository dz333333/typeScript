// 如果一个变量在声明的同时给其赋值，typeScript会根据值的类型推断变量的类型
let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// 上面的代码等同于
let myFavoriteNumber2: string = 'seven';
// myFavoriteNumber2 = 7;


// 所以会报错


export{}