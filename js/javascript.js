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
}   }

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
captcha();

function captcha (){
let numeroAzar = Math.floor((Math.random() * 1000));
let escribirCaptcha = document.querySelector("#captchaid");
if(escribirCaptcha){
escribirCaptcha.innerHTML = (numeroAzar);}
}
function leerdato (){   
    let comprobante = document.querySelector("#mensajeComprobar");
    let entradaUsuario = document.querySelector("#leer").value;
    let numeroAzar = document.getElementById("captchaid");
    numeroAzar = numeroAzar.innerHTML;
    console.log(numeroAzar);
    console.log(entradaUsuario);
    if (entradaUsuario == numeroAzar){
        comprobante.innerHTML = ("Captcha correcto, mensaje enviado correctamente!");
    }
    else{
        comprobante.innerHTML = ("Captcha incorrecto, mensaje no enviado, vuelva a intentar!");
        captcha();   
}   }

let botonComprobar = document.querySelector("#btnEnviarCaptcha");
if(botonComprobar){
botonComprobar.addEventListener("click", leerdato);}
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------PARTE 2-3 TPE------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------*/
  let cuerpoTabla = document.querySelector("#CuerpoTabla");
  let btn = document.querySelector("#BorrarTabla");
  CrearCeldasSiHayValoresEnLaAPI();
  if (btn) {
    btn.addEventListener("click", borrarjson);
  }
  let btnEnviar = document.querySelector("#BtnEnviar");
  if (btnEnviar) {
    btnEnviar.addEventListener("click", AgregarValores);
  }
  let btn3test = document.querySelector("#Btn3tests");
  if (btn3test) {
    btn3test.addEventListener("click", Agregar3Valores);
  }


  document.addEventListener("DOMSubtreeModified",BtnBorrarFila);
  document.addEventListener("DOMSubtreeModified",BtnEditarFila);
  
  
  async function CrearCeldasSiHayValoresEnLaAPI() {
    let r = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
      {
        "method": "GET",
        "headers": { "Content-Type": "application/json" },
      });
    let json = await r.json();
    CrearCeldas(0, json.salud8.length);
    



  }
  async function CrearCeldas(indice, final) {
    let respuesta = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
      {
        "method": "GET",
        "headers": { "Content-Type": "application/json" },
      });
    let json2 = await respuesta.json();
    for (let i = indice; i < final; i++) {
      if (cuerpoTabla) {
        let row = cuerpoTabla.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = json2.salud8[i].thing.plan300;
        cell2.innerHTML = json2.salud8[i].thing.plan600;
        cell3.innerHTML = json2.salud8[i].thing.plan900;
        let btn1 = document.createElement("button");   
        btn1.innerHTML = "Borrar fila";                   
        btn1.classList.add("btnBorrarFila");
        cell4.appendChild(btn1);
        let btn2 = document.createElement("button");   
        btn2.innerHTML = "Editar fila";                   
        btn2.classList.add("btnEditarFila");
        cell4.appendChild(btn2);
      }
    }
  }
  
  
  function BtnEditarFila(){

    let botones = document.querySelectorAll(".btnEditarFila");
    console.log(botones.length);
    for (let i = 0 ; i < botones.length ; i++) {
      botones[i].onclick = function() {
      console.log("lo edite");
      let elemento = this.name = i;
      editarFila(elemento);
}  }
}
  function BtnBorrarFila(){

      let botones = document.querySelectorAll(".btnBorrarFila");
      console.log(botones.length);
      for (let i = 0 ; i < botones.length ; i++) {
        botones[i].onclick = function() {
        console.log("lo borre");
        let elemento = this.name = i;
        eliminarFila(elemento);
        console.log("elemento =" + elemento);
  }  }
}
function crearInput(){
  let btnEditar = document.createElement("button");   
  btnEditar.innerHTML = "Enviar edicion";                   
  btnEditar.classList.add("btnEnviarEdicionFila");
  let divEditar = document.querySelector(".Editar");
        divEditar.appendChild(btnEditar);

  let inputE300 = document.createElement("input");  
  inputE300.classList.add(".editar300");
  inputE300.type = "text";
  divEditar.appendChild(inputE300);
  let inputE600 = document.createElement("input");  
  inputE600.classList.add(".editar600");
  inputE600.type = "text";
  divEditar.appendChild(inputE600);
  let inputE900 = document.createElement("input");  
  inputE900.classList.add(".editar900");
  inputE900.type = "text";
  divEditar.appendChild(inputE900);
}

