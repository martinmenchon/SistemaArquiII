/**
 * 
 */

// var lines= "for (i=0; i<= 500 ; i++) { \n A[i] = 250 + A[i] * 7; \n B[i] =
// B[i] * 9 + 100; \n }"
// var lines ="for (i=0; i<= 500 ; i++) { \n A[i] = $R1 + $R2;}"
// var lines= "double A[1000]; \nint B[1000]; \nfor (i = 1 ; i <= 1000 ; i++) {
// \n A[i] = A[i] * 5 + 3; \n B[i] = B[i] * 5 + A[i];}";
//var lines = "double A[1000]; \nint B[1000]; \nfor (i = 1 ; i <= 1000 ; i++) {\n A[i] = 5 - A[i]  ; \n A[i] = A[i] * B[i];}";

var listaAssembler = [];
var listaLoopUnrolling = [];

var arr1 = {
	name : "",
	tipo : "",
	lugarO : 0,
	long : 0
};
var arr2 = {
	name : "",
	tipo : "",
	lugarO : 0,
	long : 0
};

// 60 registros
var registrosCPU = [ "O", "O", "O", "L", "L", "L", "L", "L", "L", "L", "L", "L",
		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
		"L", "L", "L", "L", "L", "L", "L", "L", "L" ];

//this.instructions = [ {
this.instructions = [ {
	type : 'ADD',
	cycles : 1
}, {
	type : 'SUB',
	cycles : 1
}, {
	type : 'MUL',
	cycles : 1
}, {
	type : 'DIV',
	cycles : 1
}, {
	type : 'LD',
	cycles : 2
}, {
	type : 'ST',
	cycles : 1
}, {
	type : 'BNEZ',
	cycles : 2
} ];
this.desplazamiento = [ {
	type : 'ENTERO',
	lugares : 4
}, {
	type : 'DOUBLE',
	lugares : 8
} ];


//var sacar="";

//this.setCiclios = function(get) {
//	for ( var i in get) {
//		var operador = get[i][3];
//		var contador = 0;
//		for ( var j in operador) {
//			if (operador[j] == "+") {
//				contador = contador + Number(this.instructions[0].cycles);
//				console.log("SETcICLOS: " + contador);
//			}
//
//			else if (operador[j] == "-")
//				contador = contador + Number(this.instructions[1].cycles);
//			else if (operador[j] == "*")
//				contador = contador + Number(this.instructions[2].cycles);
//			else if (operador[j] == "/")
//				contador = contador + Number(this.instructions[3].cycles);
//		}
//		contador = contador + Number(this.instructions[4].cycles);
//		this.tiempoSentencia[i] = contador;
//	}
//};





function calcularCantidadCiclosTarda(lista) {
	var numCiclos = 0;
	var array;

	for (i = 1; i < lista.length; i++) {// SACAAAAR!!!
		array = lista[i].split(" ");

		for (j = 0; j < instructions.length; j++) {
			if (instructions[j].type == array[0]) {
				numCiclos += Number(instructions[j].cycles);
			}
		}
	}
	//console.log("numCiclos: "+numCiclos);
	return numCiclos;
}

function ayuda(){
	alert("El código aceptado es una adaptación del lenguaje C++.Se reconoce la sintaxis de la siguiente manera:\n \n"+

"-  Palabra reservada for en minúsculas.\n"+
"-  Variables  se deben escribir en mayúsculas (A[], X).\n"+
"-  El iterador se deben escribir en minúsculas (i).\n"+
"-  El tipo de un areglo solo puede ser int.\n"+
"-  Como máximo se puede definir un arreglo.\n\n"+
"Ejemplo de código reconocido:\n\n"+
"int A[100];\n"+
"for (i=1; i<= 100 ; i++) {\n"+		
	"A[i] = A[i] + 6;\n"+						
"}\n \n"); 						
						
}

