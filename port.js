let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['<i>.frontend Developer', 'Backend Developer.','Web Developer'],
    typeSpeed: 80,
    backSpace:80,
    backDaly:1200,
        loop:true,
  });
