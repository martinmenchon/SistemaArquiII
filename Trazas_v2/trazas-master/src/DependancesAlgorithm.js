import findCircuits from 'elementary-circuits-directed-graph';
 


// returns a matrix of the different edges you can use to get to a node
function getPaths(edges, nodesCount){
    /*
        Matriz de arreglo de objetos =>
            Obj = {
                latencia: int,
                offset: int
            }
    */
    let mat = new Array(nodesCount);
    for(var i = 0; i < nodesCount; i++){
        mat[i] = new Array(nodesCount);
        for(var j = 0; j < nodesCount; j++){
            mat[i][j] = [];
        }
    }
   for(const edgeId of edges.getIds()){
       const edge = edges.get(edgeId);
       console.log("agregando edge de ", edge.from - 1, " a ", edge.to - 1);
       (mat[edge.from - 1][edge.to - 1]).push({
           latencia: edge.latencia,
           offset: edge.offset
       });
   }
   return mat;
}

function getAllPaths(graph, cycle, actualIndex, acumOffset, offsetStack, pathStack, actualPath){
    /*
        - recorri todo si el inicio del ciclo es igual al final del ciclo
            - si llego al final pusheo offset acumulado
        - Voy a obtener todas las formas de llegar desde actualIndex hasta actualIndex + 1
            - Sumo offset a acumOffset
            - llamado recursivo con actualIndex + 1
            - Resto offset de acumOffset
    */
   if(actualIndex === cycle.length - 1){
       // llegue al final entonces pusheo en offsetStack
       offsetStack.push(acumOffset);
        // pussheo el camino actual d eoffsets
       pathStack.push([].concat(actualPath));
   }else{
       const ways = graph[cycle[actualIndex]][cycle[actualIndex + 1]]; // returns an array
       for(var i = 0; i < ways.length; i++){
           const acumOff = actualPath[actualPath.length-1] === undefined ? ways[i].offset : actualPath[actualPath.length-1]+ways[i].offset;
            actualPath.push(acumOff);
            getAllPaths(graph, cycle, actualIndex + 1, acumOffset + ways[i].offset, offsetStack, pathStack, actualPath);
            actualPath.pop();
       }
   }
}

function getCycles(dependancesGraph){
    //Creo una estructura mas amigable para trabajar el algoritmo
    /*let graph = dependancesGraph.nodes.map((node) => node.edges = dependancesGraph.edges.get({ 
        fields: ['id', 'from', 'to', 'offset', 'latencia'],
        filter: (edge) => {
            return (edge.from === node.id);
        }
    }))*/
    let adjacentList = [];
    let rep = new Array(dependancesGraph.nodes.getIds().length).fill(false);
    let myCycles = [];
    for(const edgeId of dependancesGraph.edges.getIds()){
        let edge = dependancesGraph.edges.get(edgeId);
        if(adjacentList[edge.from-1]=== undefined)
            adjacentList[edge.from-1] = [];
        if(edge.offset >=0 && adjacentList[edge.from-1].indexOf(edge.to-1) === -1){
            adjacentList[edge.from-1].push(edge.to-1)
        }
        if(edge.from === edge.to){
            if(rep[edge.to - 1] === false){
                myCycles.push([edge.from-1, edge.from-1]);
                rep[edge.to - 1] = true;
            }
        }
    }

    const copyGraph = adjacentList.slice();
    for(var g = 0; g < copyGraph.length; g++){
        if(!copyGraph[g]){
            copyGraph[g] = [];
        }
    }
    console.log("AH NAAAA, TIRABA ESA", copyGraph);
    myCycles = myCycles.concat(findCircuits(copyGraph));
    //myCycles.forEach(c => {c.pop();})
    //console.log("Cycles = ", myCycles);
    //console.log("MATRIZ DE EDGES ", getPaths(dependancesGraph.edges, dependancesGraph.nodes.getIds().length));
    //let trazas = [];
    //for(let i=1; i<adjacentList.length; i++){
        //printAllPaths(adjacentList, 0, i, myCycles, trazas);
    //}
    //console.log("Trazas = ", trazas);
    
    return myCycles;
}