function ejecutar(){
	//sacar = document.getElementsByName("sacar")[0].value;
	//sacar = document.getElementById("myTextarea").value;
	//sacar = document.getElementsByName("add")[0].value;
	//document.getElementById("textAreaSmallR").value=document.getElementsByName("add")[0].value;
	//console.log("ANDAAAAA: "+sacar);

	
	this.instructions[0].cycles = document.getElementsByName("add")[0].value;//Add
	this.instructions[1].cycles = document.getElementsByName("sub")[0].value;//Sub
	this.instructions[2].cycles = document.getElementsByName("mul")[0].value;//mul
	this.instructions[3].cycles = document.getElementsByName("div")[0].value;//div
	this.instructions[4].cycles = document.getElementsByName("ld")[0].value;//ld
	this.instructions[5].cycles = document.getElementsByName("st")[0].value;//st
	this.instructions[6].cycles = document.getElementsByName("bnez")[0].value;//bnez
	
	
	document.getElementById("textAreaSmallL").value=" ";
	
	var textoAss="";
	returnToken(document.getElementById("textAreaBig").value,document.getElementsByName("ufx")[0].value,document.getElementsByName("ufm")[0].value,document.getElementById("dispatchSelect").value);
	
//	for (i = 0; i < listaAssembler.length; i++) {
//		textoAss+=listaAssembler[i]+"\n";
//
//	}	
//	
//	document.getElementById("textAreaSmallL").value=textoAss;
//		
//	 textoAss="";
//	
//	
//	for (k = 0; k < listaLoopUnrolling.length; k++) {
//		textoAss+=listaLoopUnrolling[k]+"\n";
//
//	}
//	
//	document.getElementById("textAreaSmallR").value=textoAss;
	
	
	for (k = 0; k < listaLoopUnrolling.length; k++) {
		textoAss+=listaLoopUnrolling[k]+"\n";

	}

	document.getElementById("textAreaSmallR").value=textoAss;

	
 textoAss="";



for (i = 0; i < listaAssembler.length; i++) {
	textoAss+=listaAssembler[i]+"\n";

}	

document.getElementById("textAreaSmallL").value=textoAss;
	
}

function getNumCiclos(line) {
	// Busca en el for la cantidad de ciclos que hace
	var array = line.split("\n");
	var cont = 0;

	while ((array[cont].split(" "))[0] != "for") {
		cont++;
	}

	array = array[cont].split(";");

	var num = "";

	for (i = 0; i <= array[1].length; i++) {

		if ((array[1].charCodeAt(i) >= 48) && (array[1].charCodeAt(i) <= 57)) {
			num += array[1].charAt(i);
		}

	}

	var res = parseInt(num);
	return res;

}

function getFor(line) {
	var resultado = "";

	var array = line.split("\n");
	var cont = 0;

	while (array[cont].split(" ")[0] != "for") {
		cont++;
	}

	while (cont < array.length) {
		resultado += array[cont] + "\n";
		cont++;
	}

	return resultado;
}

function declareArray(lines, numCiclos) {// devuelve las lineas de assembler
											// para cargar
	// los indices
	var array = lines.split("\n");
	var linea1 = (array[0].split(" "))[0];
	var linea2 = (array[1].split(" "))[0];
	var indice = 0;
	var resultado = "";

	if ((linea1 == "int") || (linea1 == "INT")) {
		indice = numCiclos * 4;
		resultado += "LD $r1," + indice + "\n";
		arr1 = {
			name : (array[0].split(" ")[1]).split("[")[0],
			tipo : "int",
			lugarO : 4,
			long : numCiclos
		};
	}
	if ((linea1 == "double") || (linea1 == "DOUBLE")) {
		indice = numCiclos * 8;
		resultado += "LD $r1," + indice + "\n";
		arr1 = {
			name : (array[0].split(" ")[1]).split("[")[0],
			tipo : "double",
			lugarO : 8,
			long : numCiclos
		};
	}

	if ((linea2 == "int") || (linea2 == "INT")) {
		indice = indice + numCiclos * 4;
		resultado += "LD $r2," + indice + "\n";
		arr2 = {
			name : (array[1].split(" ")[1]).split("[")[0],
			tipo : "int",
			lugarO : 4,
			long : numCiclos
		};
	}
	if ((linea2 == "double") || (linea2 == "DOUBLE")) {
		indice = indice + numCiclos * 8;
		resultado += "LD $r2," + indice + "\n";
		arr2 = {
			name : (array[1].split(" ")[1]).split("[")[0],
			tipo : "double",
			lugarO : 8,
			long : numCiclos
		};
	}

	return resultado;
}

