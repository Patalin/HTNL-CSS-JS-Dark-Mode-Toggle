
const html = document.querySelector('html')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function(){
  html.classList.toggle('dark')
})