function createSpaceGraph(dependancesGraph, spaceGraph, trazas){
    let nodeIds = dependancesGraph.nodes.getIds();
    

    //console.log(getTrazas(graph, nodeIds.length, N));

    /// Create nodes for GUI
    for(let j =1; j<10; j++){
        for(let i=1; i<nodeIds.length+1; i++){
            const node = {
                id: i.toString() + j.toString(),
                label:"S"+ i.toString() + j.toString(),
                x: j*70,
                y: (i-1)*70,
            };
            trazas.forEach(traza => {
                if(traza.nodes === undefined){
                    traza.nodes = new Array(traza.offset);
                    for(let k = 0; k< traza.offset; k++){
                        traza.nodes[k]=new Array()
                    }
                }
                for(let k = 0; k< traza.offset; k++){
                    const index = traza.ciclo.indexOf(i-1);
                    if( index !== -1 && index !== 0){
                        if( ( (j -1 -k - traza.caminoOffsets[index-1]) % traza.offset) === 0){
                            traza.nodes[k].push(node)
                        }
                    }
                    else if(index !== -1){
                        if( ( (j -1 -k ) % traza.offset) === 0){
                            traza.nodes[k].push(node)
                        }
                    }
                }
                })
            spaceGraph.nodes.add(node);
        };
    }

    console.log("Trazas = ", trazas)

    /// Create edges for GUI
    dependancesGraph.edges.forEach((edge) => {
        for(let i =1; i<10; i++){
            if(edge.offset < 0 && i + edge.offset >=0 ){
                spaceGraph.edges.add({
                    from: edge.from.toString() + i.toString(),
                    to: edge.to.toString() + (i+edge.offset).toString()
                })
            } 
            else if(edge.offset > 0 && i + edge.offset < 10) {
                spaceGraph.edges.add({
                    from: edge.from.toString() + i.toString(),
                    to: edge.to.toString() + (i+edge.offset).toString()
                })
            }
            else {  
                if(edge.offset===0){
                    spaceGraph.edges.add({
                        from: edge.from.toString() + i.toString(),
                        to: edge.to.toString() + i.toString()
                    })
                }
            }   
        }
    });
}

