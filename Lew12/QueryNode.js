//query an element node <div id="courses-1-67"> (current node)
const divCourse = document.getElementById('courses-1-67')

let currentNode = divCourse
while (currentNode !== null && currentNode !== undefined) {
  console.log(`
    current node: ${currentNode},
    node type: ${currentNode.nodeType},
    node name: ${currentNode.nodeName},
    node value: ${currentNode.nodeValue}`)
  console.log(currentNode.childElementCount);
  const childElement = currentNode.children
  currentNode = childElement[0]
}

