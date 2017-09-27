var app = angular.module('homecontroller', []);

app.controller('controlador',function() {
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/eclipse");
	editor.setShowPrintMargin(false);
	editor.session.setMode("ace/mode/c_cpp");
	editor.setValue("//reconoce un for o un while.\nfor (i=1; i<= 5 ; i++) {\n\tA[i] = E[i-1] + 6;\n\tB[i] = A[i] * Z;\n\tC[i] = B[i-1] + X;\n\tD[i] = C[i] + Y;\n\tE[i] = B[i] * D[i];\n}");
	editor.clearSelection();
	
	$('#myModal').on('shown.bs.modal', function() {
		angular.element(document.getElementById('showRun')).controller().graficarGrafo();
		});

	this.runParser = function() {
		var lines = editor.getValue();
		inicializarEstructuras();
		try {
			if (Gramatica.parse(lines)) {
				$("#myModal").modal();
				
				var get = getSentencias();
				var numeroIteraciones= getNIteraciones();
				var estadosFinales= this.setEstadoFinal(get);
				this.setCiclios(get);
				var grafo = this.getGrafo(get,estadosFinales);
				var trazas = this.generarTrazas(grafo,numeroIteraciones);
				
			}
		} catch (e) {
			this.error=String(e.message.replace("\t"," ").replace("on line","en linea").replace("got","se reconocio").replace("Expecting","Se esperaba"));
			$("#ModalError").modal();
		}
	};

	this.getGrafo = function(get,estadosFinales) {
		var grafo=[];
		this.nodos = [];
		for ( var indice in get) {
			var etiqueta = get[indice][0];
			this.nodos.push({id : indice,label : etiqueta});
		}
		
		this.conectores = [];
		var varIzq = [];
		for ( var i in get)
			varIzq.push(get[i][1]);

		for ( var i in get) {
			var dependencias = get[i][2];
			for ( var j in dependencias) {
				var depen;
				var pos = 0;
				if (dependencias[j].includes("-")) {
					depen = dependencias[j].split("-")[0] + "]";
					pos = dependencias[j].split("-")[1].split("]")[0];
				} else if (!dependencias[j].includes("[")) {
					depen = dependencias[j];
					var position = varIzq.indexOf(depen);
					if (position != -1 && position >= i)
						pos = 1;
				} else{
					depen = dependencias[j];
					var sentencia = varIzq.indexOf(depen);
					if (sentencia >= i)
						depen=" ";
				}
				var numeroSentencia = varIzq.indexOf(depen);
				if (numeroSentencia != -1){
					if ((numeroSentencia < i)||(numeroSentencia > i && pos == 0)){
						estadosFinales[numeroSentencia]=false;}
					if (numeroSentencia==i){
						etiqueta=this.buscarArco(i);
						this.conectores.push({from : numeroSentencia,to : i,label : "("+ this.tiempoSentencia[numeroSentencia]+ "," + pos + ")" +"\n"+etiqueta});
					}
					else
						this.conectores.push({from : numeroSentencia,to : i,label : "("+ this.tiempoSentencia[numeroSentencia]+ "," + pos + ")"});
				}
			}
		}
		for (var e in estadosFinales){
			if (estadosFinales[e]){
				var meApuntan=false;
				for (var t in this.conectores)
				{	
					if (this.conectores[t]["to"]==e){
						meApuntan= true;
					}
				}
				estadosFinales[e] = meApuntan;
			}
		}
		
		
		
		for (var aux in estadosFinales){
			if (estadosFinales[aux]){
				idFinal=this.nodos.length;
				this.nodos.push({id :idFinal,label : " ", color : '#f1f1f1'});
				this.conectores.push({from : aux,to :idFinal,label : "("+ this.tiempoSentencia[aux]+ "," + "0)"});
			}
		}

		for (var z in this.nodos)
		{
			var adyacentes = [];
			var iter = [];
			for (var t in this.conectores)
				{	
				if (Number (this.conectores[t]["from"]) == z)
					{
						adyacentes.push(this.conectores[t]["to"]);
						iter.push(this.conectores[t]["label"].split(",")[1].split(")")[0]);
						
					}
				}
			
			grafo.push({Id :z, Label: this.nodos[z]["label"], Adyacentes : adyacentes, Visit : false, Unidos : false, Iterations: iter});
		}
		return grafo;
	};
	
	this.graficarGrafo=function(){
		var contenedor = document.getElementById('dibujo');
		contenedor.style.width = "500px";
		contenedor.style.height = "400px";
		
		var datos_dibujo = { 
			nodes : this.nodos,
			edges : this.conectores
		};
		
		var config = {
			nodes : {
				align : 'center',
				color : '#5cb85c',
				
			},
			align : 'center',
			edges : {
				align : 'center',
				arrows : 'to',
				color : '#989898 ',
			}
		}; // Se puede personalizar
		var dibujo = new vis.Network(contenedor, datos_dibujo,config);
	}
	
	this.buscarArco = function(index){
		indice=-1;
		for (var t in this.conectores){	
			if (Number(this.conectores[t]["from"]) == index && Number(this.conectores[t]["to"]) == index){
				indice=t;
			}
		}
		if (indice==-1)
			return "";
		else{
			label=this.conectores[indice]["label"];
			this.conectores[indice]["label"]=this.conectores[indice]["label"].split("\n")[0];
			return label;
		}
	}

	this.setCiclios = function(get) {
		for ( var i in get) {
			var operador = get[i][3];
			var contador = 0;
			for ( var j in operador) {
				if (operador[j] == "+")
					contador = contador + Number(this.instructions[0].cycles);
				else if (operador[j] == "-")
					contador = contador + Number(this.instructions[1].cycles);
				else if (operador[j] == "*")
					contador = contador + Number(this.instructions[2].cycles);
				else if (operador[j] == "/")
					contador = contador + Number(this.instructions[3].cycles);
			}
			contador = contador + Number(this.instructions[4].cycles);
			this.tiempoSentencia[i] = contador;
		}
	};

	
//**************************** función DFS***************************//
	
	this.dfsBucle = function (grafo, index, traza, bucle, soluciones,anterior){
		 grafo[index]["Unidos"] = true;
		 grafo[index]["Visit"] = true;
		 if (grafo[index]["Label"] == " ")
		 { 
			 var trazafinal = traza;
			 
		 	if (bucle != -1){
		 		trazafinal =trazafinal.substring(0, trazafinal.length-2);
		 		this.soluciones.push(trazafinal);
		 	} 
		 }
		 else{
			 if (bucle != index)
				 traza+=grafo[index]["Label"]+" + ";
			 
			for( var i in grafo[index]["Adyacentes"]){
		
				if (!grafo[grafo[index]["Adyacentes"][i]]["Visit"]){	
					this.dfsBucle(grafo,grafo[index]["Adyacentes"][i], traza, bucle,soluciones,index); 
				}
				else{
					 if (grafo[index]["Adyacentes"][i] == grafo[index]["Id"] && bucle == -1)
					 {
						 bucle=grafo[index]["Id"];
						 traza= traza.substring(0, traza.length-3) + "*N + ";
						 var dividido=false;
						 if(grafo[index]["Iterations"][i]>1){
							 dividido=true;
							 traza=traza.substring(0, traza.length-4)+"(N/" + grafo[index]["Iterations"][i] + ") + ";
						 }
					
						 this.dfsBucle(grafo, grafo[index]["Adyacentes"][i], traza, bucle,soluciones,index);
						 bucle=-1;
						 if (!dividido)
							 traza=traza.substring(0, traza.length-5)+ " + ";
						 else
							 traza=traza.substring(0, traza.length-9)+ " + ";
					 }
				}
			}
			 
		 }
		 if (anterior != index)
			 grafo[index]["Visit"] = false;
		
	 }
	
	this.dfsCiclo = function (grafo, index, traza, soluciones,costo,ciclo,costoCiclo,anterior){
		grafo[index]["Unidos"] = true;
		grafo[index]["Visit"] = true;
		if (grafo[index]["Label"] == " " )
		{
			if (ciclo != -1){
				soluciones.push(this.armarTraza(traza,ciclo,costoCiclo));
			}
		}
		else{
			if(traza.indexOf(index)== -1){  // Pretenezco a la traza
			traza.push(grafo[index]["Id"]);
			}
			for( var i in grafo[index]["Adyacentes"]){			 									// Por cada adyacente 
				if (!grafo[grafo[index]["Adyacentes"][i]]["Visit"]){
					costo.push(grafo[index]["Iterations"][i]);
					this.dfsCiclo(grafo,grafo[index]["Adyacentes"][i],traza,soluciones,costo,ciclo,costoCiclo,index);
					costo.pop();
					}
				else{
					if(grafo[index]["Adyacentes"][i] != index && ciclo == -1){
						ciclo=grafo[index]["Adyacentes"][i];
						yociclo= true;
						traza.push(grafo[grafo[index]["Adyacentes"][i]]["Id"]);
						costoCiclo= this.buscarCiclo(costo,traza,ciclo,grafo[index]["Iterations"][i]);
						var primeroCiclo = traza.indexOf(grafo[index]["Adyacentes"][i]);
						for(primeroCiclo; primeroCiclo < traza.length-1; primeroCiclo++){
							this.dfsCiclo(grafo,traza[primeroCiclo],traza,soluciones,costo,ciclo,costoCiclo,traza[primeroCiclo]);
						}
						ciclo=-1;
						traza.pop();
					}
					
				}
			}
			if(index != anterior){
			traza.pop();
			}
		}
		if(index != anterior){
			grafo[index]["Visit"] = false;
		}
		
	};
	
	this.buscarCiclo=function(costo,traza,index,costoInicial){
		i=traza.indexOf(index);
		j=traza.lastIndexOf(index)-1;
		var contador=Number(costoInicial);
		for (i; i < j; i++){
			contador=Number(Number(contador)+Number(costo[i]));
		}
		return contador;
	}
	
	this.armarTraza=function(traza,index,contador){
		var StringTraza="";
		var posicionUltima=traza.lastIndexOf(index);
		
		for (var i in traza){
			if (i != posicionUltima){
				if (traza[i] == index)
					StringTraza+=" ( ";
				StringTraza+="S"+Number(Number(traza[i])+Number(1)) + " + ";
			}else{
				StringTraza=StringTraza.substring(0, StringTraza.length-2)+") * N + ";
				if (contador > 1)
					StringTraza=StringTraza.substring(0, StringTraza.length-4)+"(N/"+contador+") + ";
			}
			
		}
		StringTraza=StringTraza.substring(0, StringTraza.length-2);
		return StringTraza;
	}
	 
	this.generarTrazas = function (grafo, numeroIteraciones){
		this.soluciones=[];
		var coste=0;
		var bucle = -1;
		for (var i in grafo){
			if(!grafo[i]["Unidos"]){
				this.dfsBucle(grafo, i,"",-1,this.soluciones,-1);
				this.dfsCiclo(grafo, i, [], this.soluciones,[],-1,0,-1);
			}
		}
		this.grillaTrazas=[];
		var text="";
		for (var i in this.soluciones)
		{
			text=this.soluciones[i];
			for (var j in this.tiempoSentencia)
			{
				var sentencia="S"+Number(Number(1)+Number(j));
				text =text.replace(sentencia, this.tiempoSentencia[j]);
			}
			text =text.replace("N", numeroIteraciones);
			this.grillaTrazas.push({traza:this.soluciones[i], calculo:text, resultado:Number(eval(text).toFixed(2))});
		}
	}
	
	
	
	
	
	
// ---------------  trazas fin----------------------------//
	
	
	this.setEstadoFinal= function(get){
		estadosFinales=[];
		for ( var i in get) {
			estadosFinales[i]=true;
		}
		return estadosFinales;
	}
	
	this.tiempoSentencia = [];
	this.instructions = [ 
		{type : 'ADDD',cycles : 1}, 
		{type : 'SUBD',cycles : 1},
		{type : 'MULD',cycles : 1},
		{type : 'DIVD',cycles : 1},
		{type : 'STD',cycles : 1}];

	this.grillaTrazas = [];
	
	this.cycles = ['0','1', '2', '3', '4', '5', '6', '7', '8' ];

	this.setCycleToInstruction = function(op, cycle) {
		var instArray = this.instructions;
		$.each(instArray, function() {
			if (this.type == op) {
				this.cycles = cycle;
			}
		});
	};

	this.selectCycle = function(op, instCycle) {
		var instArray = this.instructions;
		$.each(instArray, function() {
			if (this.type == op) {
				this.cycles = instCycle;
			}
		});
	};

});
