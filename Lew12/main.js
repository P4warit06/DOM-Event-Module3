// <div id="courses-1-67"></div>
const divCourse = document.getElementById('courses-1-67');

// create a new element <p></p>
const newP = document.createElement('p')
newP.setAttribute("style", "color : red" ) 
newP.textContent = "INT209-Network"
// append new element <p> to <div id =course-1-67">
divCourse.appendChild(newP)