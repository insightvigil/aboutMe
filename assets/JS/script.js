const themeSwitcher = document.getElementById('theme-switcher');
const background = document.getElementsByClassName('background');

console.log(background);


//Light Mode 

//First we targeting the elements that we will change in the button 
const lightMode = () => {
    themeSwitcher.children[0].textContent = 'Light Mode'
    //We change the icon throught its class
    themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun')
    background[0]?.classList.remove('active');
    background[1]?.classList.toggle('active');
    
    
}

const darkMode = () => {
    themeSwitcher.children[0].textContent = 'Dark Mode'
    //We change the icon throught its class
    themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon')
    background[0]?.classList.toggle('active');
    background[1]?.classList.remove('active');
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


