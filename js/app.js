window.onload = function () {
  calculadora();
};

function calculadora() {
  //Declaración de la variables a utilizar
  var pantalla = document.getElementById('display');
  var on = document.getElementById('on');
  var signo = document.getElementById('sign');
  var raiz = document.getElementById('raiz');
  var division = document.getElementById('dividido');
  var multiplicacion = document.getElementById('por');
  var resta = document.getElementById('menos');
  var suma = document.getElementById('mas');
  var igual = document.getElementById('igual');
  var punto = document.getElementById('punto');
  var cero = document.getElementById('0');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');

  function clicks() {
    uno.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '1';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '1';
      }
    };

    dos.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }
    };

    tres.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }
    };

    cuatro.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }
    };

    cinco.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }
    };

    seis.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }
    };

    siete.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }
    };

    ocho.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }
    };

    nueve.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }
    };

    cero.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }
    };

  }

  clicks();
}
