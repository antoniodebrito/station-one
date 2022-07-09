let redirectionButton = document.querySelector('.redirectionButton')
let forgotButton = document.querySelector('#forgotButton')

redirectionButton.addEventListener('click', () => {
    window.location.href = 'sign-up.html'
})

forgotButton.addEventListener('click', () => {
    window.location.href = 'forgot-password.html'
})