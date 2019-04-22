(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- el primer grupo me da el color de fondo de la pagina-->\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<link href=\"https://fonts.googleapis.com/css?family=Asap:400,700|Montserrat:300,400,700|Roboto:300,400,700\" rel=\"stylesheet\">\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js\"></script>\r\n<style>\r\n\r\n  bootstrap-alert{\r\n  margin: auto;\r\n  width: 280px;\r\n  box-shadow: 1px 1px 3px black;\r\n  }\r\n\r\n  div {\r\n    margin-left: 15px;\r\n  }\r\n    .button-lineas {\r\n        background-color: #1C738D !important;\r\n        border: none !important;\r\n        color: white !important;\r\n        /*padding: 14px 40px;*/\r\n        text-align: center !important;\r\n        text-decoration: none !important;\r\n        display: inline-block !important;\r\n        font-size: 16px !important;\r\n        margin: 4px 2px !important;\r\n        cursor: pointer !important;\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;\r\n    }\r\n\r\nbody {\r\n /* background-color: #ECE8D6;  */\r\n}\r\n.button {\r\n  background-color: #1C738D;\r\n  border: 1px solid #1C738D;\r\n  color: white;\r\n  padding: 14px 40px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\n.button:hover {\r\n  color: #1C738D;\r\n  background-color: white;\r\n}\r\n\r\nbody{\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\np.serif {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 30px;\r\n  color: grey;\r\n}\r\n\r\np.title{\r\n  font-family: 'Asap', sans-serif;\r\n  font-weight: 800;\r\n  font-size: 50px;\r\n  color: grey;\r\n}\r\n\r\nh2{\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 30px;\r\n  color: grey;\r\n}\r\n\r\n.disabled {\r\n  opacity: 0.6;\r\n  cursor: not-allowed;\r\n}\r\n\r\ninput[type=number] {\r\n  width: 25%;\r\n  padding: 6px 10px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#cantProc{\r\n     background-color: #1c738d0d;\r\n    border: 1px solid #1c738d;\r\n}\r\n\r\n.title-etapa{\r\n display: -webkit-inline-box;\r\n    border: 1px solid #1c738d;\r\n    padding: 20px;\r\n    margin: 15px 0 15px 68px;\r\n}\r\n\r\n</style>\r\n</head>\r\n<body>\r\n  <div id=\"script-id\"></div>\r\n<script src=\"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js\"></script>\r\n\r\n<div style=\"text-align:center\">\r\n  <p class=\"title\">\r\n    Bienvenidos al {{ title }}\r\n  </p>\r\n  \r\n  <img width=\"250\" alt=\"Angular Logo\" src=\"assets/img/Logo_UNICEN.gif\">\r\n</div>\r\n\r\n<div>\r\n  <p class=\"serif\">\r\n    Cantidad de Procesadores a Utilizar:\r\n  </p>\r\n    <input type=\"number\" id=\"cantProc\" class=\"form-control\" min=\"0\" name=\"cantProc\" placeholder=\"Cantidad de procesadores elegidos\" >\r\n  </div>\r\n\r\n<div style=\"text-align:left\">\r\n<p class=\"serif\">\r\n    Seleccione los patrones  utilizar:\r\n</p>\r\n  <h4 id=\"algoritmos\">\r\n  <input id=\"p_shuffle\" type=\"button\" class=\"btn btn-info button\" value=\"Perfect Shufle\">\r\n  <input id= \"bit_reversal\" type=\"button\" class=\"btn btn-info button\" value=\"Bit Reversal\">\r\n  <input id= \"butterfly\" type=\"button\" class=\"btn btn-info button\" value=\"Butterfly\">\r\n  <input id= \"barrel\" type=\"button\" class=\"btn btn-info button\" value=\"Barrel\">\r\n  <input id= \"exchange\" type=\"button\" class=\"btn btn-info button\" value=\"Exchange\">\r\n  <input id= \"baseline\" type=\"button\" class=\"btn btn-info button\" value=\"Baseline\">\r\n  </h4>\r\n  \r\n\r\n<div class=\"input-group mb-3\" id=\"input_k\" style='display:none'>\r\n  Seleccione el K o I que desea utilizar para el patron elegido:\r\n  <input id= \"real_value\" type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"valor a utilizar\" aria-label=\"Valor de k o i que desea utilizar\" aria-describedby=\"basic-addon2\">\r\n  <div class=\"input-group-append\">\r\n    <button id=\"confirm_input\" class=\"btn btn-outline-secondary\" type=\"button\">Confirmar</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n  <h5>\r\n  <input id= \"start\" type=\"button\" class=\"btn btn-info button\" value=\"START\">\r\n\r\n  <input id= \"restart\" type=\"button\" class=\"btn btn-info button\" value=\"RESET\">\r\n\r\n  </h5>\r\n  \r\n</div>\r\n\r\n\r\n\r\n\t<style type=\"text/css\">\r\n\t\tbutton{\r\n\t\t    background-color: #1C738D;\r\n\t\t    border: none;\r\n\t\t    color: white;\r\n\t\t    /*padding: 14px 40px;*/\r\n\t\t    text-align: center;\r\n\t\t    text-decoration: none;\r\n\t\t    display: inline-block;\r\n\t\t    font-size: 16px;\r\n\t\t    margin: 4px 2px;\r\n\t\t    cursor: pointer;\r\n\t\t    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n\t\t}\r\n\t\t.button-cargar {padding: 14px 40px;}\r\n\t\tbody { /* background-color: #ECE8D6;*/}\r\n\t\tli {padding: 3px; border: 1px solid #1c738d6b; list-style: none;}\r\n\t</style>\r\n<div style=\"margin-bottom: 20px;\">\r\n\t<button id=\"cargar\" class=\"btn btn-info button\">DIBUJAR ETAPAS</button>\r\n</div>\r\n<div id=\"titles-etapas\">\r\n</div>\r\n<div id=\"total\" style=\"display: -webkit-box;\">\r\n\t<div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"col-sm-10\">\r\n  <h2>\r\n  Link a la pagina de la catedra:\r\n  <a target=\"_blank\" rel=\"noopener\" href=\"http://arqui2.alumnos.exa.unicen.edu.ar/\">Arquitectura de Computadoras y Técnicas Digitales</a></h2>\r\n\r\n\r\n  <div class=\"alert alert-info\">\r\n    <strong>Info: </strong> Desarrollado por los alumnos Suarez Elvis y Moris Eugenia.\r\n  </div>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var patrones = [];
var input_extra = [];
var list_output = [];
var cant_proc;
var contador = 1;
var cant_button;
var etapas;
var lista;
var cantidad_bits;
var dict = {
    max_perfect: cant_proc,
    max_reversal: cantidad_bits,
    max_butterfly: cantidad_bits,
    max_exchage: cantidad_bits,
    max_barrel: cant_proc,
    max_baseline: cant_proc - 1,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Simulador de Interconexiones';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

function validarEntero(valor) {
    //intento convertir a entero. 
    //si era un entero no le afecta, si no lo era lo intenta convertir 
    valor = parseInt(valor);
    //Compruebo si es un valor numérico 
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia 
        return false;
    }
    else {
        //En caso contrario (Si era un número) devuelvo el valor 
        return true;
    }
}
function verificar_limite(valor, max) {
    var valor_aux = parseInt(valor);
    var max_aux = parseInt(max);
    if ((valor_aux <= max_aux) && (valor_aux >= 0)) {
        return true;
    }
    else {
        return false;
    }
}
function showAlerts() {
    //document.getElementById('bootstrap-alert').style.display = 'block';
    //setTimeout(function(){document.getElementById('bootstrap-alert').style.display = 'none'}, 1700);
    //THIS IS JS ALERT
    //alert('success! (JS alert)');
}
function get_input(max) {
    //Se pide y se guarda el input necesario para el procesamiento
    deshabilitar_botones();
    //poner alert con lo que se pide?
    document.getElementById('input_k').style.display = 'block';
    document.getElementById('confirm_input').onclick = function (evt) {
        deshabilitar_botones(false);
        var new_input = jquery__WEBPACK_IMPORTED_MODULE_2__("#real_value").val();
        if (validarEntero(new_input) == false) {
            alert("El valor debe ser un numero positivo");
        }
        else if (verificar_limite(new_input, max) == false) {
            alert("El valor debe encontrarse entre los limites 0 y " + max);
        }
        else {
            input_extra.push(new_input);
            document.getElementById('input_k').style.display = 'none';
        }
    };
}
function deshabilitar_botones(desabilitar) {
    if (desabilitar === void 0) { desabilitar = true; }
    if (desabilitar) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#p_shuffle').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#bit_reversal').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#butterfly').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#barrel').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#exchange').prop('disabled', true);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#baseline').prop('disabled', true);
    }
    else {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#p_shuffle').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#bit_reversal').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#butterfly').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#barrel').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#exchange').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#baseline').prop('disabled', false);
    }
}
window.onload = function () {
    //primero deshabilito los botones
    jquery__WEBPACK_IMPORTED_MODULE_2__('#start').prop('disabled', true);
    jquery__WEBPACK_IMPORTED_MODULE_2__("#start").css("background-color", "grey");
    jquery__WEBPACK_IMPORTED_MODULE_2__('#cargar').prop('disabled', true); //deshabilito boton start
    jquery__WEBPACK_IMPORTED_MODULE_2__("#cargar").css("background-color", "grey"); //coloreo fondo en gris para denotar deshabilitacion
    cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
    var cantidad_bits_bin = (parseInt(cant_proc)).toString(2); // CAMBIO A PEDIR LOS BITS
    cantidad_bits = (cantidad_bits_bin.length) - 1;
    document.getElementById("p_shuffle").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            patrones.push(0);
            cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
            get_input(cant_proc);
            verificarBoton();
            agregarTitulo("p_shuffle");
        }
    };
    jQuery("#cantProc").change(function () {
        verificarBoton();
    });
    document.getElementById("bit_reversal").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            input_extra.push(-1); // no lleva valor extra
            patrones.push(1);
            //cant_proc = $("#cantProc").val();
            verificarBoton();
            agregarTitulo("bit_reversal");
        }
    };
    document.getElementById("butterfly").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            patrones.push(2);
            cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
            var cantidad_bits_bin = (parseInt(cant_proc)).toString(2); // CAMBIO A PEDIR LOS BITS
            cantidad_bits = (cantidad_bits_bin.length) - 1;
            get_input(cantidad_bits);
            verificarBoton();
            agregarTitulo("butterfly");
        }
    };
    document.getElementById("exchange").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            patrones.push(3);
            cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
            var cantidad_bits_bin = (parseInt(cant_proc)).toString(2); // CAMBIO A PEDIR LOS BITS
            cantidad_bits = (cantidad_bits_bin.length) - 1;
            get_input(cantidad_bits);
            verificarBoton();
            agregarTitulo("exchange");
        }
    };
    document.getElementById("barrel").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            patrones.push(4);
            cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
            get_input(cant_proc);
            verificarBoton();
            agregarTitulo("barrel");
        }
    };
    document.getElementById("baseline").onclick = function (evt) {
        if (document.getElementById("original") != undefined) {
            alert("Debe reiniciar primero.");
        }
        else {
            patrones.push(5);
            cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
            var cantidad_bits_bin = (parseInt(cant_proc)).toString(2); // CAMBIO A PEDIR LOS BITS
            cantidad_bits = (cantidad_bits_bin.length) - 1;
            get_input(cantidad_bits - 1);
            verificarBoton();
            agregarTitulo("baseline");
        }
    };
    document.getElementById("start").onclick = function (evt) {
        calculatePatrons(cant_proc);
        showAlerts();
        jquery__WEBPACK_IMPORTED_MODULE_2__('#cargar').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__("#cargar").css("background-color", "#1C738D");
    };
    document.getElementById("restart").onclick = function (evt) {
        restart_values();
    };
    document.getElementById("cargar").onclick = function (evt) {
        cargar();
        document.getElementById("0-0").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-0"));
        };
        document.getElementById("0-1").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-1"));
        };
        document.getElementById("0-2").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-2"));
        };
        document.getElementById("0-3").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-3"));
        };
        document.getElementById("0-4").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-4"));
        };
        document.getElementById("0-5").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-5"));
        };
        document.getElementById("0-6").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-6"));
        };
        document.getElementById("0-7").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-7"));
        };
        document.getElementById("0-8").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-8"));
        };
        document.getElementById("0-9").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-9"));
        };
        document.getElementById("0-10").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-10"));
        };
        document.getElementById("0-11").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-11"));
        };
        document.getElementById("0-12").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-12"));
        };
        document.getElementById("0-13").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-13"));
        };
        document.getElementById("0-14").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-14"));
        };
        document.getElementById("0-15").onclick = function (evt) {
            funcion_dibujar(document.getElementById("0-15"));
        };
    };
};
function restart_values() {
    //vacio todas las variables
    patrones = [];
    input_extra = [];
    list_output = [];
    cant_proc = undefined;
    jquery__WEBPACK_IMPORTED_MODULE_2__('#cantProc').val(''); //vacio cuadro de cantidad de procesos
    jquery__WEBPACK_IMPORTED_MODULE_2__('#start').prop('disabled', true); //deshabilito boton start
    jquery__WEBPACK_IMPORTED_MODULE_2__("#start").css("background-color", "grey"); //coloreo fondo en gris para denotar deshabilitacion
    jquery__WEBPACK_IMPORTED_MODULE_2__('#cargar').prop('disabled', true); //deshabilito boton start
    jquery__WEBPACK_IMPORTED_MODULE_2__("#cargar").css("background-color", "grey"); //coloreo fondo en gris para denotar deshabilitacion
    document.getElementById("total").innerHTML = "";
    document.getElementById("titles-etapas").innerHTML = "";
    document.getElementById("titles-etapas").className = "";
    document.getElementById('input_k').style.display = 'none';
    deshabilitar_botones(false);
}
function verificarBoton() {
    if ((patrones.length > 0) && ((jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val() != undefined) && (jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val() != ""))) {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#start').prop('disabled', false);
        jquery__WEBPACK_IMPORTED_MODULE_2__("#start").css("background-color", "#1C738D");
        cant_proc = jquery__WEBPACK_IMPORTED_MODULE_2__("#cantProc").val();
    }
}
function agregarTitulo($title) {
    switch ($title) {
        case "p_shuffle":
            $title = "Perfect Shufle";
            break;
        case "bit_reversal":
            $title = "Bit Reversal";
            break;
        case "butterfly":
            $title = "Butterfly";
            break;
        case "barrel":
            $title = "Barrel";
            break;
        case "exchange":
            $title = "Exchange";
            break;
        case "baseline":
            $title = "Baseline";
            break;
        default:
            $title = "Error";
            break;
    }
    var caracteres = $title.length;
    var pixeles = parseInt(caracteres) + 45;
    var add = document.getElementById("titles-etapas").innerHTML;
    var elemento = document.getElementById("titles-etapas");
    elemento.className = "title-etapa";
    add = add + '<h4 style="color: #1c738d; margin-right:' + pixeles + 'px;">' + $title + ' -- > </h4>';
    document.getElementById("titles-etapas").innerHTML = add;
}
function generate_input(cantProcesadores) {
    var input = [];
    var cant = 0;
    for (var i = 0; i < cantProcesadores; i++) {
        input.push(i);
    }
    return input;
}
function calculatePatrons(cantidad_procesadores) {
    var cantidad_bits_bin = (parseInt(cantidad_procesadores)).toString(2); // CAMBIO A PEDIR LOS BITS
    cantidad_bits = (cantidad_bits_bin.length) - 1;
    var continuar = false;
    if (patrones.length != 0) {
        continuar = true;
    }
    else {
        alert("No quedaron mas patrones");
    }
    while (continuar) {
        var x = patrones.shift();
        switch (x) {
            case 0:
                // codigo correspondiente a perfect shuflle
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = perfect_shuffle(input, cantidad_bits, extra_value);
                console.log(output);
                list_output.push(output);
                break;
            case 1:
                // codigo correspondiente a bit reversal
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = bit_reversal(input, cantidad_bits);
                console.log(output);
                list_output.push(output);
                break;
            case 2:
                // codigo correspondiente a butterfly
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = butterfly(input, cantidad_bits, extra_value);
                console.log(output);
                list_output.push(output);
                break;
            case 3:
                // codigo correspondiente a exchange
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = exchange(input, cantidad_bits, extra_value);
                console.log(output);
                list_output.push(output);
                break;
            case 4:
                // codigo correspondiente a barrel
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = barrel(input, cantidad_bits, extra_value);
                console.log(output);
                list_output.push(output);
                break;
            case 5:
                // codigo correspondiente a baseline
                var extra_value = input_extra.shift();
                var input = generate_input(cantidad_procesadores);
                var output = baseline(input, cantidad_bits, extra_value);
                console.log(output);
                list_output.push(output);
                break;
            default:
                var continuar = false;
                patrones = [];
                break;
        }
    }
}
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}
function baseline(input, processors, k) {
    var size = input.length;
    var lista = [];
    var zeros = [];
    var lim = processors - parseInt(k) - 1;
    for (j = 0; j < processors; j++) {
        zeros.push("0");
    }
    //convierto la lista de decimales en lista de valores binarios
    for (i = 0; i < size; i++) {
        var valor = input.shift();
        var output_i = (valor >>> 0).toString(2); //paso los valores a bianrios
        var output_arr = output_i.split('');
        output_arr = zeros.concat(output_arr);
        var output_arr2 = output_arr.slice(-processors, output_arr.length); //completo con cero los valores binarios para que tengan la misma cantidad que proccesors
        var out = output_arr2.toString();
        out = out.replace(/,/g, '');
        lista.push(out);
    }
    if (k <= processors) {
        var resultado = [];
        for (var j = 0; j <= lista.length - 1; j++) {
            // desde el ultimo elemento tantas veces como i haya
            var new_procesador = '';
            var ultimovalor = lista[j][lista[j].length - 1];
            var parte_alta = lista[j].substr(0, lim);
            for (var i = lim; i < processors - 1; i++) {
                new_procesador = new_procesador + lista[j][i];
            }
            new_procesador = ultimovalor + new_procesador;
            new_procesador = parte_alta + new_procesador;
            var dec = bin2dec(new_procesador);
            resultado.push(dec);
        }
        return resultado;
    }
    else {
        alert("K más grande que los bits.");
    }
}
/*function barrel(input,processor,k){
    var output=[];
    var ancho = input.length
    for (var i=0; i<k;i++){
        output.push(input[ancho-k+i]); //obtengo los valores de atras / debo mantener el orden
    }
    var total = input.length - k;
    for (var j=0; j<total; j++){
        output.push(input.shift());//elimino el primer elemento del arreglo
    }
    console.log(output);
    return output;
}*/
function barrel(input, processor, k) {
    var output = [];
    var ancho = input.length;
    for (var i = k; i < ancho; i++) {
        output.push(input[i]);
    }
    for (var j = 0; j < k; j++) {
        output.push(input.shift()); //elimino el primer elemento del arreglo
    }
    console.log(output);
    return output;
}
function exchange(input, processors, k) {
    k = parseInt(k);
    var size = input.length;
    var output = [];
    var zeros = [];
    for (j = 0; j < processors; j++) {
        zeros.push("0");
    }
    k = processors - (k + 1);
    var i = 0;
    for (i = 0; i < size; i++) {
        var valor = input.shift(); //obtengo el primer valor de input
        var output_i = (valor >>> 0).toString(2); //paso los valores a bianrios
        var output_arr = output_i.split('');
        output_arr = zeros.concat(output_arr);
        output_arr = output_arr.slice(-processors, output_arr.length); //completo con cero los valores binarios para que tengan la misma cantidad que proccesors
        var out = output_arr.toString();
        out = out.replace(/,/g, '');
        output_i = out;
        var new_procesador = '';
        for (var j = 0; j <= output_i.length - 1; j++) {
            if (j == k) {
                console.log("Entra");
                if (output_i[j] === '0') {
                    new_procesador = new_procesador + '1';
                }
                else {
                    new_procesador = new_procesador + '0';
                }
            }
            else {
                new_procesador = new_procesador + output_i[j];
            }
        }
        var out = new_procesador.toString();
        out = out.replace(/,/g, '');
        var dec = bin2dec(out);
        output.push(dec);
        //output.push(new_procesador);
    }
    return output;
}
function butterfly(input, processors, xi) {
    var xj = (processors - 1) - xi;
    ;
    var output = [];
    var zeros = [];
    var j = 0;
    for (j = 0; j < processors; j++) {
        zeros.push("0");
    }
    var size = input.length;
    var i = 0;
    for (i = 0; i < size; i++) {
        var valor = input.shift();
        var output_i = (valor >>> 0).toString(2);
        var output_arr = output_i.split('');
        output_arr = zeros.concat(output_arr);
        output_arr = output_arr.slice(-processors, output_arr.length);
        var output_j = [];
        var length = output_arr.length;
        var Xi = output_arr[xi];
        var Xj = output_arr[xj];
        for (j = 0; j < length; j++) {
            if (j == xi) {
                output_j.push(Xj);
            }
            else if (j == xj) {
                output_j.push(Xi);
            }
            else {
                output_j.push(output_arr[j]);
            }
        }
        var out = output_j.toString();
        out = out.replace(/,/g, '');
        var dec = bin2dec(out);
        output.push(dec);
    }
    return output;
}
function bit_reversal(input, processors) {
    var output = [];
    var zeros = [];
    var j = 0;
    for (j = 0; j < processors; j++) {
        zeros.push("0");
    }
    var size = input.length;
    var i = 0;
    for (i = 0; i < size; i++) {
        var valor = input.shift();
        var output_i = (valor >>> 0).toString(2);
        var output_arr = output_i.split('');
        output_arr = zeros.concat(output_arr);
        output_arr = output_arr.slice(-processors, output_arr.length);
        var output_j = [];
        var length_arr = output_arr.length;
        for (j = 0; j < output_arr.length; j++) {
            output_j.unshift(output_arr[j]);
        }
        var out = output_j.toString();
        out = out.replace(/,/g, '');
        var dec = bin2dec(out);
        output.push(dec);
        output_arr = [];
        output_j = [];
        out = '';
    }
    return output;
}
function perfect_shuffle(input, processors, k) {
    var sh = Math.round(Math.log2(parseInt(k)));
    var output = [];
    var zeros = [];
    for (var j = 0; j < processors; j++) {
        zeros.push("0");
    }
    var size = input.length;
    for (var i = 0; i < size; i++) {
        var valor = input.shift();
        var output_i = (valor >>> 0).toString(2);
        var output_arr = output_i.split('');
        output_arr = zeros.concat(output_arr);
        output_arr = output_arr.slice(-processors, output_arr.length);
        for (j = 0; j < sh; j++) {
            var last_value = output_arr[0];
            output_arr.shift();
            output_arr.push(last_value);
        }
        var out = output_arr.toString();
        out = out.replace(/,/g, '');
        var dec = bin2dec(out);
        output.push(dec);
        output_arr = [];
        out = '';
    }
    return output;
}
function obtener_next_id(current_id) {
    var next = "";
    for (var i = 2; i < current_id.length; i++) {
        next = next + current_id[i];
    }
    return next;
}
// La función recibe como parametro el mismo boton que la invoca
/*
La idea es que los ID's de los botones sean a su vez la posicion de la salida de cada etapa representado
en la lista list_output
*/
function funcion_dibujar(boton, color_dibujo, id_segundo) {
    if (color_dibujo === void 0) { color_dibujo = '#f00'; }
    if (id_segundo === void 0) { id_segundo = ''; }
    var first_boton_id = boton.id;
    var one = true;
    var current_id = boton.id; // Boton invocador
    var next_id = "";
    var first_list = current_id[0]; // Primer valor del id del boton indica la lista de la siguiente etapa
    var second_list = obtener_next_id(current_id); // Segundo valor del id del boton indica la posicion en la lista, que es el siguiente Boton
    var zona_id = "zona-1";
    while (first_list < etapas) {
        if (!one) { // Me identifica si estoy dibujando en la primera etapa o en las siguientes
            current_id = next_id;
            second_list = obtener_next_id(current_id);
            var pos_zona = parseInt(first_list) + 1;
            zona_id = "zona-" + pos_zona; // La zona es la etiqueta html que dibuja las lineas
            contador++;
        }
        else {
            one = false;
        }
        next_id = contador + "-" + lista[first_list][second_list]; // El contador es un seguimiento de la etapa hacia la cual me muevo
        var first = document.getElementById(current_id);
        var second = document.getElementById(next_id);
        var dibujo = document.getElementById(zona_id);
        if (document.getElementById(first_boton_id + current_id + next_id + id_segundo) != undefined) { // Si está definida la linea, puedo ocultarla o volver a dibujarla
            if (jQuery("#" + first_boton_id + current_id + next_id + id_segundo).css("visibility") == "hidden") {
                jQuery("#" + first_boton_id + current_id + next_id + id_segundo).css("visibility", "visible");
            }
            else {
                jQuery("#" + first_boton_id + current_id + next_id + id_segundo).css("visibility", "hidden");
            }
        }
        else {
            if (cantidad_bits > 3) {
                var rect = jQuery("#" + current_id).position();
                var rect2 = jQuery("#" + next_id).position();
                var rect3 = jQuery("#" + zona_id).position();
                var more = document.getElementById(zona_id).innerHTML;
                more = more + '<line id="' + first_boton_id + current_id + next_id + id_segundo + '" x1="' + (rect.left - rect3.left + 56) + '" y1="' + (rect.top - rect3.top) + '" x2="' + (rect2.left - rect3.left) + '" y2="' + (rect2.top - rect3.top) + '" style="visibility: visible; stroke:' + color_dibujo + '; stroke-width:4px"></line>';
                document.getElementById(zona_id).innerHTML = more;
            }
            else {
                var rect = jQuery("#" + current_id).position();
                var rect2 = jQuery("#" + next_id).position();
                var rect3 = jQuery("#" + zona_id).position();
                var more = document.getElementById(zona_id).innerHTML;
                more = more + '<line id="' + first_boton_id + current_id + next_id + id_segundo + '" x1="' + (rect.left - rect3.left + 34) + '" y1="' + (rect.top - rect3.top) + '" x2="' + (rect2.left - rect3.left) + '" y2="' + (rect2.top - rect3.top) + '" style="visibility: visible; stroke:' + color_dibujo + '; stroke-width:4px"></line>';
                document.getElementById(zona_id).innerHTML = more;
            }
        }
        first_list++;
    }
    contador = 1;
}
/*
Esta funcion lo que realiza es mostrar el resultado de todas las trazas de acuerdo a los algoritmos seleccionados
*/
function funcion_dibujar_todo() {
    for (var i = 0; i < cant_button; i++) {
        var boton = document.getElementById("0-" + i);
        funcion_dibujar(boton, '#c0c0c0', '-2');
    }
}
// Pasa de decimal a binario
function to_binary(num) {
    var binary = num.toString(2);
    while (binary.length < cantidad_bits) {
        binary = '0' + binary;
    }
    return binary;
}
// Inicializa las etapas
function cargar() {
    lista = list_output;
    etapas = lista.length;
    cant_button = lista[0].length;
    get_ul_initial();
    get_ul_2();
    funcion_dibujar_todo();
}
// Carga los botones de todas las etapas
function get_ul_2() {
    for (var i = 1; i <= etapas; i++) {
        var ultima_lista = document.getElementById("total").innerHTML;
        if (cantidad_bits > 3) {
            var lista_html = '<svg id="zona-' + i + '" height="672" width="150" style="margin-top: 16px;"></svg>';
        }
        else {
            var lista_html = '<svg id="zona-' + i + '" height="337" width="150" style="margin-top: 16px;"></svg>';
        }
        lista_html = lista_html + '<div style="margin-left: -40px;">';
        lista_html = lista_html + '<ul id="original">';
        var j = 0;
        while (j < cant_button) {
            lista_html = lista_html + '<li style="padding: 3px; border: 1px solid #1c738d6b; list-style: none;"><button class="btn btn-info" id="' + i + '-' + j + '" style="padding: 1px 6px; background-color: #1C738D;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);">' + to_binary(j) + '</button></li>';
            j++;
        }
        lista_html = lista_html + '</ul>';
        lista_html = lista_html + '</div>';
        document.getElementById("total").innerHTML = ultima_lista + lista_html;
    }
}
// Carga los botones iniciales de acuerdo al numero de bits
function get_ul_initial() {
    for (var i = 0; i < 1; i++) {
        var ultima_lista = document.getElementById("total").innerHTML;
        var lista_html = '<div>';
        lista_html = lista_html + '<ul id="original">';
        var j = 0;
        while (j < cant_button) {
            lista_html = lista_html + '<li style="padding: 3px; border: 1px solid #1c738d6b; list-style: none;"><button class="btn btn-info button-lineas" id="' + i + '-' + j + '" (click)="funcion_dibujar(this)" style="padding: 1px 6px; background-color: #1C738D;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);">' + to_binary(j) + '</button></li>';
            j++;
        }
        lista_html = lista_html + '</ul>';
        lista_html = lista_html + '</div>';
        document.getElementById("total").innerHTML = ultima_lista + lista_html;
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USUARIO\Desktop\proyecto-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map