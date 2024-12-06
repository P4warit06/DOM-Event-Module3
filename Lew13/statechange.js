document.addEventListener('DOMContentLoaded', () => {
  alert(`hello, body chidren: ${document.body.children.length}`)
})
window.addEventListener('load', () => {
  alert('all resources loaded')
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('endingMessage', 'good bye')
})
