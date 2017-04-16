define(["Instruction", "Stack", "Processor", "FunctionalUnit", "Parser", "GraphGo" , "UiManager", "jquery", "./libs/ace/ace", "./libs/ace/mode/assembly_x86", "./libs/ace/theme/tomorrow", "./libs/fullPage/jquery.fullPage", "./libs/notification/notification"], function (Instruction, stack, Processor, FunctionalUnit, Parser, GraphGo, UI, $, ace, mode, theme, fullpage, notification) {
    var editor = ace.edit("editor");
    editor.setTheme(theme);
    editor.getSession().setMode("./mode/assembly_x86");

    var UiManager = new UI("#cycle-counter-table", "#planned-table", "#choosed-table");

    var functionalUnits         = [],
        booleanFunctionalUnits  = [],
        states                  = [],
        instructionsCycles      = {},
        lastIndex               = 0,
        nextState               = null;


    function addFunctionalUnits(type,number) {
        booleanFunctionalUnits[number] = false;
        for(var i = 0; i < parseInt($("#"+type).val()); i++) {
            functionalUnits.push(new FunctionalUnit(type));
            if(booleanFunctionalUnits[number] == false) {
                booleanFunctionalUnits[number] = true;
            }
        }
    }

    function initFunctionalUnits() {
        addFunctionalUnits("multi_type",0);
        addFunctionalUnits("arith_int",1);
        addFunctionalUnits("arith_float",2);
        addFunctionalUnits("mem_int",3);
        addFunctionalUnits("mem_float",4);
    }

    function initInstructionsCycles(){
      instructionsCycles["ADD"] = parseInt($("#addCycles").val());
      instructionsCycles["ADDF"] = parseInt($("#addfCycles").val());
      instructionsCycles["SUB"] = parseInt($("#subCycles").val());
      instructionsCycles["SUBF"] = parseInt($("#subfCycles").val());
      instructionsCycles["MUL"] = parseInt($("#mulCycles").val());
      instructionsCycles["MULF"] = parseInt($("#mulfCycles").val());
      instructionsCycles["DIV"] = parseInt($("#divCycles").val());
      instructionsCycles["DIVF"] = parseInt($("#divfCycles").val());
      instructionsCycles["LD"] = parseInt($("#ldCycles").val());
      instructionsCycles["LW"] = parseInt($("#lwCycles").val());
      instructionsCycles["SD"] = parseInt($("#sdCycles").val());
      instructionsCycles["SW"] = parseInt($("#swCycles").val());
    }

    function reset() {
        Parser.reset();
        functionalUnits = [];
        lastIndex = 0;
        states = [];
        $('#keys-list').html('');
        $('#dependencies-list').html('');
        $('#graph').html('');
        $('#graph-keys').html('');
        $('#previousCycle').prop('disabled', true);
        $("#nextCycle").prop('disabled', false);
    }

    function runParser(_parser, lines) {
        Parser.setConfig(instructionsCycles,booleanFunctionalUnits);
        try {
            for (var i = 0; i < lines.length; i++)
                _parser.parse(lines[i]);
            return true;
        }
        catch(e) {
            return false;
        }
    }

    $(document).ready(function () {
        $("#previousCycle").prop('disabled', true);

        $("#about").click(function(){
            $.notify({
                    message: "Trabajo final de cátedra de <i>Arquitectura de Computadoras y Técnicas Digitales</i>. Implementado por <strong>Agustin Chirichigno</strong> y <strong>Damian Dominguez</strong>, a cargo de los docentes <strong>Ing. Martín Menchón</strong> e <strong>Mg. Marcerlo Tosini</strong>."
                },{
                    type: 'success'
            });
        });

        $('#fullpage').fullpage({
            menu: '#header',
            anchors:['firstPage', 'secondPage', 'thirdPage'],
            scrollingSpeed: 1000
        });

        var cpu;
        var graph;

        $("#init").click(function(){

            reset();
            var lines = editor.getSession().doc.getAllLines();
            initInstructionsCycles();
            initFunctionalUnits();

            if (runParser(Parser, lines)) {
              $("#graph").append('<div id="myDiagramDiv" class="canvas-graph"></div>');
              $("#graph-keys").append('<p><div class="square-key node-cc"></div> Nodo perteneciente al camino critico.</p>');
              $("#graph-keys").append('<p><div class="square-key node-no-cc"></div> Nodo que no pertene al camino critico.</p>');
              $("#dependencies-alert").alert("close");

                if(graph){
                  graph.reset();
                }
                graph = new GraphGo("myDiagramDiv");

                if((functionalUnits.length > 0) && (!Parser.getErrorNoUF())) {

                  $("#non-tables").alert("close");


                    UiManager.constructTables();

                    var instr = Parser.getStack().getInstructions();
                    cpu = new Processor(functionalUnits,graph);
                    for (var i in instr) {
                        $("#keys-list").append("<li><pre>" + instr[i].getId() + ": " + instr[i].constructInstruction() + "</pre></li>");
                        cpu.addNode(instr[i]);

                        //graph.addNode(instr[i].getId());

                        var dependencies = instr[i].getDependencies();
                        for (var dependency in dependencies) {
                            $("#dependencies-list").append("<li><pre>" + instr[i].getId() + " depende de " + dependencies[dependency].getId() + " por " + dependencies[dependency].getWriteRegister() + "</pre></li>");

                            //graph.addEdge(instr[i].getId(), dependencies[dependency].getId(),instr[i].cycles,80);
                        }
                    }
                    cpu.generateCriticalPath();
                    cpu.addNodeFinal();
                    graph.draw();
                    states = cpu.run();
                }
                else {
                     $.notify({
                        message: "Debes establecer al menos una unidad funcional para ejecutar las instrucciones."
                    },{
                        type: 'warning'
                    });
                }
            }
            else {
                $.notify({
                    message: "<strong>:'(</strong> ocurrió un error durante la etapa de parsing. Por favor, revisa tus instrucciones."
                },{
                    type: 'danger'
                });

            }
        });


        $("#nextCycle").click(function () {
            if($("#previousCycle").is(":disabled")){
                $("#previousCycle").prop('disabled', false);
            }

            if(lastIndex < states.length) {
                nextState = states[lastIndex]
                UiManager.addRows(nextState.getCycle(), nextState.getPlanned(), nextState.getSelected());
                lastIndex +=1;
                if(lastIndex == states.length){
                    $(this).prop('disabled', true);
                }
            }
            else {
                $(this).prop('disabled', true);
                $("#previousCycle").prop('disabled', false);
            }

        });

        $("#previousCycle").click(function () {
            if($("#nextCycle").is(":disabled")){
                $("#nextCycle").prop('disabled', false);
            }

            if (lastIndex > 0) {
                lastIndex -=1;
                UiManager.deleteLastRow();
                if(lastIndex == 0){
                    $(this).prop('disabled', true);
                }
            }
            else {
                $(this).prop('disabled', true);
                $("#nextCycle").prop('disabled', false);
            }

        });


    });
});
