const jsonString = `

{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const jsObject = JSON.parse(jsonString)
jsObject.list[0].age = Number(jsObject.list[0].age)
jsObject.list[1].age = Number(jsObject.list[1].age)
console.log(jsObject)
