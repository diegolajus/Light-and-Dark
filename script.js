const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");  
// dark or light images (for non repeating)
function imageMode(color){
    image2.src = `/img/undraw_proud_coder_${color}.svg`
    image3.src = `/img/undraw_feeling_proud_${color}.svg`
    image1.src = `/img/undraw_conceptual_idea_${color}.svg`
}
//function for dark theme
function darkMode(){
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
    imageMode("dark")
}

//function for light theme
function lightMode(){
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
    imageMode("light")
}

//Swithc theme
function switchTheme(event){

    if(event.target.checked){
        //change css off buttons
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    }else{
        //change css off buttons
        document.documentElement.setAttribute("data-theme", "main")
        lightMode();
    }
    console.log(event.target.checked)
}

//event listener
toggleSwitch.addEventListener("change", switchTheme);