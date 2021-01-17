



const toggleSwitch = document.querySelector("input[type=checkbox]");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");  

//function for dark theme
function darkMode(){
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove("fa-sun");
    toggleIcon.children[1].classList.add("fa-moon");
    image2.src = "/img/undraw_proud_coder_dark.svg"
    image3.src = "/img/undraw_feeling_proud_dark.svg"
    image1.src = "/img/undraw_conceptual_idea_dark.svg"

    console.log(image1.src)


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