async function editarFila(i){
  crearInput();
  let NuevosPlanes = {
    "thing": {
    "plan300": document.querySelector(".editar300").value,
    "plan600": document.querySelector(".editar600").value,
    "plan900": document.querySelector(".editar900").value,
    }
  }
  let url = "http://web-unicen.herokuapp.com/api/groups/07/salud8/";
    let respuesta1 = await fetch(url);
    let jsonR = await respuesta1.json();
     let r = jsonR.salud8[i]._id;
      console.log(r);
      url = "http://web-unicen.herokuapp.com/api/groups/07/salud8/" + r;
      r = await fetch(url, {
        "method": "PUT",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(NuevosPlanes)});
        
      document.getElementById("CuerpoTabla").deleteRow(i);
     
  console.log("click editar");
}
  async function eliminarFila(i){
    let url = "http://web-unicen.herokuapp.com/api/groups/07/salud8/";
  
    let respuesta1 = await fetch(url);
    let jsonR = await respuesta1.json();
     let r = jsonR.salud8[i]._id;
      console.log(r);
      url = "http://web-unicen.herokuapp.com/api/groups/07/salud8/" + r;
      r = await fetch(url, {
        "method": "DELETE",
        "headers": { "Content-Type": "application/json" },

      });
      document.getElementById("CuerpoTabla").deleteRow(i);
    
    console.log("click borrar");
  }

  async function borrarjson() {
    let CantFilas = cuerpoTabla.rows.length;
    if (CantFilas > 0) {
      for (let i = 0; i < CantFilas; i++) {
        document.getElementById("CuerpoTabla").deleteRow(0);

      }
    }
    let url = "http://web-unicen.herokuapp.com/api/groups/07/salud8";


    try {
      let respuesta1 = await fetch(url);
      let jsonR = await respuesta1.json();
      console.log(jsonR);
      for (let elem of jsonR.salud8) {
        let r = elem._id;
        console.log(r);
        url = "http://web-unicen.herokuapp.com/api/groups/07/salud8/" + r;

        r = await fetch(url, {
          "method": "DELETE",
          "headers": { "Content-Type": "application/json" },

        });
      }
    }
    catch (e) {
      console.log(e)
    }
   }
  async function AgregarValores() {
    let NuevosPlanes = {
      "thing": {
        "plan300": document.querySelector("#input300").value,
        "plan600": document.querySelector("#input600").value,
        "plan900": document.querySelector("#input900").value,
      }
    }

    let r = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
      {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(NuevosPlanes)


      });
    if (r.ok) {
      let respuesta = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
        {
          "method": "GET",
          "headers": { "Content-Type": "application/json" },
        });
      let json2 = await respuesta.json();
      CrearCeldas(json2.salud8.length - 1, json2.salud8.length);
      console.log(NuevosPlanes);

    }
  }

  async function Agregar3Valores() {
    for (let i = 0; i < 3; i++) {
      let NuevosPlanes = {
        "thing": {
          "plan300": "test300",
          "plan600": "test600",
          "plan900": "test900",
        }
      }


      let r = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
        {
          "method": "POST",
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(NuevosPlanes)
        }

      )
      if (r.ok) {
        let respuesta = await fetch('http://web-unicen.herokuapp.com/api/groups/07/salud8',
          {
            "method": "GET",
            "headers": { "Content-Type": "application/json" },
          });
        let json2 = await respuesta.json();


        CrearCeldas(json2.salud8.length - 1, json2.salud8.length);

      }
    }
}
/*----------------------------------------------opcionales ENTERGA 2--------------------------------------------------*/
/*--------------------------------------------buscar y resaltar fila--------------------------------------------------*/
function buscarTabla (palabraBuscada){
    let filas = document.querySelectorAll("tr");
    for (let i=0; i < filas.length; i++){
    let celdas = filas[i].children;
        for (let j=0; j < celdas.length; j++){
            let palabraEncontrada = celdas[j].innerHTML;
            console.log(palabraEncontrada);
            if (palabraBuscada == palabraEncontrada){
            resaltarFila(celdas[j]);
}   }   }   }
function resaltarFila(lugar){
    let lugarEncontrado = lugar.parentElement;
    lugarEncontrado.classList.add("resaltado");
}
function recibirBusqueda(){
    let inputBuscado = document.getElementById("inputResaltaBusqueda").value;
    buscarTabla(inputBuscado);
}
let btnResaltarBuscado = document.getElementById("btnResaltar");
    if(btnResaltarBuscado){
    btnResaltarBuscado.addEventListener("click", recibirBusqueda);}
/*------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/


}/*--llave final---*/