function createGraph(graphGUI, sentencias){ ///Tener cuidado, estamos admitiendo repetidos
    let variablesEscritas = [];
    sentencias.forEach((sentencia) => { //Creo una estructura auxiliar mas amigable que me de informacion sobre las variables escritas
        graphGUI.nodes.add({
            id: sentencia.id,
            label: "S"+ sentencia.id
        })
        if(variablesEscritas[sentencia.written]=== undefined)
            variablesEscritas[sentencia.written]= {};    
        if(variablesEscritas[sentencia.written.id_var] === undefined){

            variablesEscritas[sentencia.written.id_var] = [{
                sentencia: sentencia.id,
                offset: sentencia.written.offset,
                latencia: sentencia.latencia
            }];
        }
        else
            variablesEscritas[sentencia.written.id_var].push({
                sentencia: sentencia.id,
                offset: sentencia.written.offset,
                latencia: sentencia.latencia
            });
        })
    sentencias.forEach((sentencia) =>{
        sentencia.read.forEach((variableLeida) =>{
            if(variableLeida.id_var !== undefined){ //Si el formato de la variable esta bien
                if(variablesEscritas[variableLeida.id_var] !== undefined){ //Si alguien escribio la variable
                    variablesEscritas[variableLeida.id_var].forEach((node) =>{ //Node contiene informacion de quienes escribieron la variable leida
                        if(sentencia.id <= node.sentencia){ // DEPENDENCIA WAR con ciclos anteriores
                            if(RegExp("[A-M]").test(variableLeida.id_var)){ //Si es una variable la variableLeida
                                if(graphGUI.edges.get(node.sentencia.toString() + sentencia.id.toString() + node.latencia.toString()+ "1")===null){
                                    let cant =  graphGUI.edges.get({
                                        fields: ['id'],
                                        filter: edge => {
                                            return edge.from=== node.sentencia && edge.to === sentencia.id
                                        }
                                    }).length
                                    graphGUI.edges.add({
                                        id: node.sentencia.toString() + sentencia.id.toString() + node.latencia.toString()+ "1",
                                        //key: node.sentencia.toString() + sentencia.id.toString() ,
                                        from: node.sentencia,
                                        to:sentencia.id,
                                        offset: 1,
                                        latencia: node.latencia,
                                        label: "(" + node.latencia + ", 1)"  
                                        //smooth: {type: 'curvedCW', roundness: 0.5*cant}
                                    })
                                }
                            }
                            else if(node.offset - variableLeida.offset > 0){// Si es un arreglo la variableLeida y offsetWrite - offsetRead > 0 existe dependencia
                                if(graphGUI.edges.get(node.sentencia.toString() + sentencia.id.toString() + node.latencia.toString() +(node.offset-variableLeida.offset).toString())=== null){
                                    let cant =  graphGUI.edges.get({
                                        fields: ['id'],
                                        filter: edge => {
                                            return edge.from=== node.sentencia && edge.to === sentencia.id
                                        }
                                    }).length
                                    graphGUI.edges.add({
                                        id: node.sentencia.toString() + sentencia.id.toString() + node.latencia.toString() +(node.offset-variableLeida.offset).toString() ,
                                        // key: node.sentencia.toString() + sentencia.id.toString() ,
                                        from: node.sentencia,
                                        to: sentencia.id,
                                        offset:node.offset - variableLeida.offset,
                                        latencia: node.latencia,
                                        label: "("+ node.latencia + ", "+  (node.offset - variableLeida.offset) + ")",
                                        dashes: node.offset - variableLeida.offset <0 ? true : false
                                        //smooth: {type: 'curvedCW', roundness: 0.1* cant}
                                    })
                                }
                            } 
                        } 
                        else {//Dependencia RAW
                            if(graphGUI.edges.get(node.sentencia.toString() + sentencia.id.toString() +  node.latencia.toString()+ (node.offset-variableLeida.offset).toString())===null){
                                let cant =  graphGUI.edges.get({
                                    fields: ['id'],
                                    filter: edge => {
                                        return edge.from=== node.sentencia && edge.to === sentencia.id
                                    }
                                }).length

                                graphGUI.edges.add({
                                    id: node.sentencia.toString() + sentencia.id.toString() +  node.latencia.toString()+ (node.offset-variableLeida.offset).toString(),
                                    // key: node.sentencia.toString() + sentencia.id.toString() ,
                                    from: node.sentencia,
                                    to: sentencia.id,
                                    offset: node.offset - variableLeida.offset,
                                    latencia: node.latencia,
                                    label: "("+ node.latencia + ", "+  (node.offset - variableLeida.offset) + ")",
                                    dashes: node.offset - variableLeida.offset <0 ? true : false
                                    //smooth: {type: 'curvedCW', roundness: 0.1 * cant}
                                })
                            }
                        }
                    })
                }
            }
        })
        
    })
    console.log(graphGUI.edges)
}
function printNaturalLatency(cycle, sentencias, offset, n){
    let path = "";
    let total = 0;
    for(var i = 0; i < cycle.length - 1; i++){
        if(i == cycle.length - 2){
            path += (sentencias[cycle[i]].latencia).toString();
        }else{
            path += (sentencias[cycle[i]].latencia).toString() + " + ";
        }
        total += sentencias[cycle[i]].latencia;
    }
    var tiempoViejo = total;
    if(offset != 0 && offset != 1)
        total = total * (n / offset);
    else
        total = total * n;
    return {path, total, tiempoViejo};
}
function printNaturalCycle(cycle, offset, n){
    let path = "(";
    for(var i = 0; i < cycle.length - 1; i++){
        if(i == cycle.length - 2){
            path += "S" + (cycle[i] + 1).toString();
        }else{
            path += "S" + (cycle[i] + 1).toString() + " + ";
        }
    }
    path += ") * " + n;
    if(offset != 0 && offset != 1){
        path += "/" + offset;
    }
    return path;
}

