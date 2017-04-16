define(["Instruction","InstructionNode", "FunctionalUnit","CpuState","GraphGo"], function (Instruction,InstructionNode, FunctionalUnit, CpuState, Graph) {
    'use strict';

   function Processor(fu,graph) {
        this.nodes = [];
        this.planned = [],
        this.terminals = [],
        this.criticalPath = [],
        this.functionalUnits = fu,
        this.availablesUF = fu.length,
        this.currentCycle = 0,
        this.cpuStates = [],
        this.graph = graph;
    }

   Processor.prototype = (function () {
        return {
            constructor: Processor,

            addNode: function (instruction) {
                var newNode = new InstructionNode(instruction); //sin cargar dependencias

                this.graph.addNode(instruction.getId());

                var arrDependencies = instruction.getDependencies();
                this.terminals.push(this.nodes.length);
                if(arrDependencies.length > 0) { //SI instruction tiene dependencias
                    for(var d in arrDependencies) {
                        for(var n in this.nodes){
                            if(arrDependencies[d] == this.nodes[n].getInstr()){
                                newNode.vinculateDependencies(n);
                                this.nodes[n].vinculateDependents(this.nodes.length);
                                this.removeNodeTerminals(n);
                                break;
                            }
                        }
                    }
                }
                else { //Si no tiene
                    this.planned.push(this.nodes.length);
                }
                this.calculateAcumLatency(newNode);
                this.nodes.push(newNode);
            },

            calculateAcumLatency: function(node){
                if(node.getDependencies() == []){
                    node.setAcumLatency(0);
                }
                else {
                    var maxLatency = 0;
                    var dependencies = node.getDependencies();
                    for(var dep in dependencies) {
                        var aux = (this.nodes[dependencies[dep]]).getAcumLatency();

                        this.graph.addEdge(node.getInstr().getId(),this.nodes[dependencies[dep]].getInstr().getId(), this.nodes[dependencies[dep]].getInstr().getCycles(),aux);

                        if(aux > maxLatency){
                            maxLatency = aux;
                        }
                    }
                    node.setAcumLatency(maxLatency);
                }
            },

            removeNodeTerminals: function (nodo) {
                var index = this.terminals.indexOf(nodo);
                if (index > -1) {
                    this.terminals.splice(index, 1);
                }
            },

            findMaxAcumLatency: function (arrNodes) {
                var max = 0, index = -1;
                for(var node in arrNodes) {
                    var indexNode = arrNodes[node];
                    if(indexNode < this.nodes.length){
                        var latency = this.nodes[indexNode].getAcumLatency();
                        if( latency > max) {
                            max = latency;
                            index = node;
                        }
                    }
                }
                return index;
            },

            addNodeFinal: function () {
                this.graph.addNode("Final");
                for(var n in this.nodes) {
                    if(this.nodes[n].getDependents().length == 0) {
                        var node = this.nodes[n];
                        this.graph.addEdge("Final",node.getInstr().getId(), node.getInstr().getCycles(),node.getAcumLatency());
                    }
                }
            },

            generateCriticalPath: function (){
                var index = this.findMaxAcumLatency(this.terminals);
                this.graph.setCriticalPath(this.nodes[index].getInstr().getId());
                var node, dependencies;
                if(index != -1){
                    node = this.nodes[index];
                    node.setCriticalPath();
                    this.criticalPath.unshift(node);
                    index = this.findMaxAcumLatency(node.getDependencies());
                    while (index != -1){
                        dependencies = node.getDependencies();
                        node = this.nodes[dependencies[index]];
                        node.setCriticalPath();
                        this.graph.setCriticalPath(node.getInstr().getId());
                        this.criticalPath.unshift(node);
                        index = this.findMaxAcumLatency(node.getDependencies());
                    }
                }
            },

            isFullyProcessed: function () {
                return this.planned.length == 0;
            },

            canRun: function (node) {
            //Verifica si una instruccion puede ejecutarse si sus dependencias estas ejecutadas
                var dependencies = node.getDependencies();
                if(dependencies.length > 0) {
                    for(var i in dependencies) {
                        if(!(this.nodes[dependencies[i]]).getExecuted()) {//No puede ejecutarse
                            return false;
                        }
                    }
                }
                return true;
            },

            availableUF: function(type) {
                var ufMulti = -1;
                for(var uf in this.functionalUnits) {
                    if(!this.functionalUnits[uf].isOccupied()) {  //No esta ocupada
                        if(this.functionalUnits[uf].getType() == "multi_type") { //Si  es multi
                            ufMulti = uf;
                        }
                        else {
                            if(this.functionalUnits[uf].getType() == type) { //Mismo tipo y libre se asigna
                                return uf;
                            }
                        }
                    }
                }
                return ufMulti;
            },

            unlockCC: function(instrCritical) {
                var dependencies = instrCritical.getDependencies();
                if(dependencies.length > 0) {
                    for(var i in dependencies) { //Ciclamos en las dependencias
                        var d = this.nodes[dependencies[i]];
                        if((!d.getExecuted()) && (!d.getExecuting())) { //Si no ha sido ejecutada
                            if(this.canRun(d)) { //Si se puede ejecutar
                                if(this.availableUF(this.nodes[dependencies[i]].getInstr().getType()) != -1) { //Hay UF disponible
                                    return dependencies[i];
                                }
                            }
                            else { //Entonces tiene dependencias no ejecutadas, recursionamos
                                return unlockCC(d);
                            }
                        }
                    }
                }
                return -1;
            },

            run: function () {
                var finished = false;
                this.nextCycle();
                while ((this.planned.length != 0) || (!finished)) {
                    this.currentCycle += 1;
                    for(var fu in this.functionalUnits) {
                        if(this.functionalUnits[fu].nextCycle()) {
                            this.availablesUF +=1;
                        }
                        var node = this.functionalUnits[fu].getCompleted();
                        if(node != null) {
                            this.updatePlanned(this.nodes.indexOf(node));
                        }
                    }
                    this.nextCycle();
                    if(this.functionalUnits.length == this.availablesUF) {
                        finished = true;
                    }
                }
                return this.cpuStates;
            },

            updatePlanned: function (indexPlanned) {
                var dependents = this.nodes[indexPlanned].getDependents(); //obtengo sus dependientes
                for (var d in dependents) {
                    if(this.canRun(this.nodes[dependents[d]])) {
                        this.planned.push(dependents[d]); //agregamos a planificables
                    }
                }
            },

            nextCycle: function () {
                var state = new CpuState(this.currentCycle,this.translatePlanned());

                if(this.criticalPath.length > 0) {
                    var instrCritical = this.criticalPath[0];
                    var fu = this.availableUF(instrCritical.getInstr().getType());
                    var cCExecuted = false;
                    if(this.canRun(instrCritical)) { //Se puede ejecutar
                        if(fu != -1) { //Hay UF disponibles
                            this.functionalUnits[fu].execute(instrCritical);
                            this.availablesUF -= 1;
                            var indexNodes = this.nodes.indexOf(instrCritical);
                            state.addSelected(this.nodes[indexNodes].getInstr().getId());
                            this.planned.splice(this.planned.indexOf(indexNodes),1); //saco la instr ejecutada
                            this.criticalPath.splice(0,1);
                            cCExecuted = true;
                        }
                    }
                    var index = -1;
                    if(cCExecuted) {
                        if(this.criticalPath.length > 0) {
                            instrCritical = this.criticalPath[0]; //actualizo el prox instruc Critical para desbloquear sus dependencias
                            index = parseInt(this.unlockCC(instrCritical));
                        }
                    }
                    while(index != -1) {
                        fu = this.availableUF(this.nodes[index].getInstr().getType());
                        if(fu != -1) {
                            this.functionalUnits[fu].execute(this.nodes[index]);
                            this.availablesUF -= 1;
                            state.addSelected(this.nodes[index].getInstr().getId());
                            this.planned.splice(this.planned.indexOf(index),1); //saco la instr ejecutada
                        }
                        index = parseInt(this.unlockCC(instrCritical));
                    }
                }
                if(this.availablesUF > 0) {
                    fu = this.functionalUnits.length - 1;
                    while(fu >= 0){
                        if(!(this.functionalUnits[fu].isOccupied())){
                            for(var instr in this.planned){
                                var possibleInstruction = this.nodes[this.planned[instr]].getInstr();
                                if( (possibleInstruction.getType() == this.functionalUnits[fu].getType()) || (this.functionalUnits[fu].getType() == "multi_type") ){
                                    this.functionalUnits[fu].execute(this.nodes[this.planned[instr]]);
                                    this.availablesUF -= 1;
                                    state.addSelected(this.nodes[this.planned[instr]].getInstr().getId());
                                    this.planned.splice(instr,1); //saco la instr ejecutada
                                    break;
                                }
                            }
                        }
                        fu--;
                    }
                }
                this.cpuStates.push(state);
            },

            translatePlanned: function () {
                var arr = [];
                for(var p in this.planned) {
                    arr.push(this.nodes[this.planned[p]].getInstr().getId());
                }
                return arr;
            },

        }


    }
    )();

   return Processor;
});
