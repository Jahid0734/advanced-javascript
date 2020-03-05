const students = [
    {id: 21, name: 'Manry'},
    {id: 30, name: 'Tompa'},
    {id: 35, name: 'sondori'},
    {id: 52, name: 'korim'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const findHim = students.find(s => s.id>35);
console.log(findHim);
