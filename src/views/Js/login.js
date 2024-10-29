var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var createAccont = document.querySelector("#createAccont");
var openAccont = document.querySelector("#openAccont");

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

//enviar formulario
document.getElementById("create").addEventListener("submit", function (event) {
   event.preventDefault(); 

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const senha = document.getElementById("password").value;
   const googleId = null
   
   const userData = {
      name: name,
      email: email,
      senha: senha,
      googleId: googleId
   };

    // Envia os dados ao servidor usando Fetch API
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData) // Converte o objeto para JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na rede');
        }
        return response.json();
    })
    .then(data => {
        //o que fazer caso sucesso
        
    })
    .catch(error => {
        //o que fazer caso erro
        
    });
});