import { registrarPersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
});

const registrar = ()=>{
    // Recuperar elemento
    let eNombre = document.getElementById("nombre");
    // Recuperar el valor
    let vNombre = eNombre.value;
    // Crear un objeto
    let objeto = {nombre:vNombre};
    console.log(objeto)
    registrarPersona(objeto)
}