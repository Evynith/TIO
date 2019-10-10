document.addEventListener('DOMContentLoaded', iniciarPagina);

function iniciarPagina() {
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*------------------------------------------EXTRAS----------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------logo-----------------------------------------------------------*/
    function linkear_home(){
        location.href = 'index.html';
    }
    
    let home = document.querySelector(".logo");
    if (home){
    home.addEventListener("click", linkear_home);}
/*-----------------------------------------nav celular----------------------------------------------------*/
let botonMovil = document.querySelector(".botonMovil");
botonMovil.addEventListener("click", function(){
    let menu = document.querySelector("#menuSuperior_Movil")
    menu.classList.toggle("invisible");
})
/*-----------------------------------------menu vehiculos--------------------------------------------------*/
function ocultarDivs(){
    let parrafos = document.querySelectorAll("section");
    for (let i = 0; i < parrafos.length; i++) {
        let element = parrafos [i];
        element.classList.add("invisible");
}}

let botonAuto = document.querySelector("#autobtn");
if(botonAuto){
botonAuto.addEventListener("click", function(){
    ocultarDivs();
    let planA = document.querySelector("#autos")
    planA.classList.remove("invisible");
})}
let botonBici = document.querySelector("#bicibtn");
if(botonBici){
botonBici.addEventListener("click", function(){
    ocultarDivs();
    let planB = document.querySelector("#bicicletas")
    planB.classList.remove("invisible");
})}
let botonMoto = document.querySelector("#motobtn");
if(botonMoto){
botonMoto.addEventListener("click", function(){
    ocultarDivs();
    let planC = document.querySelector("#motocicletas")
    planC.classList.remove("invisible");
})}
/*----------------------------------------------menu home---------------------------------------------------*/
function linkear_vehiculo(){
    location.href = 'vehiculos.html';
}
function linkear_mantenimiento(){
    location.href = 'mantenimiento.html';
}
function linkear_salud(){
    location.href = 'salud.html';
}

let vehiculos = document.querySelector("#vehiculos");
if (vehiculos){
vehiculos.addEventListener("click", linkear_vehiculo);}
let hogar = document.querySelector("#hogar");
if(hogar){
hogar.addEventListener("click", linkear_mantenimiento);}
let salud = document.querySelector("#salud");
if(salud){
salud.addEventListener("click", linkear_salud);}
let tecnologia = document.querySelector("#tecnologia");
if(tecnologia){
tecnologia.addEventListener("click", linkear_mantenimiento);}
/*-----------------------------------------captcha contacto------------------------------------------------*/
const numero_al_azar= Math.floor((Math.random() * 1000));

let escribir_captcha = document.querySelector("#captchaid");
if(escribir_captcha){
escribir_captcha.innerHTML = (numero_al_azar);}

let boton_comprobar = document.querySelector("#boton_enviar");
if(boton_comprobar){
boton_comprobar.addEventListener("click", leerdato);}

function leerdato()
{   let comprobante = document.querySelector("#mensaje_comprobar");
    let entrada_usuario = document.querySelector("#leer").value;
    if (entrada_usuario == numero_al_azar)
    {

        comprobante.innerHTML = ("Captcha correcto, mensaje enviado correctamente!");

    }
    else{
        comprobante.innerHTML = ("Captcha incorrecto, mensaje no enviado, el captcha se recargara en 4 segundos!");
        setTimeout( "refresh()", 3500 );
        
    }
}
function refresh()
{
    location.reload(true);
}
/*----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------PARTE 2 TPE------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/


}/*--llave final---*/