let formulario = document.getElementById("form")
formulario.addEventListener("submit", validacion)

function validacion(e){
    e.preventDefault()
    console.log("formulario enviado")
    document.getElementById("form").submit();
    document.getElementById('form').reset(); 
}