define(function () {
    'use strict';

    function InstructionNode(instr) {
        this.instr = instr;
        this.acumLatency = 0;
        this.dependencies = [];
        this.dependents = [];
        this.criticalPath = false;
        this.executed = false;
        this.executing = false;
    }

    InstructionNode.prototype = (function () {

        return {
            constructor: InstructionNode,

        getInstr: function() {
            return this.instr;
        },

        getAcumLatency: function(){
            return this.acumLatency;
        }, 
        
        getDependencies: function(){
            return this.dependencies;
        },

        getDependents: function(){
            return this.dependents;
        },

        getCriticalPath: function(){
            return this.criticalPath;
        },

        getExecuted: function() {
            return this.executed;
        },

        getExecuting: function() {
            return this.executing;
        },

        addDependents: function(dependents){
            this.dependents.push(dependents);
        },

        setCriticalPath: function(){
            this.criticalPath = true;
        },

        vinculateDependencies: function(dependencie){
            this.dependencies.push(dependencie);
        },

        vinculateDependents: function(dependent){
            this.dependents.push(dependent);
        },

        setAcumLatency: function(latency) {
            this.acumLatency = latency + this.instr.getCycles();
        },

        setExecuted: function() {
            this.executing = false;
            this.executed = true;
        },

        setExecuting: function() {
            this.executing = true;
        },

        toString : function() {
            var result = "\nNodo: "+ "\n";
            result += "Instr " + this.instr.getId() + "\n";
            result += "AcumLatency: "+ this.acumLatency + "\n";;
            result += "Dependencies: "+ this.dependencies.length+ "\n";
            result += "Dependents: "+ this.dependents.length+ "\n";
            result += "CriticalPath: "+ this.criticalPath+ "\n";
            return result;
        },

        }

    }
    )();


    return InstructionNode;

});