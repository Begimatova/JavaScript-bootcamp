const app = document.querySelector('#app')

// Card Element
const card = document.createElement('div')
card.classList.add('Card')

// Card Content Element
const content = document.createElement('form')
content.classList.add('CardContent')
card.appendChild(content);

const closeIcon = document.createElement('img')
closeIcon.src = '/assets/images/svg/closeIcon.svg'
closeIcon.classList.add('CardCloseIcon')
card.appendChild(closeIcon)

// Title Element
const title = document.createElement('h6')
title.innerText = 'Вход'
title.classList.add('CardTitle')
content.appendChild(title)

// Email Input Element
const emailInput = document.createElement('input')
emailInput.placeholder = 'E-mail'
emailInput.classList.add('CardInput')
content.appendChild(emailInput);

// Password Input Element
const passwordInput = document.createElement('input')
passwordInput.placeholder = 'Пароль'
passwordInput.classList.add('CardInput')
content.appendChild(passwordInput);

// Button Element
const button = document.createElement('button')
button.innerText = 'Войти'
button.classList.add('CardButton')
content.appendChild(button)

// ForgotPassword Element
const forgotPassword = document.createElement('a')
forgotPassword.innerText = 'Забыли пароль / У меня нет акаунта'
forgotPassword.classList.add('CardForgotPassword')
content.appendChild(forgotPassword)

app.appendChild(card)
