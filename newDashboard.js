const aside = document.querySelector("#dk_aside");
const dk_body = document.querySelector("#dk_body");
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
    dk_body.classList.remove("aside-minimized");
  }else{
    dk_body.classList.remove("dk-mobile");
  }
})
// js-handle-window-screen == end ========

// js-check window screen size when html loaded == start ==========
const checkScreenSize = () =>{
  if(mobileScreen.matches){
    dk_body.classList.add("dk-mobile");
    dk_body.classList.remove("aside-minimized");
  }else{
    dk_body.classList.remove("dk-mobile");
  }
}
window.onload = checkScreenSize;
// js-check window screen size when html loaded == start ==========

// js-handle-toggleNavbarMobile == start =============
const toggleNavbarMobile =()=>{
  dk_body.classList.add('mobile-navbar-show')
  aside.style.left="0px"
}
// js-handle-toggleNavbarMobile == end ======

// close navbarMobile when click outside == start 
document.addEventListener('click', function(event) {
  var isClickInside = aside.contains(event.target);
  if(dk_body.classList.contains("dk-mobile")){
    if (!isClickInside) {
      if(dk_body.classList.contains("mobile-navbar-show") && dk_body.classList.contains("dk-mobile")){
        dk_body.classList.remove('mobile-navbar-show');
      }else{
        aside.style.left="";
      }
    }
  }else{
    return false;
  }
});
// close navbarMobile when click outside == end
// js-handle-toggleNavbarMobile == end =============