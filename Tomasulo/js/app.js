
var app = angular.module('tomasuloApp', []);

app.controller('InstController', function() {


    this.exTime = 0;

    this.defaultInst = {
        type:'INSTRUCTION',
        dst: 'DST',
        op1: 'OP1',
        op2: 'OP2'
    };

    // Se asigna el valor de la instruccion 'default' (defaultInst)
    this.selectedInst = jQuery.extend(true, {}, this.defaultInst);

    this.instructions = [
    {type:'ADD', cycles: 1},
    {type:'SUBD', cycles: 1},
    {type:'MULD', cycles: 1},
    {type:'DIV', cycles: 1}/*,
    {type:'ST', cycles: 1},
    {type:'LD', cycles: 1}*/];

    this.instructionsCycles = ['1', '2', '3', '4', '5', '6', '7', '8'];

    this.registers_bank = [
    {name: 'r0'},
    {name: 'r2'},
    {name: 'r4'},
    {name: 'r6'},
    {name: 'r8'}];

    this.instr_run = [
        {id:'S1', op1:'r8', op2:'r0', type:'ADD', dst:'r4'},
        {id:'S2', op1:'r0', op2:'r4', type:'MULD', dst:'r2'},
        {id:'S3', op1:'r8', op2:'r4', type:'ADD', dst:'r4'},
        {id:'S4', op1:'r4', op2:'r2', type:'MULD', dst:'r8'}
    ];

    this.delete = function(i){
        this.instr_run.splice(this.instr_run.indexOf(i),1);
    };
 

    this.nInstruction = this.instr_run.length+1;

    this.adder = [];
    this.mult = [];
    this.mem = [];
    this.executed = [];
    this.logs = [];
    this.i = 1;

    this.emission = 2;

    this.setRegTable = function() {
    	var defaultReg = [];
    	defaultReg.push({number:'r0', busy:0, tag:0, data:6.0, readOnly: false}); // pos 0
    	defaultReg.push({number:'r2', busy:0, tag:0, data:3.5, readOnly: false}); // pos 1
    	defaultReg.push({number:'r4', busy:0, tag:0, data:10.0, readOnly: false}); // pos 2
    	defaultReg.push({number:'r6', busy:0, tag:0, data:0, readOnly: false}); // pos 3
    	defaultReg.push({number:'r8', busy:0, tag:0, data:7.8, readOnly: false}); // pos 4
    	return defaultReg;
    };
    this.reg = this.setRegTable();


    this.select = function(field, instruction) {
        this.selectedInst[field] = instruction;
        this.updateBtns();
    };

	this.selectCycle = function(op, instCycle) {
		var instArray = this.instructions;
		$.each(instArray, function() {
    		if (this.type == op) {
        		this.cycles = instCycle;
        	}
    	});
	};

    this.selectemission = function(em) {
        this.emission = em;
    };

	this.resetInstCycles = function() {
		var instArray = this.instructions;
		$.each(instArray, function() {
        	this.cycles = 1;
    	});
	};

    this.isMemInst = function() {
    	var selected = this.selectedInst;
    	return ((selected.type == 'LD') || (selected.type == 'ST'));
    };

    this.allSet = function() {
        var selected = this.selectedInst;
        var def = this.defaultInst;
	    return !((selected.type != def.type) && (selected.dst != def.dst) && (selected.op1 != def.op1) && (selected.op2 != def.op2));
    };

	this.allSetMem = function() {
        var selected = this.selectedInst;
        var def = this.defaultInst;
	    return !((selected.type != def.type) && (selected.dst != def.dst) && (selected.op1 != def.op1));
    };

    this.updateBtns = function() {

        var btnAdd = $('#btn-add');
        var btnOp2 = $('#btn-op2');

        if (!this.isMemInst()) {
        	// update op2 button
        	if (btnOp2.hasClass("disabled"))
        			btnOp2.removeClass("disabled");
			// update add button
        	if (!this.allSet()) {
            	if (btnAdd.hasClass("disabled"))
                	btnAdd.removeClass("disabled");
        	} else {
            	if (!btnAdd.hasClass("disabled"))
                	btnAdd.addClass("disabled");
        	}
        } else {
        	// update op2 button
        	if (!btnOp2.hasClass("disabled"))
        			btnOp2.addClass("disabled");
        	// update add button
        	if (!this.allSetMem()) {
            	if (btnAdd.hasClass("disabled"))
                	btnAdd.removeClass("disabled");
        	} else {
            	if (!btnAdd.hasClass("disabled"))
                	btnAdd.addClass("disabled");
        	}
        }

    };

    this.putInstInTable = function() {
        if (this.allSet())
            return;
    	this.selectedInst['id'] = 'S'+ this.nInstruction;
    	this.instr_run.push(this.selectedInst);
    	this.nInstruction++;
    	this.selectedInst = jQuery.extend(true, {}, this.defaultInst);
    	this.updateBtns();
    };

    /**
    * Set method: 
    *   Disable "Instructions", "Cicles" and "Controls" button groups.
    *   Enable button "RUN CYCLE"
    */
    this.set = function() {

        disabled = $("#btn-set").hasClass("disabled");

        if(!disabled) {
            
            $("#btn-set").addClass("disabled");
            $("#btn-reset").removeClass("disabled");

            var btnGrpAdd = $('.btn-grp-add-inst');
            btnGrpAdd.find("button").addClass("disabled");

            var ciclePerInst = $('.cicle-per-instructions');
            ciclePerInst.find("button").addClass("disabled");

            var btnRun = $('#btn-run');
            if (btnRun.hasClass("disabled")){
                if (this.keepRunning()) {
                    btnRun.removeClass("disabled");
                }
            }

            //disable register bank edition
            for (i=0; i<this.reg.length; i++) {
                this.reg[i].readOnly=true;
        }
    }
            
    };


    /**
    * Reset method: Re-enable "Instructions", "Cicles" and "Controls" button groups. Delete tables data.
    */
    this.reset = function() {
        disabled = $("#btn-reset").hasClass("disabled");
        if (!disabled) {
            $("#btn-reset").addClass("disabled");
            $("#btn-set").removeClass("disabled");
            $('.btn-grp-add-inst').find("button").removeClass("disabled");
            $('.cicle-per-instructions').find("button").removeClass("disabled");

            this.instr_run = [];
            this.reg = this.setRegTable();
            this.resetInstCycles();
            this.adder = [];
            this.mult = [];
            this.nInstruction = 1;
            this.logs = [];
            this.exTime = 0; //time execution en 0
        }   
    };




/**********************************************************************************************/

    this.isBusy = function(reg) {

        var reg = reg.substring(1, reg.length);

        // fix reg number by position
        if (reg>0) {
            reg = reg/2;
        }

        if (this.reg[reg].busy == 0) {
            return {busy:0, data:this.reg[reg].data};
        } else {
            return {busy:1, tag:this.reg[reg].tag};
        }

    };

    this.updateRegTag = function(instr, pos) {
        var dst = instr['dst'];

        $.each(this.reg, function() {
            if (this.number == dst) {
                this.busy = 1;
                this.tag = pos;
            }
        });

    };


    // Obtiene la primer posicion vacia del ER
    this.getPos = function(ER) {
        if (ER.length > 0) {
            for (p=0;p<ER.length;p++) {    
                if (ER[p].dst === "") {
                    return p;
                }
            }
        }
        return ER.length;
    };



    this.addToER = function(instr,ER, offset) {

        // ER del adder de 0-4, del mult 5-9
        var index = this.getPos(ER);
        var pos = index + offset;


        // 1 op si es MEM, sino 2 op
        var cantOperandos = 2;
        for (i=1;i<=cantOperandos;i++) {

            // 
           var raw = this.isBusy(instr['op'+i]);
            if (raw.busy == 0) {
                instr['tag'+i] = 0;
                instr['op'+i+'data'] = raw.data;
            } else {
                instr['tag'+i] = raw.tag;
                instr['op'+i+'data'] = '-'
            }
        }

        instr['pos'] = pos;
        instr['EXE'] = 0;

        // lo debería agregar en el primer slot disponible
        ER[index] = instr;

        // actualizar banco de reg
        this.updateRegTag(instr, pos);


    };

    // agrego la instruccion a la ER correspondiente
    this.dispatch = function(inst) {

        switch(inst.type) {
            case 'ADD':
                this.logs.push("("+ this.i++ + ")" + " Despachando "+inst.id+" a la ER del Adder");
                this.addToER(inst,this.adder,1);
                break;
            case 'SUBD':
            this.logs.push("("+ this.i++ + ")" + " Despachando "+inst.id+" a la ER del Adder");
                this.addToER(inst,this.adder,1);
                break;
            case 'MULD':
                this.logs.push("("+ this.i++ + ")" + " Despachando "+inst.id+" a la ER del Multiplier");
                this.addToER(inst,this.mult,6);
                break;
            case 'DIV':
                this.logs.push("("+ this.i++ + ")" + " Despachando "+inst.id+" a la ER del Multiplier");
                this.addToER(inst,this.mult,6);
                break;
            case 'ST':
                this.logs.push("("+ this.i++ + ")" +" Despachando "+inst.id+" a la ER del Memory");
                this.addToER(inst,this.mem,11);
                break;
            case 'LD':
                this.logs.push("("+ this.i++ + ")" +" Despachando "+inst.id+" a la ER del Memory");
                this.addToER(inst,this.mem,11);
                break;
        }

    };

/**********************************************************************************************/

    // Escribe el resultado de la instruccion en las tag que la esperan en el ER
    this.updateER = function(ER,tag,result) {
        $.each(ER,function () {
                if (this.tag1 == tag) {
                    this.op1data = result;
                    this.tag1 = 0;
                }
                if (this.tag2 == tag) {
                    this.op2data = result;
                    this.tag2 = 0;
                }
            
        });


    };

    // Escribe el resultado de la instruccion en las tag que la esperan en el banco de registros
    this.updateRegVals = function(tag,result) {
        $.each(this.reg,function () {
            if (this.busy == 1) {
                if (this.tag == tag) {
                    this.busy = 0;
                    this.tag = 0;
                    this.data = result;
                }
            }
        });

    };

    this.update = function(tag,result){
        this.logs.push("("+ this.i++ + ")" + " Actualizando las instrucciones de las ER, para las tags "+tag);
      
        this.updateER(this.adder,tag,result);
   
        this.updateER(this.mult,tag,result);
        

        this.logs.push("("+ this.i++ + ")" + " Actualizando el banco de registros, para las tags "+tag);
        this.updateRegVals(tag,result);
       
    };

    this.finalize = function(ins) {

        var result = 0;

            switch(ins.type) {
            case 'ADD':
                result = Number((ins.op1data + ins.op2data).toFixed(2));
                break;
            case 'SUBD':
                result = Number((ins.op1data - ins.op2data).toFixed(2));
                break;
            case 'MULD':
                result = Number((ins.op1data * ins.op2data).toFixed(2));
                break;
            case 'DIV':
                result = Number((ins.op1data / ins.op2data).toFixed(2));
                break;
            case 'ST':
                /**code block*/
                break;
            case 'LD':
                /**code block*/
                break;
            }
        return result;
    };

    // devuelve la primer instruccion libre
    this.getFirstFree = function(ER) {
        for (i=0; i<ER.length;i++) {
            if (ER[i].dst !== "") {
                if (ER[i].tag1 == 0) {
                    if (ER[i].tag2 == 0) {
                        return i;
                    }
                }
            }
        }
        return -1;
    };

    // Obtiene la cantidad de ciclos de ejecucion por tipo de instruccion, segun lo configurado
    this.getTEX = function(op) {
        var time = 1;
        $.each(this.instructions, function() {
            if (this.type == op) {
                time = this.cycles;
            }
        });
        return time;
    };


    this.removeExecuted = function(ER,pos){
            ER.splice(pos,1);
    
    };

    // ejecuta de a una por ER
    this.execute = function(ER) {

        
        var instrPos = this.getFirstFree(ER);
        var result = "";
        var tag = "";

        if (instrPos > -1) {

            var inst = ER[instrPos];
            var TEX = this.getTEX(inst['type']);

            // EXECUTE AND ADD CYCLES
            inst['EXE'] = inst['EXE'] + 1;
            this.logs.push("("+ this.i++ + ")" + " Ejecutando "+inst.id+". Ciclo #"+inst['EXE']);

            // SAVE THE STARTING EXECUTION TIME 
            if (inst['EXTIME'] === "") {
                inst['EXTIME']= this.exTime;
            }


            // Si finalizó la ejecucion en este ciclo, elimino la instr del ER y guardo el resultado
            if (inst['EXE'] == TEX ) {

                result = this.finalize(inst);

                // guardo una copia
                inst = jQuery.extend(true, {}, ER[instrPos]);
                // remove the finalized instr from the ER. Add into the 'executed' array
                this.logs.push("("+ this.i++ + ")" + " Finalizó la inst "+inst.id+", eliminando de la ER.");
                this.removeExecuted(ER,instrPos);

                this.executed.push(inst);

                tag = inst.pos;

            }


        }
        return {tag: tag,result: result};

    };



    // Da TRUE siempre que haya algo para ejecutar o despachar.
    this.keepRunning = function() {
        return (this.instr_run.length != 0 || this.adder.length != 0 || this.mult.length != 0);
    };

    this.run = function() {

        disabled = $("#btn-run").hasClass("disabled");
        //borra todo el log
        this.logs = [];
        if (!disabled) {
            this.exTime = this.exTime + 1;
            this.logs.push("COMIENZO DE CICLO: "+this.exTime);

            // ITERO POR EL N DE EMISION DE INSTR
            for (e=1;e<=this.emission;e++) {
                
                // si la lista de instrucciones no esta vacia, despacho.
                if (this.instr_run.length > 0 ) {
                    // tomo la primer instruccion de la lista
                    var inst = this.instr_run.shift();
                    // despacho a la ER correspondiente
                    inst['EXTIME']="";
                    this.dispatch(inst);
                }
            }

            // ejecuto
            var addResult = this.execute(this.adder);
            var multResult = this.execute(this.mult);
            

            // Actualizo las estaciones de reservas y el banco de registros, luego de ejecutar.
            if ((addResult.tag !== "") && (addResult.result !== "")) {
                this.update(addResult.tag,addResult.result);
            }
            if ((multResult.tag !== "") && (multResult.result !== "")) {
                this.update(multResult.tag,multResult.result);
            }
        }
            
    };
    

});


