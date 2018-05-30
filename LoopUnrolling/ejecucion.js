/**
 * ACA SE SIMULA LA EJECUCION EN UN PROCESADOR SEGUN EL GRADO Y LAS UNIDADES FUNCIONALES
 * ejecucion es el constructor
 * calcular es el que hace el calculo de ciclos
 */

var unidadesAritmeticas=[];
var unidadesMemoria=[];
var unidadesMultifuncion=[];
var unidadesSalto=[];
var gradoParal;
var ciclos=0;




function ejecucion(cantAr,cantMem,cantMul,gradoP,listaLU){
	//gradoParal es el numero del dispatcher
	//cantX son las cantidad de unidades funcionales
	//listaLU es un arreglo con las instrucciones
	
	this.ciclos=0;
	this.unidadesAritmeticas=[];
	this.unidadesMemoria=[];
	this.unidadesMultifuncion=[];
	this.unidadesSalto=[];
	

	for (i = 0; i < cantAr; i++) {
		this.unidadesAritmeticas[i]=new unidadFuncional(2);
	}
	for (i = 0; i < cantMem; i++) {
		this.unidadesMemoria.push(new unidadFuncional(1));
	}
	for (i = 0; i < cantMul; i++) {
		this.unidadesMultifuncion.push(new unidadFuncional(3));
	}
	
	this.unidadesSalto.push(new unidadFuncional(4));
	

	//grado paralelismo

	this.gradoParal=gradoP;	

	console.log("LISTAAAA:"+listaLU);
	//listaLU a dispatcher
	dispatcher(listaLU,gradoP);
//	restarCicloUnidades();

	return calcular();
	
//	for (i = 0; i < listaLoopUnrolling.length; i++) {
//		console.log("LINEs: "+listaLoopUnrolling[i]);
//	}
	
	
	
}

function calcular(){
	
	var contador=0;
	var entro=false;
	var inst="";
	
	console.log("CALCULAAAAAAAAAR");
	console.log("CICLOS:"+this.ciclos);
	console.log("Contador:"+this.contador);
	
	
	while (finish()==false){//DISPACHER TENGA ELEMENTOS
		restarCicloUnidades();
		ciclos++;
		this.contador=this.gradoParal;
		entro=true;
		
		
		while ((entro==true)&&(this.contador>0)&&(finish()==false)){
			entro=false;
			inst=getInstruction();
			
//			if (ciclos==20){//sacar
//				return 0;
//			}
			
			if(inst=="ADD"){
				entro=meterInstruccionAr(instructions[0].cycles);
			}
			if(inst=="SUB"){
				entro=meterInstruccionAr(instructions[1].cycles);
			}
			if(inst=="MUL"){
				entro=meterInstruccionAr(instructions[2].cycles);
			}
			if(inst=="DIV"){
				entro=meterInstruccionAr(instructions[3].cycles);
			}
			if(inst=="LD"){
				entro=meterInstruccionMem(instructions[4].cycles);
			}
			if(inst=="ST"){
				entro=meterInstruccionMem(instructions[5].cycles);
			}
			
			if(inst=="BNEZ"){
				unidadesSalto[0].nuevaInstruccion(instructions[6].cycles);
				entro=true;
				console.log("mter.salto.num ciclo:"+ciclos+".lo que tarda:"+instructions[6].cycles);
				
				//entro=meterInstruccionMem(inst,instructions[6].cycles);//DESPUES VEMOS
			}
			
			this.contador--;
			
			if (entro==false){//no habia lugar
				retractar();
			}
		}
	}
	
	while(unidadesLibres()==false){

		ciclos++;
		restarCicloUnidades();
	}
	
	console.log("losciclos son VAMOOOOOS:"+(ciclos-1));
	return (ciclos-1);//cant ciclos -1...porq el ultimo ya esta terminado
}

function meterInstruccionMem(cic){
	
	for (i=0; i<unidadesMemoria.length; i++){
		if (this.unidadesMemoria[i].estaLibre()){
			this.unidadesMemoria[i].nuevaInstruccion(cic);
			console.log("mter.mem.num ciclo:"+ciclos+".lo que tarda:"+cic);
			return true;
		}
	}
	
	
	for (i=0; i<unidadesMultifuncion.length; i++){
		if (this.unidadesMultifuncion[i].estaLibre()){
			this.unidadesMultifuncion[i].nuevaInstruccion(cic);	
			console.log("Meter.mem.num ciclo:"+ciclos+".lo que tarda:"+cic);
			return true;
		}
	}
	return false;
}

function meterInstruccionAr(cic){

	for (i=0; i<unidadesAritmeticas.length; i++){
		if (this.unidadesAritmeticas[i].estaLibre()){
			this.unidadesAritmeticas[i].nuevaInstruccion(cic);	
			console.log("meter Arit.num ciclo:"+ciclos+".lo que tarda:"+cic);
			return true;
		}
	}
	
	for (i=0; i<unidadesMultifuncion.length; i++){
		if (this.unidadesMultifuncion[i].estaLibre()){
			this.unidadesMultifuncion[i].nuevaInstruccion(cic);	
			console.log("meter Arit.num ciclo:"+ciclos+".lo que tarda:"+cic);
			return true;
		}
	}
	return false;
}

function restarCicloUnidades(){
	
	for(i=0; i<unidadesAritmeticas.length; i++){
		this.unidadesAritmeticas[i].restarCiclo();
	}
	for(i=0; i<unidadesMemoria.length; i++){
		unidadesMemoria[i].restarCiclo();
	}
	for(i=0; i<unidadesMultifuncion.length; i++){
		unidadesMultifuncion[i].restarCiclo();
	}
	unidadesSalto[0].restarCiclo();
}

function unidadesLibres(){
	
	for(i=0; i<unidadesAritmeticas.length; i++){
		if(this.unidadesAritmeticas[i].estaLibre()==false){
			
			return false;
		}
	}
	for(i=0; i<unidadesMemoria.length; i++){
		if(this.unidadesMemoria[i].estaLibre()==false){
			return false;
		}
		
	}
	for(i=0; i<unidadesMultifuncion.length; i++){
		if(this.unidadesMultifuncion[i].estaLibre()==false){
			return false;
		}
		
	}

	if (this.unidadesSalto[0].estaLibre()==false){
		return false;
	}
	
	return true;	
}