let obj={}
let emp={id:101,
    name:"Rahul",
    sal:45000
}

//how to read object properties
console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)
console.log(emp.loc)

//duplicate keys not allowed, duplicates value allowed
let emps={id:101,
    name:"Rahul",
    name: "Rahul gandhi",
    sal:45000
}

let empss={id:101,
    name:"Rahul",
    ename: "Rahul",
    sal:45000
}
console.log(emps)
console.log(empss)
