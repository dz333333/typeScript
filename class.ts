class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
console.log(user,'user')

// 类实例内部结构兼容另外一个接口的内部结构，就是被允许的，例如：user包含Person内部的两个属性
document.body.innerHTML = greeter(user);
export{}