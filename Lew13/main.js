const okButton = document.getElementById('btn-ok')
console.log(okButton)

//add event handler or event listener, default is event flow: bubbling , boolean flag (true: event capturing, false (default): event bubbling)
okButton.addEventListener(
  'click',
  () => {
    console.log('OK button click!!!')
  },
  true
)

const divElement = document.querySelector('div')
function getMessage() {
  console.log('div click!!!')
}
divElement.addEventListener('click', getMessage, true)

document.body.addEventListener(
  'click',
  () => {
    console.log('body click!!!')
  },
  true
)
