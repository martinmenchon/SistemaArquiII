/**
 * 
 */

var listaLoopUnroll=[];
var dispatch=[];
var gradoParal;
var indice=0;

function dispatcher(listaLU,gradoP){
	this.indice=0;
	
	//almaceno las microinstrucciones
	this.listaLoopUnroll=listaLU;
	
	while (this.listaLoopUnroll[indice]!="LAZO:"){
		this.indice++;
	}

	this.indice++;//a partir de aca hay que devolver la instruccion
	

	//pongo grado de paralelismo
	this.gradoParal=gradoP;
//	for (i = 0; i < gradoParal; i++) {
//		this.dispatch.push("L");
//	}

}

function getInstruction(){
	
	var res=this.listaLoopUnroll[indice].split(" ")[0];
	this.indice++;
	return res;
}

function retractar(){
	this.indice--;
}

function finish(){
	if (this.indice>=listaLoopUnroll.length){//el menos -1 es porq la ultima linea es un \n
		return true;
	}else{
		return false;
		}
		
}
