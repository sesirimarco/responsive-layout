const menuItems = document.querySelectorAll('nav ul li a');
const menu = document.querySelector('nav .menu-burger');
const burger = document.querySelector('nav .menu-burger .fa-hamburger');
const close = document.querySelector('nav .menu-burger .fa-times-circle');
const menuList = document.querySelector('nav ul');

menu.addEventListener('click', function() {
  burger.classList.toggle('hide');
  close.classList.toggle('show');
  menuList.classList.toggle('menu-active');
  console.log( menuList.classList.contains('hide') )
  menuList.classList.contains('hide') 
    ? menuList.classList.toggle('hide')
    :  null;
  
});
menuItems.forEach(item => {
  item.addEventListener('click',function() {
    if (getComputedStyle(menu).display === 'block') {
      burger.classList.toggle('hide');
      close.classList.toggle('show');
      menuList.classList.toggle('menu-active');
      menuList.classList.toggle('hide');
    }
  });
})
