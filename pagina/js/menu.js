const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})

const nav2 = document.querySelector("#nav2");
const abrir2 = document.querySelector("#abrir2");
const cerrar2 = document.querySelector("#cerrar2");
abrir2.addEventListener("click", ()=>{
    nav2.classList.add("visible");
})
cerrar2.addEventListener("click", ()=>{
    nav2.classList.remove("visible");
})

const nav3 = document.querySelector("#nav3");
const abrir3 = document.querySelector("#abrir3");
const cerrar3 = document.querySelector("#cerrar3");
abrir3.addEventListener("click", ()=>{
    nav3.classList.add("visible");
})
cerrar3.addEventListener("click", ()=>{
    nav3.classList.remove("visible");
})