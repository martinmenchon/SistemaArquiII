define(function () {
    'use strict';

    function Instruction(id, writeReg, readRegs, str, type, cycles) {
        this.instructionId = id;
        this.writeRegister = writeReg;
        if((type == "mem_int") || (type == "mem_float")) {
            this.offset = readRegs[0];
            this.readRegisters = [].concat(readRegs[1]);
        }
        else {
            this.offset = " ";
            this.readRegisters = [].concat(readRegs);
        }
        this.dependencies = [];
        this.instructionString = str;
        this.type = type;
        this.cycles = cycles; 
    }

    //public methods.
    Instruction.prototype = (function () {

        return {
            constructor: Instruction,

            getWriteRegister: function () {
                return this.writeRegister;
            },

            getOperands: function () {
                return this.readRegisters;
            },

            getId: function () {
                return this.instructionId;
            },

            depends: function (anotherInstruction) {     
                this.readRegisters.some(function (element) {
                    return (element == anotherInstruction.getWriteRegister());
                });
            },

            sameOperands: function () {
                var same = false,
            previousReg;
                this.readRegisters.some(function (register) {
                    if (previousReg && previousReg == register)
                        same = true;

                    previousReg = register;
                });
                return same;
            },

            registerExistsInDependency: function (register) { 
                for (var key in this.dependencies)
                    if (this.dependencies[key] == register)
                        return true;
                return false;
            },

            setDependency: function (anotherInstruction) {
                var writeRegister = anotherInstruction.getWriteRegister(); ;

                for (var i = 0; i < this.readRegisters.length; i++)
                    if (this.countDependencies() == 0) {
                        if (this.readRegisters[i] == writeRegister) {
                            this.dependencies.push(anotherInstruction);
                            break;
                        }
                    }
                    else {
                        if (this.countDependencies() < 2 && !this.sameOperands())
                            if (anotherInstruction.getWriteRegister() != this.dependencies[0].getWriteRegister() && this.readRegisters[i] == writeRegister) {
                                this.dependencies.push(anotherInstruction);
                                break;
                            }
                    }

            },

            countDependencies: function () {  
                return this.dependencies.length;
            },

            getDependencies: function () {
                return this.dependencies;
            },

            getRegistersInDependency: function (anotherInstruction) {
                return this.dependencies[anotherInstruction];
            },

            getString: function () {
                return this.instructionString;
            },

            getType: function () {
                return this.type;
            },

            getCycles: function () { 
                return this.cycles;
            },

            toString : function() {
                var result = ("\nInstruccion: ");
                result += "Id "+ this.instructionId + "\n";
                result += "WriteRegister: "+ this.writeRegister + "\n";
                result += "ReadRegisters: "+ this.readRegisters.toString() + "\n";
                result += "Dependencies: "+ this.dependencies.toString() + "\n";
                result += "InstructionStr "+ this.instructionString + "\n";
                result += "Type: "+ this.type + "\n";
                result += "Cycles: "+ this.cycles + "\n";
                result += "Execute: "+ this.execute + "\n";
                return result;
            },

            constructInstruction: function(){
                var result = this.instructionString + " " + this.writeRegister ;
                for(var i in this.readRegisters){
                    result += ", "+ this.readRegisters[i];
                }
                return result;
            }
        }
    })();

    return Instruction;

});