function ToggleMenu() {
    const togglemenu = document.querySelector('.menu');

    togglemenu.classList.toggle('active')
}






function DarkMode() {
    document.body.classList.toggle(`theme-dark`);
    document.getElementById('email_image').src="pictures/email_dark.png";

}