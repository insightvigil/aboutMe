const themeSwitcher = document.getElementById('theme-switcher');

//Light Mode 

//First we targeting the elements that we will change in the button 
const lightMode = () => {
    themeSwitcher.children[0].textContent = 'Light Mode'
    //We change the icon throught its class
    themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun')
}

const darkMode = () => {
    themeSwitcher.children[0].textContent = 'Dark Mode'
    //We change the icon throught its class
    themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon')
}

// Switche Theme

const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme || currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('data-theme','light');
        lightMode();
    }

    else {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('data-theme','dark');
        darkMode();
    }
}

//Evenet Listener 
themeSwitcher.addEventListener('click', switchTheme);

const saveTheme = localStorage.getItem('data-theme');

if(saveTheme) {
    document.documentElement.setAttribute('data-theme',saveTheme);
        if(saveTheme === 'light') {
            darkMode()
        }
        else {
            lightMode()
        }
}