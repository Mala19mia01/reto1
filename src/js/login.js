const btnSignup = document.getElementById("registrarse"),
      btnSignIn = document.getElementById("iniciarSesion"),
      formSesion = document.querySelector(".Sesion"),
      formRegister = document.querySelector(".Register");


btnSignIn.addEventListener("click", e => {
    formRegister.style.position = "absolute"
    formRegister.style.transform = "translateY(-300%)"
})

btnSignIn.addEventListener("click", e => {
    formSesion.style.position = "absolute"
    formSesion.style.transform = "translateY(380%)"
    formSesion.style.margin = "auto"
})

btnSignup.addEventListener("click", e => {
    formSesion.style.position = "absolute"
    formSesion.style.transform = "translateY(-200%)"
})

btnSignup.addEventListener("click", e => {
    formRegister.style.position = "absolute"
    formRegister.style.transform = "translateY(0%)"
})

