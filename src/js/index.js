const anishaTestimonial = document.querySelector('.anisha')
const aliTestimonial = document.querySelector('.ali')
const richardTestimonial = document.querySelector('.richard')
const shanaiTestimonial = document.querySelector('.shanai')
const anishaInput = document.getElementById('anisha')
const aliInput = document.getElementById('ali')
const richardInput = document.getElementById('richard')
const shanaiInput = document.getElementById('shanai')

anishaInput.addEventListener('click', function () {
    if (anishaInput.checked) {
        anishaTestimonial.classList.add('selecionado')
        aliTestimonial.classList.remove('selecionado')
        richardTestimonial.classList.remove('selecionado')
        shanaiTestimonial.classList.remove('selecionado')
    }
})

aliInput.addEventListener('click', function () {
    if (aliInput.checked) {
        anishaTestimonial.classList.remove('selecionado')
        aliTestimonial.classList.add('selecionado')
        richardTestimonial.classList.remove('selecionado')
        shanaiTestimonial.classList.remove('selecionado')
    }
})

richardInput.addEventListener('click', function () {
    if (richardInput.checked) {
        anishaTestimonial.classList.remove('selecionado')
        aliTestimonial.classList.remove('selecionado')
        richardTestimonial.classList.add('selecionado')
        shanaiTestimonial.classList.remove('selecionado')
    }
})

shanaiInput.addEventListener('click', function () {
    if (shanaiInput.checked) {
        anishaTestimonial.classList.remove('selecionado')
        aliTestimonial.classList.remove('selecionado')
        richardTestimonial.classList.remove('selecionado')
        shanaiTestimonial.classList.add('selecionado')
    }
})

//Validação do Email

const inputEmail = document.getElementById('email')
const inputSubmit = document.getElementById('submit')
const messageError = document.querySelector('.message-error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if ((inputEmail.value === "" || inputEmail.validity.valid === false)) {
        messageError.classList.add('aparecer')
        inputEmail.classList.add('border-invalid')
    } else {
        messageError.classList.remove('aparecer')
        inputEmail.classList.remove('border-invalid')
    }
})

const inputEmailMobile = document.getElementById('email-mobile')
const inputSubmitMobile = document.getElementById('submit-mobile')
const messageErrorMobile = document.querySelector('.message-error-mobile')

inputSubmitMobile.addEventListener('click', function () {
    event.preventDefault()
    if ((inputEmailMobile.value === "" || inputEmailMobile.validity.valid === false)) {
        messageErrorMobile.classList.add('aparecer')
        inputEmailMobile.classList.add('border-invalid')
    } else {
        messageErrorMobile.classList.remove('aparecer')
        inputEmailMobile.classList.remove('border-invalid')
    }
})


//Menu Hamburguer 

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.querySelector('.menu__box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
    }
})