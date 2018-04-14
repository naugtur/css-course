document.addEventListener('DOMContentLoaded', () => {
  if(window.location.pathname !== '/') {
    const back = document.createElement('a');
    back.innerText='< menu'
    back.classList.add('goback')
    back.addEventListener('click', () => {
      sessionStorage.removeItem('prevLocation');
      window.location.href = '/';
    })
    document.body.appendChild(back)
  }
  
  const tip = document.querySelector('#tip')
  if(!tip) {return}
  
  tip.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = 'url(./todo.png)'
    document.body.classList.add('tipped')
  })
  tip.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'none'
    document.body.classList.remove('tipped')
  })

})

if(window.location.pathname === '/') {
  if(sessionStorage.prevLocation){
    window.location.href = sessionStorage.prevLocation
  }
} else {
  sessionStorage.prevLocation = window.location.pathname
}
