// const head = document.head // get reference to <head>
// const body = document.body // get reference to <body>
// console.log(head);
// console.log(body);

// call root node  Top node
const rootNode = window.document
console.log(rootNode)

//childnode return all children with all node types
// Nodelist data type array-like  ไม่ใช่ array แค่เหมือน array that implements on
const rootChildNode = rootNode.childNodes
console.log(rootChildNode)
console.log(rootChildNode.length)


// เข้าไปใน Root node 
rootChildNode.forEach((node) => {
  console.log(`node type : ${node.nodeType} , node name : ${node.nodeName}
        , nodeValue : ${node.nodeValue}`)
})

const rootParentNode = rootNode.parentNode
console.log(rootParentNode)

// const html  = document.documentElement
// // alert (html == document.childNodes[0])
// // alert (html == document.firstChild)

// // Element Type First node
// const  rootElement = document.documentElement
// console.log(rootElement); // print  all Element in Root Element HTML
// console.log(rootElement.nodeName); // print name of Element HTML

// // common properties : node type ,  node name , node value
// console.log(rootNode.nodeName); // document
// console.log(rootNode.nodeType); // Type = 9  Document Node
// console.log(rootNode.nodeValue);
// console.log("------ LINE BREAK ----------------");

// console.log(rootElement.nodeName) // HTML
// console.log(rootElement.nodeType) // Type = 1  Element node
// console.log(rootElement.nodeValue)

// if(rootElement.nodeType  == Node.ELEMENT_NODE){
//     console.log('root element is an element node type ');
// } /// result is root element is an element node type
