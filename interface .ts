interface Person{
    firstName:string,
    lastName:string
}

function greeter(Person: Person) {
    return `Hello,${Person.firstName} ${Person.lastName}`
}

let user:Person ={firstName:'Jane' , lastName:'User'};
// 多属性不允许 可见，赋值的时候，变量的形状必须和接口的形状保持一致。否则报错
let user2:Person={
    firstName:'1',
    lastName:'2',
    thirdName:'3'
}

// 可选属性,属性名后加'?'
interface Person2{
    name:string;
    age?:number
}
let Tom:Person2={
    name:'tom'
}
let Tom2:Person2={
    name:'tom',
    age:12
}

// 任意属性
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom3: Person3 = {
    name: 'Tom',
    gender: 'male'
};
// 一旦定义了任意属性,对象的所有属性类型都必须是任意属性的数据类型的子集



// 只读属性 在属性名之前 用'readonly'声明 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 在给对象赋值完成后，约束消失
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

greeter(user)

export {}