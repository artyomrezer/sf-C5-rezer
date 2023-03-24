const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
  `;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNodesArray = xmlDOM.querySelectorAll('student');

function studentXMLNode_to_studentJSObject(studentNode) {
    let studentObj = {
      name: studentNode.querySelector('name').querySelector('first').textContent,
      age: studentNode.querySelector('age').textContent,
      prof: studentNode.querySelector('prof').textContent,
      lang: studentNode.querySelector('name').getAttribute('lang')        
      };
    return studentObj
  };

var studentsList = {list: []} 
for (let i = 0; i < studentNodesArray.length; i++) {
  const studentObj = studentXMLNode_to_studentJSObject(studentNodesArray[i]);
  studentsList['list'].push(studentObj)
}

console.log(studentsList);