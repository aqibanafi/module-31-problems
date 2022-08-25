const people = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchotita', age: 22}
];
const onlyAge = [];
for (i = 0; i < people.length; i++){
    const age = people[i].age;
    onlyAge.push(age);
}
    const output = onlyAge.reduce((a, b) => a + b, 0);
    console.log(output)
