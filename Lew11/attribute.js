// const body = document.body
// const divElement = body.children[1]
// console.log(divElement)

const divElement = document.getElementById('dom-01')
const divAttrs = divElement.attributes //get all attributes of current node
console.log(divAttrs.length) //2
for (let i = 0; i < divAttrs.length; i++) {
  console.log(divAttrs[i].name) //id , style
  console.log(divAttrs[i].value) // dom-01, color:red
  console.log(divAttrs[i]) //id='dom-01', style='color:red'
}
//know your attribute name and get its value
console.log(divElement.getAttribute('id')) //dom-01
console.log(divElement.getAttribute('style')) //color:red
//call attribute's parent
console.log(divElement.attributes[0].parentElement) //null
console.log(divElement.attributes[0].parentNode) //null
console.log(divElement.attributes[0].ownerElement) //<div>...</div>
