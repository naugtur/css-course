document.addEventListener('DOMContentLoaded', () => {
  const tip = document.querySelector('#tip')
  tip.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = 'url(./todo.png)'
    document.body.classList.add('tipped')
  })
  tip.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'none'
    document.body.classList.remove('tipped')
  })
})
