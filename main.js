const burgerButton = document.querySelector(".burger-menu")
const header = document.querySelector(".header")
const body = document.querySelector("body")

burgerButton.addEventListener("click", ()=>{
    header.classList.toggle("header-burger")
    burgerButton.classList.toggle("active")
    body.classList.toggle('lock')
})