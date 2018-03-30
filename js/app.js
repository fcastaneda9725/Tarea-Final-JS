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
  var teclas = document.getElementsByClassName('tecla');

  //Función para captar clicks en la pantalla
  function clicks() {
    var identificador = 0;
    uno.onclick = function (e) {
          identificador = 12;
          if (pantalla.innerHTML == '0') {
            pantalla.innerHTML = '';
            pantalla.innerHTML = pantalla.innerHTML + '1';
          }else {
            pantalla.innerHTML = pantalla.innerHTML + '1';
          }

          validar(pantalla);
          cambioTamanio(identificador);
        };

    dos.onclick = function (e) {
      identificador = 13;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '2';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    tres.onclick = function (e) {
      identificador = 14;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '3';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    cuatro.onclick = function (e) {
      identificador = 8;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '4';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    cinco.onclick = function (e) {
      identificador = 9;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '5';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    seis.onclick = function (e) {
      identificador = 10;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '6';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    siete.onclick = function (e) {
      identificador = 4;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '7';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    ocho.onclick = function (e) {
      identificador = 5;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '8';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    nueve.onclick = function (e) {
      identificador = 6;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '9';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    cero.onclick = function (e) {
      identificador = 15;
      if (pantalla.innerHTML == '0') {
        pantalla.innerHTML = '';
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }else {
        pantalla.innerHTML = pantalla.innerHTML + '0';
      }

      validar(pantalla);
      cambioTamanio(identificador);
    };

    punto.onclick = function (e) {
      identificador = 16;

      //Validacion par ver si existe el punto dentro de los numeros
      if (pantalla.innerHTML.indexOf('.') != 1) {
        pantalla.innerHTML = pantalla.innerHTML + '.';
        validar(pantalla);
        cambioTamanio(identificador);
      }
    };

    suma.onclick = function (e) {
      identificador = 18;
      operandoa = pantalla.innerHTML;
      operacion = '+';
      limpiarOperacion();
      cambioTamanio(identificador);
    };

    resta.onclick = function (e) {
      identificador = 11;
      operandoa = pantalla.innerHTML;
      operacion = '-';
      limpiarOperacion();
      cambioTamanio(identificador);
    };

    multiplicacion.onclick = function (e) {
      identificador = 7;
      operandoa = pantalla.innerHTML;
      operacion = '*';
      limpiarOperacion();
      cambioTamanio(identificador);
    };

    division.onclick = function (e) {
      identificador = 3;
      operandoa = pantalla.innerHTML;
      operacion = '/';
      limpiarOperacion();
      cambioTamanio(identificador);
    };

    igual.onclick = function (e) {
      identificador = 17;
      operandob = pantalla.innerHTML;
      operaciones();
      validar(pantalla);
      cambioTamanio(identificador);
    };

    on.onclick = function (e) {
      identificador = 0;
      limpiar();
      cambioTamanio(identificador);
    };

    signo.onclick = function (e) {
      identificador = 1;
      cambioSigno(pantalla);
      validar(pantalla);
      cambioTamanio(identificador);
    };

    raiz.onclick = function (e) {
      identificador = 2;
      cambioTamanio(identificador);
    };
  }

  //Funcion para validar que solo existan 8 caracteres en la pantalla
  function validar(display) {
    if (display.innerHTML.length < 8) {
      return display;
    }else {
      pantalla.innerHTML = display.innerHTML.substr(0, 8);

    }
  }

  //Funcion que realiza las operaciones
  function operaciones() {
    switch (operacion) {
      case '+':
        resultado = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case '-':
        resultado = parseFloat(operandoa) - parseFloat(operandob);
        break;
      case '*':
        resultado = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case '/':
        resultado = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    pantalla.innerHTML = resultado;
  }

  //Funcion que limpia la pantalla mientras se hace una operacion
  function limpiarOperacion() {
    pantalla.innerHTML = '';
  }

  //Funcion para limpiar pantalla por completo y limpiar variables
  function limpiar() {
    pantalla.innerHTML = '0';
    operandoa = 0;
    operandob = 0;
    operacion = '';
    resultado = 0;
  }

  //Funcion para cambiar el signo de lo mostrado en pantalla
  function cambioSigno(display) {
    if (display.innerHTML != 0) {
      pantalla.innerHTML = parseFloat(display.innerHTML) * -1;
    }
  }

  //Funcion para el cambio de tamaño de los botones
  function cambioTamanio(i) {
    teclas[i].onmousedown = function (a) {
      teclas[i].style.transform = 'scale(0.9, 0.9)';
    };

    teclas[i].onmouseup = function (a) {
      teclas[i].style.transform = 'scale(1, 1)';
    };
  }

  clicks();
}