function getRegistroMain() {
	for (var i = 3; i < 61; i++) {
		if (registrosCPU[i] == "L") {
			registrosCPU[i] = "O";
			return ("$R" + i);
		}
	}

}
function getLugarQueOcupa(reg) {

	if (reg == 1) {
		return arr1.lugarO;
	}
	if (reg == 2) {
		return arr2.lugarO;
	}
}

function getRegLoopUnrolling(reg, mapReg) {

	var i = 0;
	while (mapReg[i] != reg) {
		i = i + 2;
	}

	return mapReg[i + 1].split("R")[1];

}

function loopUnrolling(cantUnrolling, listaAssembler,ufx,ufm,dispatch) {


	// los pares arrancando de 0 son el reg real y el impoar que le sigue el
	// registro libre q se le asigno
	var mapReg = [];
	
	var indice=0;
	var cortar=false;
	while (!cortar) {
		if (listaAssembler[indice] == "LAZO:"){
			cortar=true;
		}
		listaLoopUnrolling.push(listaAssembler[indice]);
		indice++;
	}
	
	
	
	for (i = indice; i < listaAssembler.length; i++) {// recorro cada linea
		
		var tamaño=listaAssembler[i].length-2;

		if (listaAssembler[i].charAt(tamaño)!="#") {// lineas que hay que repetir
			
			//chequeo si es BNEZ
			if (listaAssembler[i].split(" ")[0] == "BNEZ"){
				listaLoopUnrolling.push(listaAssembler[i]);
				
			}			
			
			// chequeo si es LOAD
			else if (listaAssembler[i].split(" ")[0] == "LD") {

				mapReg.push(listaAssembler[i].split(" ")[1].split(",")[0]);
				mapReg.push(getRegistroMain());

				// entero que hay que multiplicar
				var regLU = getRegLoopUnrolling(listaAssembler[i].split(" ")[1]
						.split(",")[0], mapReg);
				// veo si es una variable
				if (listaAssembler[i].split("$").length > 2) {
					var lugarOcupa = getLugarQueOcupa(listaAssembler[i]
							.split("$")[2].charAt(1));

					for (j = 0; j < cantUnrolling; j++) {
						listaLoopUnrolling.push("LD $R" + regLU + ","
								+ (0 - j * lugarOcupa) + "($"
								+ listaAssembler[i].split("$")[2]);
						registrosCPU[regLU] = "O";
						regLU++;
					}
				}
				else{
					for (j = 0; j < cantUnrolling; j++) {
						listaLoopUnrolling.push("LD $R" + regLU + ","
								+listaAssembler[i].split(",")[1]);
						registrosCPU[regLU] = "O";
						
						regLU++;
					}
				}
			}

			// chequeo si es STORE
			else if (listaAssembler[i].split(" ")[0] == "ST") {
				var regLU = getRegLoopUnrolling(
						listaAssembler[i].split(",")[1], mapReg);
				var lugarOcupa = getLugarQueOcupa(listaAssembler[i].split("R")[1]
						.charAt(0));

				for (j = 0; j < cantUnrolling; j++) {
					listaLoopUnrolling.push("ST " + (0 - j * lugarOcupa) + "("
							+ listaAssembler[i].split("(")[1].split(")")[0]
							+ "),$R" + regLU);
					regLU++;
				}
			}

			else {// todas las demas instrucciones
				var regO = 0;
				var regD = 0;
				
				if (listaAssembler[i].split(",")[1].charAt(0) == "$") {
					regO = getRegLoopUnrolling(listaAssembler[i].split(",")[1],
							mapReg);
				}
				if (listaAssembler[i].split(",")[2].charAt(0) == "$") {
					regD = getRegLoopUnrolling(listaAssembler[i].split(",")[2],
							mapReg);
				}

				if (listaAssembler[i].split(" ")[1].split(",")[0] == listaAssembler[i]
						.split(",")[1]) {// r1, r1, var
					if (regD == "") {
						for (j = 0; j < cantUnrolling; j++) {
							listaLoopUnrolling.push(listaAssembler[i].split(" ")[0]+ " "+ "$R"+ regO+ ",$R"+ regO+ ","+ listaAssembler[i].split(",")[2]);
							regO++;
						}

					} 
					else {
						for (j = 0; j < cantUnrolling; j++) {
							listaLoopUnrolling.push(listaAssembler[i]
									.split(" ")[0]
									+ " "
									+ "$R"
									+ regO
									+ ",$R"
									+ regO
									+ ",$R"
									+ regD);
							regO++;
							regD++;
						}

					}
				}

				if (listaAssembler[i].split(" ")[1].split(",")[0] == listaAssembler[i]
						.split(",")[2]) {// r1, var, r1
					for (j = 0; j < cantUnrolling; j++) {
						listaLoopUnrolling.push(listaAssembler[i].split(" ")[0]
								+ " " + "$R" + regD + ","
								+ listaAssembler[i].split(",")[1] + ",$R"
								+ regD);
						regD++;
					}

				}			
				
			}
		}
		else {//Sub con #
			listaLoopUnrolling.push(listaAssembler[i].split("#")[0]+"#"+listaAssembler[i].split("#")[1]*cantUnrolling);
		}
	

	}
	
	
	// LLAMA A EJECUCION PARA QUE HAGA EL CALCULO QUE QUIERE MARCELO
	
	console.log("arranca resEjecucion:");
	
	var resEjecucion=ejecucion(ufx,ufm,0,dispatch,listaLoopUnrolling);//3 es el Dispatcher hay que modificar	
	
	listaLoopUnrolling.push("\n \n Cantidad de Ciclos: "+ Math.ceil(resEjecucion * (numCiclos/cantUnrolling)));
	//listaLoopUnrolling.push("\n \n Cantidad de Ciclos: "+Math.ceil(calcularCantidadCiclosTarda(listaLoopUnrolling) * (numCiclos/cantUnrolling)));

}

