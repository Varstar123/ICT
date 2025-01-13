let person = {
    name: "john",
    age: 30,
    occupation: "Engineer"
}

console.log(person.name + "\t" + person.age + "\t" + person.occupation)

let people=[
    { name: "John", age: 30, occupation: "Engineer"},
    { name: "Jane", age: 25, occupation: "Doctor"},
    { name: "Bob", age: 40, occupation: "Teacher"}
]

console.log(people[2].name)
people[1].name = "varun"
console.log(people[1])