function getTrazas(edges, nodes, cycles, sentencias, n){
    let ciclos = [];
    /*
        camino,
        suma,
        total
    */
    // recorrer todos los ciclos
    //function getAllPaths(graph, cycle, actualIndex, acumOffset, offsetStack){
    const graphMat = getPaths(edges, nodes.getIds().length);
    for(var i = 0; i < cycles.length; i++){
        var acumOffset = 0;
        var actualIndex = 0;
        var offsetStack = [];
        var pathStack = [];
        var actualPath = [];
        getAllPaths(graphMat, cycles[i], actualIndex, acumOffset, offsetStack, pathStack, actualPath);
        for(var j = 0; j < offsetStack.length; j++){
            var lat = printNaturalLatency(cycles[i], sentencias, offsetStack[j], n);
            ciclos.push({
                camino: printNaturalCycle(cycles[i], offsetStack[j], n),
                latencias: lat.path,
                total: Math.floor(lat.total * 100) / 100,
                caminoOffsets: JSON.parse(JSON.stringify(pathStack[j])),
                ciclo: cycles[i],
                offset: offsetStack[j],
                tiempo: lat.tiempoViejo
            });
        }
    }
    return ciclos;
}
export {
    createGraph,
    createSpaceGraph,
    printNaturalCycle,
    printNaturalLatency,
    getTrazas,
    getCycles
}
/*
S1	N[i -1] = O[i -2] + P[i -3]
S2	A = A * A + N[i -1]
S3	Q[i] = N[i] * A
S4	P[i] = Q[i + 2] / 2
S5	O[i] = Q[i -1] * 5

ejemplo 

let variablesEscritas = {};
sentencias.forEach((sentencia) => {
    graphAux.push([]);
    graph.nodes.push({
        id: sentencia.id,
        label: "S"+ sentencia.id
    })
    if(variablesEscritas[sentencias.write]=== undefined)
        variablesEscritas[sentencias.write]= {};    
    if(variablesEscritas[sentencia.write.id_var] === undefined)
        variablesEscritas[sentencia.write.id_var] = [{
                                                        sentencia: sentencia.id,
                                                        offset: sentencia.write.offset,
                                                        latencia: sentencia.latencia
                                                    }];
    else
        variablesEscritas[sentencia.write.id_var].push({
                                                        sentencia: sentencia.id,
                                                        offset: sentencia.write.offset,
                                                        latencia: sentencia.latencia
                                                        });
})
sentencias.forEach((sentencia) =>{
    sentencia.read.forEach((variableLeida) =>{
        variablesEscritas[variableLeida.id_var].forEach((node) =>{ //Node contiene informacion de quienes escribieron la variable leida
            if(sentencia.id <= node.sentencia){ // DEPENDENCIA WAR con ciclos anteriores 
                if(RegExp("[A-M]").test(variableLeida.id_var)){ //Si es una variable la variableLeida
                    if(graphAux[node.sentencia-1].indexOf(sentencia.id-1)=== -1)
                        graphAux[node.sentencia-1].push(sentencia.id-1);
                    graph.edges.push({
                        id: node.sentencia.toString() + sentencia.id.toString() ,
                        key: node.sentencia.toString() + sentencia.id.toString() ,
                        from: node.sentencia,
                        to:sentencia.id,
                        offset: 1,
                        lable: "(" + node.latencia + ", 1)"  
                    })
                }
                else if(node.offset - variableLeida.offset > 0){// Si es un arreglo la variableLeida y offsetWrite - offsetRead > 0 existe dependencia
                    if(graphAux[node.sentencia-1].indexOf(sentencia.id-1)=== -1)
                         graphAux[node.sentencia-1].push(sentencia.id-1);    
                    graph.edges.push({
                        id: node.sentencia.toString() + sentencia.id.toString() ,
                        key: node.sentencia.toString() + sentencia.id.toString() ,
                        from: node.sentencia,
                        to: sentencia.id,
                        offset:node.offset - variableLeida.offset,
                        label: "("+ node.latencia + ", "+  (node.offset - variableLeida.offset) + ")"
                    })
                } 
            } 
            else {//Dependencia RAW
                if(graphAux[node.sentencia-1].indexOf(sentencia.id-1)=== -1)
                    graphAux[node.sentencia-1].push(sentencia.id-1);
                graph.edges.push({
                    id: node.sentencia.toString() + sentencia.id.toString() ,
                    key: node.sentencia.toString() + sentencia.id.toString() ,
                    from: node.sentencia,
                    to: sentencia.id,
                    offset: node.offset - variableLeida.offset,
                    label: "("+ sentencia.latencia + ", "+  (node.offset - variableLeida.offset) + ")"
                })
            }
        })
    })
    /*
    S1: A[i] = 3+2;         
    S2: B[i] = A[i] *2      

    S1 -> (0) S2

    S1: B[i] = A[i] *2*
    S2: A[i] = 3+2;

    No hay dependencia

    Por ende, mismo modificador, primero write despues read hay dependencia, caso contrario no existe
    Offset = offsetWrite - offsetRead
    S1: B = B*2
    S1-> (1) S1
  
    S1: A[i] = B *2
    S2: B = 3;

    S2 -> (1) S1

    S1: B = 3;
    S2: A[i] = B *2 
    S1 -> (0) S2

    Por ende, misma variable, primero write despues read, hay dependencia offset = offsetWrite - offsetRead
    primero read despues write hay dependencia offset = offsetWrite - offsetRead + 1


    S1: A[i] = E[i-1] *2 
    S2: E[i] = 45/A[i-1]

    S1-> (1) S2 
    S2-> (1) S1

    S1: A[i-1] = E[i-2] *2
    S2: E[i-1] = A[i-1] +3
    
    S1-> (0) S2
    S2-> (1) S1

    Por ende, distinto modificador primero write despues read offset = offsetWrite - offserRead
    distinto modificador primero read despues write offset = offsetWrite - offsetRead

    S1: A[i+1] = 23
    S2: B[i] = A[i] * 23

    S1-> (1) S2

    Por ende distinto modificador primero write despues read offset = offsetWrite - offsetRead 

    S1: A[i]= E[i-1] - 3
    S2: E[i-1] = 23/2

    S2-> (1) S1


    Distinto modificador
    
});

// Fijarse si vamos a necesitar esto dado que nodes y edges seran ahora del tipo dataSet de vis js
function existe(obj, objects){
    for(var i = 0; i < objects.length; i++){
      if(obj.id === objects[i].id)
        return true;
    }
    return false;
  }
function keepUnique(edges){
    aReturn = []
    edges.forEach((elem) => {
      if(!existe(elem, aReturn)){
        aReturn.push(elem);
      }
    });
    return aReturn;
  }

  graph.edges = keepUnique(graph.edges);
  console.log("Graph for UI");
  console.log(graph);
  console.log("Graph for algorithm");
  console.log(graphAux);


  getCryclesUtil = (graph, v, visited, recStack, cicles, path) => {
      // Mark current node as visited and  
      // adds to recursion stack 
      visited[v] = true;
      recStack[v] = true;
      
      path.push(v);
      // Recur for all neighbours 
      // if any neighbour is visited and in  
        // recStack then graph is cyclic 
      for(const neighbour of graph[v]) {
        if (visited[neighbour] === false) {
            getCryclesUtil(graph, neighbour, visited, recStack, cicles, path);
        }
        else {
            if (recStack[neighbour] === true) {
                path.push(neighbour);
                cicles.push(path.slice());
                path.pop();
            }
        }
      };
      
      // The node needs to be poped from  
      // recursion stack before function ends 
      path.pop();
      recStack[v] = false
    } 

// Returns true if graph is cyclic else false 
getCycles = (graph) => {

    let path=[];
    let cicles = [];
    visited =  new Array(graph.length).fill(false); 
    recStack =  new Array(graph.length).fill(false);
    for(node=0; node< graph.length; node++){
        if (visited[node] === false) {
            getCryclesUtil(graph,node,visited,recStack, cicles, path);
        }
    } 
    return cicles;
    } 

console.log("IsCyclick graphaux");
console.log(getCycles(graphAux));
*/

