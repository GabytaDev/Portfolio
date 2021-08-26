// boton menu mobile

const menuMobile = document.querySelector(".ocultar-menu-mobile"); //seleciono el elemento
const iconoHamburguesa = document.querySelector(".fa-bars"); //selecciono el icono menu 
const iconoCerrarMenu = document.querySelector(".fa-times") //icono de cierre menu
iconoHamburguesa.onclick = ()=>{
    menuMobile.style.display = "flex"
}

iconoCerrarMenu.onclick = () => {
    menuMobile.style.display = "none"
}