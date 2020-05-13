const doSomething = () => {
  alert('hello world');
}

// js-collapse == start ========
// const fnmap = {
//   'toggle': 'toggle',
//   'show': 'add',
//   'hide': 'remove'
// };

// const collapse = (selector, cmd) => {
//   const targets = Array.from(document.querySelectorAll(selector));
//   targets.forEach(target => {
//     target.classList[fnmap[cmd]]('show');
//   });
// }

// const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

// window.addEventListener('click', (ev) => {
//   const elm = ev.target;
//   if (triggers.includes(elm)) {
//     const selector = elm.getAttribute('data-target');
//     collapse(selector, 'toggle');
//   }
// }, false)
// js-collapse == end ========




// js-handle-dropdown-aside-color == start ========
// const collapsible = document.getElementsByClassName("menu-link menu-toggle");
// var colls = document.getElementsByClassName('menu-link menu-toggle');

// for (let i = 0; i < colls.length; i++) {
//   colls[i].addEventListener('click', () => {
//     console.log(colls[i],'right after click')
//     if(colls[i].classList.contains("menu-toggle-active")){
//       colls[i].classList.remove("menu-toggle-active")
//     } else{
//       colls[i].classList.add("menu-toggle-active")
//     }
//   })
// }
// js-handle-dropdown-aside-color == end ========

const aside = document.querySelector("#dk_aside");
const dk_body = document.querySelector("#dk_body");
const collapse = document.getElementsByClassName("menu-submenu collapse");

const kt_aside_menu_wrapper = document.getElementById("kt_aside_menu_wrapper");


// js-handle-aside-minimized == start ========
aside.addEventListener("mouseenter", () => {
  if (dk_body.classList.contains("aside-minimized")) {
    dk_body.classList.add('aside-minimized-hover')
  } else {
    dk_body.classList.remove('aside-minimized-hover');
  }
})
aside.addEventListener("mouseleave", () => {
  dk_body.classList.remove('aside-minimized-hover')
})
// js-handle-aside-minimized == end ========




// js-handle-toggle-aside == start ========
const toggle_aside = document.querySelector("#toggle-aside");
toggle_aside.addEventListener("click", () => {
  if (dk_body.classList.contains("aside-minimized")) {
    dk_body.classList.remove("aside-minimized");
  } else {
    dk_body.classList.add("aside-minimized");
  }
})
// js-handle-toggle-aside == end ========


//media-screen-list
const mobileScreen = window.matchMedia("(max-width: 991.98px");
const tabletScreen = window.matchMedia("(max-width: 991.98px");
const computerScreen = window.matchMedia("(min-width: 992px)");


// js-handle-window-screen == start ========
window.addEventListener('resize', () => {
  if(mobileScreen.matches){
    dk_body.classList.add("dk-mobile");
    console.log('markotop')
  }else{
    dk_body.classList.remove("dk-mobile");
    console.log('ada')
  }
})
// js-handle-window-screen == end ========

// const detectScreen = () => {
//   if (mobileScreen.matches) {
//     dk_body.classList.add("dk-mobile")
//   } else {
//     return false;
//   }
// }

const checkScreenSize = () =>{
  if(mobileScreen.matches){
    dk_body.classList.add("dk-mobile");
    // alert('mobilenih');
  }else{
    dk_body.classList.remove("dk-mobile");
  }
}

window.onload = checkScreenSize;



// js-handle-toggleNavbarMobile == start ======
// const toggleState = 0;

const toggleNavbarMobile =()=>{
  dk_body.classList.add('mobile-navbar-show')
  aside.style.left="0px"
}

// close navbarMobile when click outside == start
document.addEventListener('click', function(event) {
  var isClickInside = aside.contains(event.target);
  if(dk_body.classList.contains("dk-mobile")){
    console.log('mobile');
    if (!isClickInside) {
      if(dk_body.classList.contains("mobile-navbar-show") && dk_body.classList.contains("dk-mobile")){
        dk_body.classList.remove('mobile-navbar-show');
      }else{
        aside.style.left="";
        console.log('abc')
      }
    }
  }else{
    console.log('not mobile')
  }
});


// close navbarMobile when click outside == start
// js-handle-toggleNavbarMobile == end ======