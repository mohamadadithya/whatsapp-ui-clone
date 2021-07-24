/* © WhatsApp UI Clone by Mohamad Adithya */

const popMenu = document.querySelector('.pop-menu')
  
function showPopMenu() {
  popMenu.classList.add('active')
}
    
function removePopMenu() {
  popMenu.classList.remove('active')
}

window.onscroll = () => fixedNav()

function fixedNav() {
  const navbar = document.querySelector('.nav-bar')
  
  if(document.documentElement.scrollTop > 60) {
    navbar.classList.add('fixed-top')
  } else {
    navbar.classList.remove('fixed-top')
  }
}

/* © WhatsApp UI Clone by Mohamad Adithya */