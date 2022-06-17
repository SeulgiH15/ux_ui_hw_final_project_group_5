const toggleButton = document.toronto_cupcakes_mainpage('toggle-button')[0]
const navbarLinks = document.toronto_cupcakes_mainpage('topnav-centered')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})