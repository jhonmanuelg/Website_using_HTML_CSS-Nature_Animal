const menuBtn =  document.querySelector(".menu_btn");
const  navlinks = document.querySelector(".nav_links");

menuBtn.addEventListener('click',  () => {
    navlinks.classList.toggle("mobile_menu")
})