function resetVar(){
	
	registrosCPU = [ "O", "O", "O", "L", "L", "L", "L", "L", "L", "L", "L", "L",
	         		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
	         		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
	         		"L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
	         		"L", "L", "L", "L", "L", "L", "L", "L", "L" ];
	listaAssembler = [];
	listaLoopUnrolling = [];
	
}


function returnToken(lines,ufx,ufm,dispatch) {
	

	var cantUnrolling=Math.max(ufx, ufm);

	inicializarEstructuras();
	resetVar();
	

	try {

		if (Gramatica.parse(getFor(lines))) {
			// $("#myModal").modal();
			
			var get = getSentencias();

			// Le paso a polacaInv los arreglos de operadores y operandos
			polacaInversa(get);

			numCiclos = getNumCiclos(lines);// PARSEA el for y obtiene el numero
											// de bucles

			listaAssembler.push(declareArray(lines, numCiclos));
			listaAssembler.push("LAZO:");// agrego etiqueta inicial

			assembler(arr1, arr2);

			if (arr1.name != "") {
				listaAssembler.push("SUB " + "$R1" + "," + "$R1" + "," + "#"
						+ arr1.lugarO);// agrego desplazamiento en memoria
			}
			if (arr2.name != "") {
				listaAssembler.push("SUB " + "$R2" + "," + "$R2" + "," + "#"
						+ arr2.lugarO);// agrego desplazamiento en memoria
			}

			listaAssembler.push("BNEZ " + "$R1" + "," + "LAZO");// agrego branch
			loopUnrolling(cantUnrolling, listaAssembler,ufx,ufm,dispatch);
			
			//TESTEAAAAAR
			var res1Ejecucion=ejecucion(ufx,ufm,0,1,listaAssembler);//3 es el Dispatcher hay que modificar
			listaAssembler.push("\n \n Cantidad de Ciclos : "+Math.ceil(res1Ejecucion * numCiclos));
			
			//era lo que andaba antes de TESTEAR
			//listaAssembler.push("\n \n Cantidad de Ciclos: "+(calcularCantidadCiclosTarda(listaAssembler) * numCiclos));
						

		}
	} catch (e) {
		this.error = String(e.message.replace("\t", " ").replace("on line",
				"en linea").replace("got", "se reconocio").replace("Expecting",
				"Se esperaba"));
		// $("#ModalError").modal();
	}
	return "TRANKI PAPA";
}