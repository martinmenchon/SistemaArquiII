define(['Instruction'], function (Instruction) {
    'use strict';

    var instructions = [];

    var setDependendencies = function (instruction) {
        var currentInstruction,
          readRegisters = instruction.getOperands(),
          operand;

        //Busco desde el final hasta el principio.
        for (var i = instructions.length - 1; i >= 0; i--) {
            currentInstruction = instructions[i];
            if((currentInstruction.getString() != "SD") && (currentInstruction.getString() != "SW")) { //Si es load no hay RAW
                instruction.setDependency(currentInstruction);
            }            
        }
    };

    return {
        addInstruction: function (instruction) {
            if((instruction.getString() != "LD") && (instruction.getString() != "LW")) { //Si es load no hay RAW
                setDependendencies(instruction);                
            }
            instructions.push(instruction);
        },

        getInstructions: function () {
            return instructions;
        },

        countInstructions: function () {
            return instructions.length;
        },

        getInstructionsAsQueue: function () {
            return true;
        },

        size: function () {
            return instructions.length;
        },
        clear: function() {
            instructions = [];
        }
    }

});