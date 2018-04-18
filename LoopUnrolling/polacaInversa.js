/**
 * 
 */


var listaSentencias=[];
//var listaAssembler=[];
var registros=[];

var arr1;//arreglo declarado
var arr2;//arreglo declarado2
	
function polacaInversa(listaS){

	this.listaSentencias=listaS;
	registros=["O","O","O","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L"];
}

function assembler(arr1,arr2){
	
	this.arr1=arr1;
	this.arr2=arr2;
	
	//Por cada sentencia, genera el assembler y lo mete en ListaAssembler
	for(var i = 0; i < listaSentencias.length; i++){
		getAssembler(listaSentencias[i]);	
	}

	return listaAssembler;
}

function presedencias(Op){
	if (Op=='*'|| Op=='/')
		return 3;
	else 
		return 2;	
}



function armarPolaca(destino,operandos,operadores){
	var polaca=[destino];	
	var pilaOperadores = [];
	var indiceOperador;
	var indiceOperando;
	
	indiceOperador=0;
	indiceOperando=0;
	
	//stack.push("Elemento1");
	//console.log(stack[0]);
	//console.log(operandos[0]);
	//console.log(operandos.length);
	//console.log(operadores.length);
	var iteraciones=(operandos.length+operadores.length);
	
	for (i = 1; i <= iteraciones; i++) { 
	    if (i % 2 == 0){
	    	//consumir operador
	    	if (pilaOperadores.length==0){
	    		pilaOperadores.push(operadores[indiceOperador]);
	    	}
	    	else{
	    		if (presedencias(operadores[indiceOperador])>=presedencias(pilaOperadores[pilaOperadores.length-1])){
	    			//apilo
	    			pilaOperadores.push(operadores[indiceOperador]);

	    		}else{
	    			//hay que desapilar operadores
	    			while ((pilaOperadores.length!=0)&&((presedencias(operadores[indiceOperador])<presedencias(pilaOperadores[pilaOperadores.length-1])))){
	    				polaca.push(pilaOperadores[pilaOperadores.length-1]);
  						pilaOperadores.pop();
	    			}
	    			pilaOperadores.push(operadores[indiceOperador]);
	    		}
	    	}
	    	
	    	indiceOperador++;
	    }else{
	    	//consumir operando
	    	polaca.push(operandos[indiceOperando]);
	    	indiceOperando++;
	    }
	    	
	}
	while (pilaOperadores.length!=0){
		polaca.push(pilaOperadores[pilaOperadores.length-1]);
		pilaOperadores.pop();
	}
	
	
	polaca.push("=");

	//sacar impresiones de prueba
	//for(i = 0; i < polaca.length; i++){
	//	console.log(polaca[i]);
	//}
	//console.log("FUNCIONA");
	
	return polaca;
}

function getAssembler(sentencia){

	polaca=armarPolaca(sentencia[1],sentencia[2],sentencia[3]);
	
//	for(i = 0; i < polaca.length; i++){//SACAAAAR!!!
//		console.log(polaca[i]);
//	}
	
	//genero el assembler
	var pila= [];
	
	for (var i=0; i< polaca.length; i++){
		
		
		if ((polaca[i]!= '*')&&(polaca[i]!= '/')&&(polaca[i]!= '+')&&(polaca[i]!= '-')&&(polaca[i]!= '=')){
			
			pila.push(polaca[i]);
			
		}else{
			var op;
			
			if (polaca[i]== '='){
				op=codigoAssembler("ST",pila[pila.length-2],pila[pila.length-1]);
			}
			if (polaca[i]== '*'){
				op=codigoAssembler("MUL",pila[pila.length-2],pila[pila.length-1]);
			}
			if (polaca[i]== '/'){
				op=(codigoAssembler("DIV",pila[pila.length-2],pila[pila.length-1]));
			}
			if (polaca[i]== '+'){
				op=(codigoAssembler("ADD",pila[pila.length-2],pila[pila.length-1]));
			}
			if (polaca[i]== '-'){
				op=(codigoAssembler("SUB",pila[pila.length-2],pila[pila.length-1]));
			}
			pila.pop();
			pila.pop();
			pila.push(op);
		}	
		
	}

	//return listaAssembler;
}

