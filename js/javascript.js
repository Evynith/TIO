"use strict";

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
if(botonMovil){
botonMovil.addEventListener("click", function(){
    let menu = document.querySelector("#menuSuperior_Movil")
    menu.classList.toggle("invisible");
})}
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
/*----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------PARTE 2 TPE------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
let planes = [{
    "plan300": "Enfermedades Graves (ACV, Infarto o Cáncer) $100.000",
    "plan600": "Enfermedades Graves (ACV, Infarto o Cáncer) $200.000",
    "plan900": "Enfermedades Graves (ACV, Infarto o Cáncer)$300.000",
},
{
    "plan300": "Transplante de Órgano $100.000",
    "plan600": "Transplante de Órgano $200.000",
    "plan900": "Transplante de Órgano $300.000",

},
{
    "plan300": "Internación por Cirugías: (monto máximo por día)",
    "plan600": "Internación por Cirugías:(monto máximo por día)",
    "plan900": "Internación por Cirugías:(monto máximo por día)",
}]
let cuerpoTabla = document.querySelector("#CuerpoTabla");
let btn = document.querySelector("#BorrarTabla");
CrearCeldas(0, planes.length);
if(btn){
btn.addEventListener("click", borrarjson);}
let btnEnviar = document.querySelector("#BtnEnviar");
if(btnEnviar){
btnEnviar.addEventListener("click", AgregarValores);}
let btn3test = document.querySelector("#Btn3tests");
if(btn3test){
btn3test.addEventListener("click", Agregar3Valores);}

function CrearCeldas(indice, final) {
    for (let i = indice; i < final; i++) {
        if(cuerpoTabla){
        let row = cuerpoTabla.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = planes[i].plan300;
        cell2.innerHTML = planes[i].plan600;
        cell3.innerHTML = planes[i].plan900;
    }
    }
}
console.log(planes);

function borrarjson() {
    let CantFilas = cuerpoTabla.rows.length;
    if (CantFilas > 0) {
        for (let i = 0; i < CantFilas; i++) {
            document.getElementById("CuerpoTabla").deleteRow(0);

        }
        planes.splice(0, planes.length);
        console.log(planes);
    }
}
function AgregarValores() {
    let NuevosPlanes = {
        "plan300": document.querySelector("#input300").value,
        "plan600": document.querySelector("#input600").value,
        "plan900": document.querySelector("#input900").value,
    }
    planes.push(NuevosPlanes);
    CrearCeldas(planes.length - 1, planes.length);
    console.log(NuevosPlanes);
    console.log(planes);
}

function Agregar3Valores() {
    for (let i = 0; i < 3; i++) {
        let NuevosPlanes = {
            "plan300": "test300",
            "plan600": "test600",
            "plan900": "test900",
        }
        planes.push(NuevosPlanes);
    }
   
        CrearCeldas(planes.length - 3, planes.length);
    
    console.log(planes);
}
/*----------------------------------------------------------------------------------------------------------*/

}/*--llave final---*/