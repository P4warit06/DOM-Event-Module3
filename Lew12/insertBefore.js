// Unknown id
const divElements = document.getElementsByTagName('div')
const parentNode = divElements[divElements.length - 1]
console.log(parentNode)

// 1. Parent node (กรณีที่รู้ ID)
const knowElements = document.getElementById('elective-1-67')
console.log(knowElements)

// 2. Query ref Node
const refNode = knowElements.children[knowElements.children.length - 1]
console.log(refNode)

// Create new Element
const NewElement = document.createElement('h3')
NewElement.setAttribute('style', 'color:red')
NewElement.textContent = 'Dummy Course'

// 4. Insert Before
knowElements.insertBefore(NewElement, refNode)
// 4.1 Replace child Node
// knowElements.replaceChild(NewElement, refNode);

// 5. Remove node
knowElements.removeChild(knowElements.lastElementChild)

// 6. Remove all
const allCourses = document.getElementById('courses-1-67')
allCourses.textContent = ''

// 7. Remove INT501-Full Stack
const electiveCourses = document.getElementById('elective-1-67')
const courseToRemove = Array.from(electiveCourses.children).find((child) =>
  child.textContent.includes('INT501-Full Stack')
)
if (courseToRemove) {
  electiveCourses.removeChild(courseToRemove)
  console.log('INT501-Full Stack has been removed.')
} else {
  console.log('Course not found.')
}
