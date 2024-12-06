const divElement = document.querySelector('#div-move')

divElement.addEventListener('mouseover', (event) => {
  const px = document.getElementById('px')
  const py = document.getElementById('py')
  px.textContent = event.pageX
  py.textContent = event.pageY
})
