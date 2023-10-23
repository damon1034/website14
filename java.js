burger = document.querySelector ('.burger')
Navbar = document.querySelector ('.Navbar')
navList = document.querySelector ('.nav-list')
RightNav = document.querySelector ('.RightNav')




burger.addEventListener('click',()=>{

RightNav.classList.toggle('v-class-resp')
navList.classList.toggle('v-class-resp')
Navbar.classList.toggle('h-nav-resp')



})