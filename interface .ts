interface Person{
    firstName:string,
    lastName:string
}

function greeter(Person: Person) {
    return `Hello,${Person.firstName} ${Person.lastName}`
}

let user ={firstName:'Jane' , lastName:'User'};


greeter(user)

export {}