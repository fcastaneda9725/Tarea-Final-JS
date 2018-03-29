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
  var operacion = '';
  var operandoa = 0;
  var operandob = 0;

  //Función para captar clicks en la pantalla
  function clicks() {
    uno.onclick = function (e) {
          if (pantalla.innerHTML == '0') {
            pantalla.innerHTML = '';
            pantalla.innerHTML = pantalla.innerHTML + '1';
          }else {
            pantalla.innerHTML = pantalla.innerHTML + '1';
          }

          validar(pantalla);
        };

    dos.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }

      validar(pantalla);
    };

    tres.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }

      validar(pantalla);
    };

    cuatro.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }

      validar(pantalla);
    };

    cinco.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }

      validar(pantalla);
    };

    seis.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }

      validar(pantalla);
    };

    siete.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }

      validar(pantalla);
    };

    ocho.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }

      validar(pantalla);
    };

    nueve.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }

      validar(pantalla);
    };

    cero.onclick = function (e) {
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }

      validar(pantalla);
    };

    suma.onclick = function (e) {
      operandoa = pantalla.innerHTML;
      operacion = '+';
      limpiarOperacion();
    };

    igual.onclick = function (e) {
      operandob = pantalla.innerHTML;
      operaciones();
      validar(pantalla);
    };
  }

  //Funcion para validar que solo existan 8 caracteres en la pantalla
  function validar(display) {
    if (display.innerHTML.length < 8) {
      return pantalla;
    }else {
      pantalla.innerHTML = display.innerHTML.substr(0, 8);

    }
  }

  function operaciones() {
    switch (operacion) {
      case '+':
        resultado = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case '-':
        resultado = operandoa - operandob;
        break;
      case '*':
        resultado = operandoa * operandob;
        break;
      case '/':
        resultado = operandoa / operandob;
        break;
    }
    pantalla.innerHTML = resultado;
  }

  function limpiarOperacion() {
    pantalla.innerHTML = '';
  }

  clicks();
}
