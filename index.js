const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const errorContainer = document.querySelectorAll(".error-container")
const userText = document.querySelectorAll(".user-text")
const submitButton = document.querySelector(".free-trial")
const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const checkValidation = () => {

    const fnameValue = fname.value.trim()
    const lnameValue = lname.value.trim() 
    const emailValue = email.value.trim() 
    const passwordValue = password.value.trim()  

    if(fnameValue === ""){
        errorContainer[0].classList.remove("hidden")
        userText[0].classList.add("red")
        userText[0].classList.remove("green")
    } else {
        errorContainer[0].classList.add("hidden")
        userText[0].classList.remove("red")
        userText[0].classList.add("green")
    }

    if(lnameValue === ""){
        errorContainer[1].classList.remove("hidden")
        userText[1].classList.add("red")
        userText[1].classList.remove("green")
    } else {
        errorContainer[1].classList.add("hidden")
        userText[1].classList.remove("red")
        userText[1].classList.add("green")
    }

    if(emailValue === ""){
        errorContainer[2].classList.remove("hidden")
        userText[2].classList.add("red")
        userText[2].classList.remove("green")
    } else if(email.value.match(emailValidation)) {
        errorContainer[2].classList.add("hidden")
        userText[2].classList.remove("red")
        userText[2].classList.add("green")
    }else{
        errorContainer[2].classList.remove("hidden")
        userText[2].classList.add("red")
        userText[2].classList.remove("green")
    }

    if(passwordValue === ""){
        errorContainer[3].classList.remove("hidden")
        userText[3].classList.add("red")
        userText[3].classList.remove("green")
    } else {
        errorContainer[3].classList.add("hidden")
        userText[3].classList.remove("red")
        userText[3].classList.add("green")
    }

}

submitButton.addEventListener("click", (e) =>{

    e.preventDefault()

    checkValidation()

})

