/**
 * 
 * tipo =1 ->unidad memoria
 *  	=2 ->unidad aritmetica
 *  	=3 ->unidad multifuncion
 *  	=4 ->unidad salto
 */

var tipo;
var libre=true;
var ciclosRestantes=0;

function unidadFuncional(tipoT){

	this.tipo=tipoT;
	this.libre=true;

this.nuevaInstruccion =function nuevaInstruccion(ci){

	console.log("METIO ALGO");
	this.ciclosRestantes=ci;

	this.libre=false;
}

this.restarCiclo = function restarCiclo(){

	if (this.ciclosRestantes>0) {
		this.ciclosRestantes--;
		if (this.ciclosRestantes == 0) {
			this.libre = true;
		}
	}	
}

this.getTipo = function getTipo(){
	return this.tipo;
}

this.estaLibre = function estaLibre(){
	console.log("ESTA LIBRE?:"+this.libre+".tipo:"+this.tipo);
	return this.libre;
}

}