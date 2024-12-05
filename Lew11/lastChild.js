const rootElement = document.documentElement
const firstChild = rootElement.firstChild //firstElementChild
console.log(firstChild) //<!--Second Comment-->
const firstElementChild = rootElement.firstElementChild
console.log(firstElementChild) //<head>...</head>

const lastChild = rootElement.lastChild
console.log(lastChild) //<body>...</body>
const lastElementChild = rootElement.lastElementChild
console.log(lastElementChild) //<body>...</body>


const previousLastChild = lastChild.previousSibling
console.log(previousLastChild);
