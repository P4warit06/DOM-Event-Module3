// open body
const rootBody = document.body
const childrenNode = rootBody.children // เอาแค่ตัวเดียว
const childrenNodes = rootBody.childNodes // เอาทุกตัว
console.log(childrenNode)
console.log(childrenNodes)

console.log('--------------- just children node -')
Array.from(childrenNode).forEach((node) => {
  console.log(`node type : ${node.nodeType} , node name : ${node.nodeName}
        , nodeValue : ${node.nodeValue}`)
})

console.log('--------------- every node -')

Array.from(childrenNodes).forEach((node) => {
  console.log(`node type : ${node.nodeType} , node name : ${node.nodeName}
        , nodeValue : ${node.nodeValue}`)
})
