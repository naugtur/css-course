document.addEventListener('DOMContentLoaded', () => {
  const tip = document.querySelector('#tip')
  tip.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = 'url(./todo.png)'
  })
  tip.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'none'
  })
})
