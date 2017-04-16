define(function () {
    'use strict';

    function FunctionalUnit(type) {
        this.cycles_execution = 0, //Cant de ciclos que lleva
        this.type = type,
        this.occupied = false,
        this.nodeInstr,
        this.current_cycle = 0,
        this.completed = false;
    }


    //public methods.
    FunctionalUnit.prototype = (function () {

        return {

            execute: function (nodeInstr) {
                this.nodeInstr = nodeInstr;
                this.nodeInstr.setExecuting();
                this.occupied = true;
            },

            isOccupied: function () {
                return this.occupied;
            },

            getType: function () {
                return this.type;
            },

            nextCycle: function () {

                if (this.occupied == true) {
                    this.cycles_execution += 1;
                    if (this.cycles_execution == this.nodeInstr.getInstr().getCycles()) {   //Si son iguales, ya termino
                        this.nodeInstr.setExecuted();
                        this.completed = true;
                        this.cycles_execution = 0;
                        this.occupied = false;
                        return true;
                    }
                }
                return false;
            },

            getId: function () {
                if (this.occupied == true) {
                    return this.nodeInstr.getInstr().getId();
                } else {
                    return "-";
                }
            },

            getCompleted: function () {
                if(this.completed) {
                    this.completed = false;
                    return this.nodeInstr;
                }
                else {
                    return null;
                }
            }
        }
    })();

    return FunctionalUnit;
});