function getRegistro(){
	for (var i=3; i<23; i++){
		if (registros[i]=="L"){
			registros[i]="O";
			return ("$R"+i);
		}
	}
		
}


function transformarOperandoArreglo(operando){
	
	var array=operando.split("[");
	var nombre=array[0];
	
	if (array.length>1){
	if (arr1.name==nombre){
		return "0($R1)";		
	}
	if (arr2.name==nombre){
		return "0($R2)";		
	}}else
		return operando;
	
}

function liberarRegistro(reg){
	var indice=reg.charAt(2);
	var i = Number(indice);
	registros[i]="L";
}

function codigoAssembler(operacion,op1,op2){
	
	var linea="";
	var c1=op1.charAt(0);
	var c2=op2.charAt(0);
	var ascc1=op1.charCodeAt(0);
	var ascc2=op2.charCodeAt(0);
	
	if (operacion=="ST"){
		if (!(c2=="$")){//op2 es un numero
			var reg=getRegistro();
			listaAssembler.push("LD "+reg+","+transformarOperandoArreglo(op2));
			listaAssembler.push("ST "+transformarOperandoArreglo(op1)+","+reg);
			return "";
		}else{
			
			listaAssembler.push("ST "+transformarOperandoArreglo(op1)+","+op2);
			return "";
		}
	}
	
	if ((c1=="$")&&(c2=="$")){//reg reg
		//liberarRegistro(op2);
		listaAssembler.push(operacion+ " "+op1+","+op1+","+op2);
		return op1;
	}
	
	if ((c1=="$")&&((ascc2<48)||(ascc2>57))){//reg var
		var reg=getRegistro();
		listaAssembler.push("LD "+reg+","+transformarOperandoArreglo(op2));
		listaAssembler.push(operacion+ " "+op1+","+op1+","+reg);
		return op1;
	}
	
	if ((c1=="$")&&((ascc2>=48)&&(ascc2<=57))){//reg numero
		listaAssembler.push(operacion+ " "+op1+","+op1+","+op2);
		return op1;
	}
	
	if (((ascc1<48)||(ascc1>57))&&(c2=="$")){//var reg
		var reg=getRegistro();
		listaAssembler.push("LD "+reg+","+transformarOperandoArreglo(op1));
		listaAssembler.push(operacion+ " "+op2+","+reg+","+op2);
		return op2;
		
	}
	if (((ascc1<48)||(ascc1>57))&&((ascc2<48)||(ascc2>57))){//var var
		var reg1=getRegistro();
		var reg2=getRegistro();
		listaAssembler.push("LD "+reg1+","+transformarOperandoArreglo(op1));
		listaAssembler.push("LD "+reg2+","+transformarOperandoArreglo(op2));
		listaAssembler.push(operacion+ " "+reg1+","+reg1+","+reg2);
		return reg1;
	}
	if (((ascc1<48)||(ascc1>57))&&((ascc2>=48)&&(ascc2<=57))){//var num
		var reg=getRegistro();
		listaAssembler.push("LD "+reg+","+transformarOperandoArreglo(op1));
		listaAssembler.push(operacion+ " "+reg+","+reg+","+op2);
		return reg;
	}
	if (((ascc1>=48)&&(ascc1<=57))&&(c2=="$")){//num reg
		
		listaAssembler.push(operacion+ " "+op2+","+op1+","+op2);
		return op2;
		
	}
	if (((ascc1>=48)&&(ascc1<=57))&&((ascc2<48)||(ascc2>57))){//num var
		var reg=getRegistro();
		listaAssembler.push("LD "+reg+","+transformarOperandoArreglo(op2));
		listaAssembler.push(operacion+ " "+reg+","+op1+","+reg);
		return reg;
	}
	if (((ascc1>=48)&&(ascc1<=57))&&((ascc2>=48)&&(ascc2<=57))){//num num
		var reg=getRegistro();
		listaAssembler.push(operacion+ " "+reg+","+op1+","+op2);
		return reg;
	}
	
}









