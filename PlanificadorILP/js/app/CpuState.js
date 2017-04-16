define(function () {
    'use strict';

    function CpuState(cycle,planned) {
        this.cycle = cycle,
        this.planned = planned,
        this.selected = [];
    }


    //public methods.
    CpuState.prototype = (function () {

        return {

            addSelected: function (node) {
                this.selected.push(node);
            },

            getCycle: function () {
                return this.cycle;
            },

            getPlanned: function () {
                return this.planned;
            },

            getSelected: function () {
                return this.selected;
            },

        }
    })();

    return CpuState;
});
