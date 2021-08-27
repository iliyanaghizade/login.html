function ToggleMenu() {
    const togglemenu = document.querySelector('.menu');

    togglemenu.classList.toggle('active')
}






function DarkMode() {
    document.body.classList.toggle(`theme-dark`);
    document.getElementById('email_image').src="pictures/email_dark.png";

}

// var SideCard = document.getElementById('sidecard')

// SideCard.addEventListener("mouseover", sidecardanimation);

// function sidecardanimation() {
//     // alert('sht');
//     let pos = 45;
//     let pic = document.getElementById('imageinfluencer');
//     let t = setInterval(move, 10);
//     function move() {
//         pos += 1;
//         pic.style.marginTop = pos + 'px';
//     }
// }

// if(pos >= 60) {
//     pos -= 1;
//     image.style.margintop = pos + 'px';
//     if(pos <= 30) {
//         pos += 1;
//         image.style.margintop = pos + 'px';
//         if(pos >= 60) {
//             pos -= 1;
//             image.style.margintop = pos + 'px';
//             if(pos <= 30) {
//                 pos += 1;
//                 image.style.margintop = pos + 'px';
//                 if(pos == 45) {
//                     clearInterval(t)
//                 }
//             }
//         } 
//     }
// }

//calling the function in window.onload to make sure the HTML is loaded
// window.onload = function() {
//     var pos = 0; 
//    our box element
//    var box = document.getElementById('box');
//    var t = setInterval(move, 10);
 
//    function move() {
//        if(pos >= 150) {
//            clearInterval(t);
//        }
//        else {
//            pos += 1;
//            box.style.left = pos+'px';
//        }
//    }
// }


// function search() {
//     const overlay = document.querySelector('#layer');

//     overlay.classList.toggle(`overlay`);

//     const search = document.querySelector('#search_');
//     document.search.classList.toggle(`search-layer`);


// }



// function applyTheme(theme){
//     document.body.classList.remove("theme-auto","theme-light","theme-dark");
//     document.body.classList.add(`theme-${theme}`);
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const saveTheme = localStorage.getItem('theme') || "auto";

//     applyTheme(saveTheme)

//     for(const opationElement of document.querySelectorAll('#selTheme option')){
//         opationElement.selected = saveTheme === opationElement.value
//     }
  
















//     document.querySelector('#selTheme').addEventListener("change", function () {
//         localStorage.setItem("theme", this.value)
//         applyTheme(this.value)
//     })
// })

// document.addEventListener("DOMContentLoaded", () => {
//     const saveTheme = localStorage.getItem('theme') || "auto";

//     applyTheme(saveTheme)

//     for(const opationElement of document.querySelectorAll('#selThemeTablet option')){
//         opationElement.selected = saveTheme === opationElement.value
//     }
  

//     document.querySelector('#selThemeTablet').addEventListener("change", function () {
//         localStorage.setItem("theme", this.value)
//         applyTheme(this.value)
//     })
// })










// function closeit(){ 
//     document.getElementById('error_login').setAttribute("style", "display:none");
// } 
// setTimeout("closeit", 3000);