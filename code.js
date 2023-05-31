/* Efecto de movimiento en letras */
const txt_esp = document.querySelector(".txt-esp");

const txt_mov = () =>{
    setTimeout(() => {
        txt_esp.textContent = "oracle next education";
    }, 0);
    setTimeout(() => {
        txt_esp.textContent = "alura latam";
    }, 7000);
    setTimeout(() => {
        txt_esp.textContent = "ONE Guatemala";
    }, 14000);
    setTimeout(() => {
        txt_esp.textContent = "Challenger #1 Grupo 5";
    }, 21000);
    }
    txt_mov();
    setInterval(txt_mov,28000);

/* Añadir funcionamiento al toogle */

const $style = document.documentElement.style;
const aplicarmodo = () =>{

    const iniciar = document.querySelector("input[name=toogle]:checked");
    if( iniciar == null ){var check = "NO"; }else{var check = "SI";}

    if( check === "SI"){
        $style.setProperty("--background","#2e333e");
        $style.setProperty("--colortext","#2e333e");
        $style.setProperty("--colorotros","white");
        $style.setProperty("--filtercolor","invert(93%) sepia(0%) saturate(28%) hue-rotate(26deg) brightness(105%) contrast(106%)");
        $style.setProperty("--shadow","2px 2px 2px 1px rgba(227, 232, 241, 0.693)");
        localStorage.setItem("modo","Dark");
        }
    if( check === "NO"){
        $style.setProperty("--background","#c7dee3");
        $style.setProperty("--colortext","#0A3871");
        $style.setProperty("--colorotros","#0A3871");
        $style.setProperty("--filtercolor","invert(14%) sepia(26%) saturate(6060%) hue-rotate(200deg) brightness(99%) contrast(93%)");
        $style.setProperty("--shadow","2px 2px 2px 1px rgba(0, 0, 0, 0.2)");
        localStorage.setItem("modo","Light");
        }    
}

/* Mantener el modo seleccionado */

const modoPantalla = localStorage.getItem("modo");

    if(    modoPantalla   === 'Dark'){  
        const $checkBox = document.getElementById("toogle");
        $checkBox.checked = true;
        $style.setProperty("--background","#2e333e");
        $style.setProperty("--colortext","#2e333e");
        $style.setProperty("--colorotros","white");
        $style.setProperty("--filtercolor","invert(93%) sepia(0%) saturate(28%) hue-rotate(26deg) brightness(105%) contrast(106%)");
        $style.setProperty("--shadow","2px 2px 2px 1px rgba(227, 232, 241, 0.693)");
    }

/* encriptar y desencriptar */
    const mensaje     = document.getElementById("mensaje");
    const respuesta   = document.getElementById("respuesta");
    var   keys        = [[["e"],["enter"]],
                        [["i"],["imes"]],
                        [["a"],["ai"]],
                        [["o"],["ober"]],
                        [["u"],["ufat"]]];

    var uno = [];
    var dos = [];

    function initEncriptar(){
        if( mensaje.value.length >= 1 ){
            uno = 0, dos = 1;
            const textoEncriptado = revisaencriptado(mensaje.value);
            const $btnc           = document.getElementById("copiar");
            const $btnci          = document.getElementById("copiari");
            const $msj            = document.getElementById("msj");
            const $btnclear       = document.getElementById("clear");
            const $img_el         = document.getElementById("img_el");
                    
            respuesta.value = textoEncriptado;
            mensaje.value = "";
            $btnclear.style.display = "none"; 
            $btnc.style.display     = "inline-block";
            $btnci.style.display    = "inline-block";
            $img_el.style.display   = "none";
            $msj.style.display      = "none";
        } 
    } 
    
    function initdEncriptar(){
        if( mensaje.value.length >= 1 ){
            uno = 1, dos = 0;
            const textodEncriptado = revisaencriptado(mensaje.value);
            const $btnc           = document.getElementById("copiar");
            const $btnci          = document.getElementById("copiari");
            const $msj            = document.getElementById("msj");
            const $btnclear       = document.getElementById("clear");
            const $img_el         = document.getElementById("img_el");    
            
            respuesta.value = textodEncriptado;
            mensaje.value = "";
            $btnclear.style.display = "none"; 
            $btnc.style.display     = "inline-block";
            $btnci.style.display    = "inline-block";
            $img_el.style.display   = "none";
            $msj.style.display      = "none";
        }       
    }
    
    function revisaencriptado(string){
            string  = string.toLowerCase();
            string  = string.normalize('NFD').replace(/[\u0300-\u036f]/g,""); //Quitar acentos y signos diacríticos
            string  = string.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '').trim(); //Quita espacios en blanco de más.
            for( let i = 0; i < keys.length; i++ ){
                if(string.includes(keys[i][uno])){
                    string = string.replaceAll(keys[i][uno],keys[i][dos]);
                }
            }
            return string;
    }

/* Limpiar texto*/

function Clear() {
    const $txtclear   = document.getElementById("respuesta");       
    $txtclear.value = "";

}

/* Copiar al portapapeles */

function Copiar() {
    const $txtmsj     = document.getElementById("respuesta").value;
    const $abtnc      = document.getElementById("copiar");
    const $abtncd     = document.getElementById("copiado");
    const $btnclear   = document.getElementById("clear");
    
        navigator.clipboard.writeText($txtmsj);
        $btnclear.style.display = "inline-block"; 
        $abtnc.style.display = "none";
        $abtncd.style.display = "inline-block";

    setTimeout(() => {
        $abtnc.style.display = "inline-block";
        $abtncd.style.display = "none";
    }, 3000 );
}

/* */

document.getElementById("txt-alert").innerHTML = `La encriptación no aplica para números y si hay acentos serán borrados `;

/* Añadir año actuallizable al footer*/
let fecha   = new Date();
let anhio   = fecha.getFullYear();

document.getElementById("date").innerHTML = " Copyright "+anhio+" ";