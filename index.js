const save = document.getElementById('save')
const load = document.getElementById('load')
const remove = document.getElementById('remove')

const textArea = document.getElementById('textarea')

const key = 'textarea-memory'

save.addEventListener('click', () => {
  localStorage.setItem(key, textArea.value)
  const firstAlert = document.getElementsByClassName('alert')[0]
  firstAlert.classList.remove('d-none')
  textArea.value = ''
  setTimeout(() => {
    firstAlert.classList.add('d-none')
  }, 2000)
})

load.addEventListener('click', () => {
  if (save) {
    const content = localStorage.getItem(key)
    textArea.value = content
  }
})

remove.addEventListener('click', () => {
  if (save) {
    localStorage.removeItem(key)
  }
})

if (sessionStorage.getItem('counter')) {
  counter = parseInt(sessionStorage.getItem('counter'))
} else {
  counter = 0
}

function timer() {
  counter++
  document.getElementById('counter').textContent = counter
  sessionStorage.setItem('counter', counter)
}

setInterval(timer, 1000)

const body = document.body
const header = document.querySelector('header')
const mode = document.getElementById('mode')

function toggleTheme() {
  if (body.classList.contains('background')) {
    body.classList.remove('background')
    body.classList.add('backgroundMode')
    localStorage.setItem('theme', 'dark')
  } else {
    body.classList.add('background')
    body.classList.remove('backgroundMode')
    localStorage.setItem('theme', 'light')
  }

  if (header.classList.contains('bg-white')) {
    header.classList.remove('bg-white')
    header.classList.add('backgroundMode')
  } else {
    header.classList.remove('backgroundMode')
    header.classList.add('bg-white')
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    body.classList.add('backgroundMode')
    body.classList.remove('background')
    header.classList.add('backgroundMode')
    header.classList.remove('bg-white')
  } else {
    body.classList.add('background')
    body.classList.remove('backgroundMode')
    header.classList.add('bg-white')
    header.classList.remove('backgroundMode')
  }
}

mode.addEventListener('click', toggleTheme)

loadTheme()
