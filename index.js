let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    cartitem.classList.remove('active')
    searchbox.classList.remove('active')
}
let cartitem = document.querySelector('.cart-item-container')
document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active')
    cartitem.classList.toggle('active')
    searchbox.classList.remove('active')
}
let searchbox= document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
    searchbox.classList.toggle('active')
}
window.onscroll = () =>{
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
    searchbox.classList.remove('active')
}