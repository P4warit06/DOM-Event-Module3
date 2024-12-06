const okButton = document.getElementById('btn-ok')
console.log(okButton)

//add event handler or event listener, default is event flow: bubbling , boolean flag (true: event capturing, false (default): event bubbling)
//okButton handler function#1

okButton.addEventListener('click', (event) => {
  console.log(`event target: ${event.target}, event target Id: ${event.target.id},
        current target: ${event.currentTarget}, event phase: ${event.eventPhase},
        event type: ${event.type}`)
})

const divElement = document.querySelector('div')
divElement.addEventListener('click', (event) => {
  console.log(`event target: ${event.target},, event target Id: ${event.target.id},
        current target: ${event.currentTarget}, event phase: ${event.eventPhase},
         event type: ${event.type}`)
})

const aLink = document.querySelector('a')
aLink.addEventListener('click', (event) => {
  event.preventDefault()
  alert("Don't visit")
})
