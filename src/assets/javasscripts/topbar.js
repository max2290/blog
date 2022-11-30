
const  iconMobile = document.querySelector('.header-menu-icon')
const  headerMenu = document.querySelector('.header-menu');
let  isMenuOpen = false;
let  mobileMenuDOM;

const  closeMenu = () => {
    mobileMenuDOM.classList.add.remove('open');
}
const createMobileMenu = () => {
    mobileMenuDOM = document.createElement('div');
    mobileMenuDOM.classList.add('mobile-menu');
    mobileMenuDOM.addEventListener('click',event => {
        event.stopImmediatePropagation();
    })
    mobileMenuDOM.append(headerMenu.querySelector('ul').cloneNode(true));
    headerMenu.append(mobileMenuDOM);
}
const  openMenu = () => {
   if (mobileMenuDOM) {

   }  else  {
       createMobileMenu();
   }
   mobileMenuDOM.classList.add('open');
}
const ToggleMobileMenu = event => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
    isMenuOpen = !isMenuOpen;
}
iconMobile.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    ToggleMobileMenu();
});

window.addEventListener('click',() => {
    if (isMenuOpen) {
        ToggleMobileMenu();
    }
})
window.addEventListener("resize", event => {
    console.log(event);
    if (window.innerWidth > 480 && isMenuOpen) {
        toogleMobileMenu()
    }
})