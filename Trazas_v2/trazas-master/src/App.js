import React, {Fragment} from 'react';
import './index.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import DependancesGraph from './DependancesGraph';
import SpaceGraph from './SpaceGraph';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PreviewComponent from './PreviewComponent.js';
import LatencyPaper from './LatencyPaper';
import { createGraph, createSpaceGraph, printNaturalCycle, printNaturalLatency, getTrazas, getCycles} from './DependancesAlgorithm.js';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '7px',
    marginBottom: '4px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '70%'
  },
  button: {
    margin: theme.spacing(1, 0, 0, 0),
  },
}));


const vars = (b) => {
  // if b is true get first half of alphabet
  var arVar = []
  var start = (b) ? 65 : 78;
  var end = b ? 77 : 90;
  for(var i = start; i <= end; i++){
    arVar.push(String.fromCharCode(i));
  }
  return arVar;
  // <MenuItem value="10">Ten</MenuItem>
};

const canClick = (value, lastOp) => {
  return (value === 'variable' && (lastOp == 'arreglo' || lastOp == 'variable' || lastOp == 'constante'))
      || (value === 'arreglo' && (lastOp == 'arreglo' || lastOp == 'variable' || lastOp == 'constante'))
      || (value === 'constante' && (lastOp == 'arreglo' || lastOp == 'variable' || lastOp == 'constante'))
      || (value === 'operacion' && lastOp == 'operacion')
      || (value === 'operacion' && lastOp === 0);
};
const AddOps = (props) => {
  const classes = useStyles();

  const [actualAssign, setActualAssign] = React.useState('');
  const addAssignAr = function(where){
      var inside = index > 0 ? "i + " + index.toString() : "i " + index.toString(); 
      if(index !== 0 && index!== "0"){
        setActualAssign(where.concat("[" + inside + "] = "));
        props.parentCallback(where.concat("[" + inside + "] = "));
      }else {
        setActualAssign(where.concat("[i] = "));
        props.parentCallback(where.concat("[i] = "));
      }
  }
  const addAssign = function(where){
      setActualAssign(where.concat(" = "));
      props.parentCallback(where.concat(" = "));
  }

  const addNewOp = (valor) => {
    setActualAssign(actualAssign + valor + " ");
    props.parentCallback(actualAssign + valor + " ");
    
  };
  // second fiedset
  const [value, setValue] = React.useState('constante');
  // first fieldset
  const [assign, setAssign] = React.useState('variable');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [letter, setLetter] = React.useState('A');
  const handleChangeVarAr = (event) => {
    setLetter(event.target.value);
  };
  const [letterA, setLetterA] = React.useState('N');
  const handleChangeVarArA = (event) => {
    setLetterA(event.target.value);
  };
  const handleChangeAssign = (event) => {
    setAssign(event.target.value);
  };

  const [op, setOp] = React.useState('+');
  const handleChangeOp = (event) => {
    setOp(event.target.value);
  };
  const [index, setIndex] = React.useState(0);
  // state for literal numbers
  const [cte, setCte] = React.useState(0); 
 
  const [lastOp, setLastOp] = React.useState(0);

  // keep actual sentence updated
  const [latency, setLatency] = React.useState("="); 
  const [written, setWritten] = React.useState({id_var: '0', offset: 0});
  const [read, setRead] = React.useState(null);

   //props.callBackUpdateTempSentence
  React.useEffect(() => {
    props.callBackUpdateTempSentence(read, written, latency);
  },
  [written, latency]);
  React.useEffect(() => {
    props.callBackUpdateTempSentenceRead(read);
  },
  [read]);

    return (
      <Paper className={classes.paper} elevation={3} height="100%">
        <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
          Asignacion
        </Typography>
          <FormControl style={{display: props.formVisibility ? 'none' : 'block'}}  component="fieldset"  className={classes.formControl}>
            
            <FormLabel component="legend">Seleccione elemento a agregar</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz" value={assign} onChange={handleChangeAssign}>
              <FormControlLabel value="variable" control={<Radio />} label="Variable" />
              <FormControlLabel value="arreglo" control={<Radio />} label="Arreglo" />
            </RadioGroup>
            {/* <FormHelperText>Hola</FormHelperText> */}

            <Paper width={1} maxWidth="xl" className={classes.paper} style={{display: assign === 'variable' ? 'block' : 'none'}} elevation={3} >
              <FormControl style={{minWidth: '100%'}}> 
                <InputLabel id="label">Nombre</InputLabel>
                <Select labelId="label" id="select" value={letter} onChange={handleChangeVarAr}>
                    {
                      vars(true).map(e => <MenuItem value={e}>{e}</MenuItem>)
                    }
                </Select>
              </FormControl>
            </Paper>
            <Paper width={1} className={classes.paper} style={{display: assign === 'arreglo' ? 'block' : 'none'}} elevation={3} >
              <FormControl style={{minWidth: '30%'}}> 
                <InputLabel id="label">Nombre</InputLabel>
                <Select labelId="label" id="select" value={letterA} onChange={handleChangeVarArA}>
                    {
                      vars(false).map(e => <MenuItem value={e}>{e}</MenuItem>)
                    }
                </Select>
              </FormControl>
              <TextField
                style={{maxWidth: '70%'}}
                id="standard-number"
                label="Modificador"
                type="number"
                value={index}
                onChange={(event) => {
                  setIndex(event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
            <Button fullWidth type="submit" width='100%' onClick={
              () => {
                setLastOp(0);
                setLatency("=");
                if(assign === 'arreglo'){
                  addAssignAr(letterA) 
                  // keep state updated
                  setWritten({
                    id_var: letterA,
                    offset: index
                  });
                }else{
                  addAssign(letter); 
                  setWritten({
                    id_var: letter,
                    offset: 0
                  });
                }
                // mostrar menu inferior
                props.formVisibilityCallBack(true);
              }
            } variant="outlined" color="primary" className={classes.button}>
              Agregar Asignacion
            </Button>
          </FormControl>
        
          <FormControl style={{display: props.formVisibility ? 'block' : 'none'}} component="fieldset"  className={classes.formControl}>
            
            <FormLabel component="legend">Seleccione elemento a agregar</FormLabel>
            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
              <FormControlLabel value="constante" control={<Radio />} label="Constante" />
              <FormControlLabel value="variable" control={<Radio />} label="Variable" />
              <FormControlLabel value="arreglo" control={<Radio />} label="Arreglo" />
              <FormControlLabel value="operacion" control={<Radio />} label="Operacion" />
            </RadioGroup>
            {/* <FormHelperText>Hola</FormHelperText> */}

            <Paper width={'auto'} className={classes.paper} style={{display: value === 'constante' ? 'block' : 'none'}} elevation={3} >
            <TextField
              value = {cte}
              onChange={(event) => {setCte(event.target.value)}}
              style={{minWidth: '100%'}}
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Paper>
            <Paper width={1} maxWidth="xl" className={classes.paper} style={{display: value === 'variable' ? 'block' : 'none'}} elevation={3} >
              <FormControl style={{minWidth: '100%'}}> 
                <InputLabel id="label">Nombre</InputLabel>
                <Select labelId="label" id="select" value={letter} onChange={handleChangeVarAr}>
                    {
                      vars(true).map(e => <MenuItem value={e}>{e}</MenuItem>)
                    }
                </Select>
              </FormControl>
            </Paper>
            <Paper width={1} className={classes.paper} style={{display: value === 'arreglo' ? 'block' : 'none'}} elevation={3} >
              <FormControl style={{minWidth: '30%'}}> 
                <InputLabel id="label">Nombre</InputLabel>
                <Select labelId="label" id="select" value={letterA} onChange={handleChangeVarArA}>
                    {
                      vars(false).map(e => <MenuItem value={e}>{e}</MenuItem>)
                    }
                </Select>
              </FormControl>
              <TextField
                value={index}
                onChange={(event) => {setIndex(event.target.value)}}
                style={{maxWidth: '70%'}}
                id="standard-number"
                label="Modificador"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
            <Paper width={1} className={classes.paper} style={{display: value === 'operacion' ? 'block' : 'none'}} elevation={3} >
              <FormControl style={{minWidth: '100%'}}> 
                  <InputLabel id="label">Nombre</InputLabel>
                  <Select labelId="label" id="select" value={op} onChange={handleChangeOp}>
                      <MenuItem value='+'>+</MenuItem>
                      <MenuItem value='-'>-</MenuItem>
                      <MenuItem value='*'>*</MenuItem>
                      <MenuItem value='/'>/</MenuItem>
                  </Select>
                </FormControl>
            </Paper>
            <Button fullWidth type="submit" disabled={canClick(value, lastOp)} variant="outlined" onClick={() => {
                setLastOp(value);
                if(value === 'variable'){
                  
                  addNewOp(letter)
                  // agregar a read
                  setRead({
                    id_var: letter,
                    offset: 0
                  });
                }else{
                  if(value === 'constante'){
                    addNewOp(cte);
                  }else{
                    if(value === 'arreglo'){
                      var inside = index > 0 ? "i + " + index.toString() : "i " + index.toString();
                      if(index !== 0 && index!=="0"){
                        addNewOp(letterA + "[" + inside + "]"); 
                      }else{
                        addNewOp(letterA + "[i]");   
                      }
                      // agregar a read
                      setRead({
                        id_var: letterA,
                        offset: index
                      });
                    }else{
                      // operacion
                      addNewOp(op);
                      setLatency(latency + op);
                    }
                  }
                }
                 // no se por que tengo q mandar esa funcion lambda ahi
                // ACA LLAMA
            }} color="primary" className={classes.button}>
              Agregar Operacion
            </Button>
          </FormControl>
        
      </Paper>                   
    );
};

function createData(op, sentence) {
  return { op, sentence };
}


export default class App extends React.Component{

  /*
    State for functional component
  */
  state = {
    valorAsignacion: '', // valor  de la asignacion sin completar o completada
    asignaciones: [], // se guarda el valor natural de la asignacion
    formVisibilityControl: false, // estado de la UI
    sentenciaActual: 1, // numero de sentencias actuales
    sentencias: [], // se almacenan las sentencias para ser analizadas por el algoritmo
    sentenciaTemporal: {
      id: 0,
      latencia: " ",
      written: null,
      read: [],
    }, // sentencia no completada aun,
    latencias:{ //Estado de las latencias del componente LatencyPaper
      asignacion: 1,
      suma: 2,
      resta: 3,
      multiplicacion: 4,
      division: 5
    },
    /*
      id_var: letterA,
      offset: index
    */
    read: [], // leidos actuales
    written: null, // escrito actual
    dependancesGraphNodes: null, // No pude hacerlo como graph { nodes, edges } porque setState me rompia
    dependancesGraphEdges: null,
    dependancesAlgorithm:{
      graphAlgorithm: [],
      variablesLeidas: []
    },
    spaceGraphNodes: null,
    spaceGraphEdges: null,
    n: 1000,
    checked: false, // shows latencies paper
    checkedSecond: false, // shows graphs and traces
    showPreview: true,
    cycles: [],
    changeTrazaState: 0,
    trazas: [{tiempo: 0, total: 1}],
    noTrazas: false,
    aceleracion: {
      tiempoViejo: 0,
      tiempoNuevo: 1
    },
    editOpNumber: null,
    tiempoSecuencial: 1
  };

  
  callBackSetRead = (read) => {
    this.setState({
      read: this.state.read.concat(Object.assign({}, read)),
    }, () => {
    });
  };
  callBackSetWritten = (written) => {
    this.setState({written: written});
  };
  //

  callBackFormVisibilityControl = (show) => {
    this.setState({formVisibilityControl: show});
  };
  callBackValorAsignacionChange = (childData) =>{
      this.setState({
        valorAsignacion: childData,
        showPreview: true
      });
      
  };
  // no se si se usa pero lo dejo por las dudas AAJA
  callBackUpdatePreview = (newOp) => {
      this.setState({valorAsignacion: this.state.valorAsignacion.concat(" " + newOp + " ")});
  };
  ///////////////
  callBackUpdateSentencesTemp = (read, write, latency) => {
    this.setState({
      sentenciaTemporal: {
        id: this.state.sentenciaActual,
        latencia: latency,
        latenciaString: latency,
        written: Object.assign({}, write),
      } 
    })
  };
  callBackUpdateSentencesRead = (read) => {
    this.setState({
      sentenciaTemporal: {
        read: this.state.read.concat(Object.assign({}, read)),
      }
    });
    
  };

  /*
    FUNCIONES PARA EDITAR
  */ 
  habilitarEdicion = (idOp) => {
    this.setState({editOpNumber: idOp});
  }
  cancelarEdicion = () => {
    this.setState({
      formVisibilityControl: false,
      editOpNumber: null,
      sentenciaTemporal: {
        id: 0,
        latencia: " ",
        written: null,
        read: [],
      },
      valorAsignacion: ''
    });
  }
  /*
    FUNCIONES PARA EDITAR
  */ 
  // callback to definitely add the sentence
  callBackAddSentence = () => {
    if(!this.state.editOpNumber){
      this.state.sentenciaTemporal.read= this.state.read;
      this.setState({
      asignaciones: this.state.asignaciones.concat(
        {
          sentence: this.state.valorAsignacion,
          op: this.state.sentenciaActual,
        }
        ),
        sentenciaActual: this.state.sentenciaActual+1,
        //sentencias: this.state.sentencias.concat(Object.assign({}, this.state.sentenciaTemporal)),
        sentencias: [...this.state.sentencias, this.state.sentenciaTemporal], //Analizar mas profundamente si anda, sino hay que usar el object assign
        formVisibilityControl: false,
        valorAsignacion: '',
        read: []
      },
      // callback
      () => {
        this.setState({sentenciaTemporal: null});
        console.log("PERROOOOO", this.state.asignaciones);
      });
    }else{
      // op debe ser distinta
      var opNumber = this.state.editOpNumber;
      this.state.sentenciaTemporal.read= this.state.read;
      this.state.sentenciaTemporal.id = opNumber;
      
      //asignaicones debe cambiar
      var deepCloneAsig = JSON.parse(JSON.stringify(this.state.asignaciones));
      deepCloneAsig[opNumber - 1] = {sentence: this.state.valorAsignacion, op: opNumber};
      // sentencia actual no cambia
      //sentencias cambia
      var deepCloneSenten = JSON.parse(JSON.stringify(this.state.sentencias));
      deepCloneSenten[opNumber - 1] = JSON.parse(JSON.stringify(this.state.sentenciaTemporal));
      this.setState({
      asignaciones: deepCloneAsig,
        //sentencias: this.state.sentencias.concat(Object.assign({}, this.state.sentenciaTemporal)),
        sentencias: deepCloneSenten, //Analizar mas profundamente si anda, sino hay que usar el object assign
        formVisibilityControl: false,
        valorAsignacion: '',
        read: []
      },
      // callback
      () => {
        this.setState({sentenciaTemporal: null});
        console.log(this.state.sentencias);
      });
    }
    
      

  };

  getNodesDependancesGraph(nodes){
    this.setState({dependancesGraphNodes: nodes});
  }

  getEdgesDependancesGraph(edges){
    this.setState({dependancesGraphEdges: edges } );
  }

  getNodesSpaceGraph(nodes){
    this.setState({spaceGraphNodes : nodes});
  }
  getEdgesSpaceGraph(edges){
    this.setState({spaceGraphEdges : edges});
  }

  getLatency(sentence){
    let suma =0;
    
    for(let op of sentence.latenciaString){
      switch(op){
        case '=':
          op=this.state.latencias.asignacion;
          break;
        case '+':
          op=this.state.latencias.suma;
          break;
        case '-':
          op=this.state.latencias.resta;
          break;
        case '*':
          op=this.state.latencias.multiplicacion;
          break;
        case '/':
          op=this.state.latencias.division;
          break;
        default:
          op=0;
            break;
      }
      suma+= op;
    }
    sentence.latencia = suma;
  }

  classes = {
    paper: {
      padding: '7px',
      marginBottom: '4px'
    },
    formControl: {
      margin: '8px',
      minWidth: '70%'
    },
    button: {
      margin: '8px 8px 0px 0px',
    },
  };
  showLatencies = () => {
    if(this.state.checked)
      this.setState({checked: false});
    else
    this.setState({checked: true});
  };
  // Importar y exportar
  download = (filename, text) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  exportar = () => {
    var exportObject = {
      asignaciones: this.state.asignaciones,
      sentencias: this.state.sentencias,
    };
    exportObject = JSON.stringify(exportObject);
    this.download("traza" + Date.now() + ".txt", exportObject);
  };
  importar = (event) => {
    var file = event.target.files[0];
    var textType = /text.*/;
    // ranciolate
    var that = this;
    if (file.type.match(textType)) {
      var reader = new FileReader();
      reader.onload = function(e) {
        //alert(reader.result);
        // leyo bien
        var readObject = JSON.parse(reader.result);
        that.setState({
          asignaciones: readObject.asignaciones,
          sentencias: readObject.sentencias,
          sentenciaActual: readObject.asignaciones.length + 1,
        }, () => {
          //alert(that.state.sentenciaActual);
        });
      }
      reader.readAsText(file);	
    } else {
      alert("File not supported!");
    }
    
  };
  tiempoSecuencial = () => {
    var total = 0;
    for(var i = 0; i < this.state.sentencias.length; i++){
      total += this.state.sentencias[i].latencia;
    }
    
    return this.state.n * total;
  };
  // Importar y exportar
  handleChangeOnTrazaRadio = (event) => {
    //console.log(event.target.value);
    const oldIndex = this.state.changeTrazaState;
    const newIndex = event.target.value;
    let oldNodes = []
    let newNodes = []
    this.state.trazas[oldIndex].nodes.forEach(group => {
      group.forEach(node => {
                        node.group = 'a'
                    })  
      oldNodes = [...oldNodes, ...group]
      }
      )
    this.state.spaceGraphNodes.update(oldNodes)
    let letter = 'b'
    this.state.trazas[newIndex].nodes.forEach(group => {
      group.forEach(node => {
        node.group = letter
      })
      letter = letter.concat('b');
      newNodes = [...newNodes, ...group]
    })
    this.state.spaceGraphNodes.update(newNodes)
    this.setState({changeTrazaState: event.target.value});
  };
  render(){
    return (
      <>
        <CssBaseline />
        <div className="App">
          
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Trazas
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <br />
            <Container>
              <Grid
                container
                justify="center"
                alignItems="flex-start"
                spacing={3}
              >
                  <Grid item xs={3} height="100%" >
                    <AddOps formVisibility={this.state.formVisibilityControl} 
                            formVisibilityCallBack = {this.callBackFormVisibilityControl}
                            parentCallback={this.callBackValorAsignacionChange.bind(this)} 
                            callBackUpdateTempSentence={this.callBackUpdateSentencesTemp}
                            callBackUpdateTempSentenceRead={this.callBackSetRead}
                            
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Collapse in={this.state.showPreview}> 
                      <Paper style={this.classes.paper} elevation={3} >
                          <PreviewComponent callBackAdd={this.callBackAddSentence} cancelarEdicion={this.cancelarEdicion} valor={this.state.valorAsignacion}></PreviewComponent>
                      </Paper>
                    </Collapse>
                    <Paper style={this.classes.paper} elevation={3} >
                      <TableContainer component={Paper}>
                        <Table style={this.classes.tables} size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow>
                              <TableCell>
                               <TextField
                                  value={this.state.n}
                                  style={{maxWidth: '75px'}}
                                  id="standard-number"
                                  label="Ciclos"
                                  type="number"
                                  onChange={(event) => this.setState({n:event.target.value < 0 ? 0 : event.target.value})}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                               />
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {this.state.asignaciones.map((row) => (
                              <TableRow key={row.op} style={{background: row.op == this.state.editOpNumber ? '#EEEEEE' : '#FFF'}}>
                                <TableCell component="th" scope="row">
                                  S{row.op}
                                </TableCell>
                                <TableCell align="left">{row.sentence}</TableCell>  
                                <TableCell style={{padding: '0px', width: '3px'}}>
                                  
                                  <Button 
                                  onClick={() => {
                                    // clone array os sentences
                                    var sentencias = JSON.parse(JSON.stringify(this.state.sentencias));
                                    // clone array of assigns
                                    var asignaciones = JSON.parse(JSON.stringify(this.state.asignaciones));
                                    console.log(sentencias.pop());
                                    console.log(asignaciones.pop());

                                    this.setState({
                                      sentencias: sentencias,
                                      asignaciones: asignaciones,
                                      sentenciaActual: sentencias.length + 1
                                    }, 
                                    () => {
                                      console.log(this.state.sentencias);
                                    });
                                    //alert(row.op);
                                  }}
                                  style={{padding: '1px', display: this.state.asignaciones.length === row.op ? 'block' : 'none'}} color="secondary">
                                    ELIMINAR
                                  </Button>
                                  <Tooltip leaveDelay={0} style={{textAlign: 'center'}} title="Al editar debe agregar una sentencia nueva que se posicionara en este lugar">
                                    <Button onClick={
                                      () => {this.habilitarEdicion(row.op)}
                                    } style={{padding: '1px', display: this.state.asignaciones.length !== row.op && row.op !== this.state.editOpNumber ? 'block' : 'none'}} color="primary">
                                      EDITAR
                                    </Button>
                                  </Tooltip>
                                  <Button onClick={
                                      () => {
                                        this.cancelarEdicion();
                                      } 
                                    } style={{padding: '1px', display: row.op == this.state.editOpNumber ? 'block' : 'none'}} color="primary">
                                      X
                                    </Button>
                                </TableCell>          
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Button fullWidth type="submit" variant="outlined" align="center"color="primary"  className={this.classes.button} 
                        onClick={() => {
                          //console.log(JSON.stringify(this.state.sentencias));
                          this.state.dependancesGraphNodes.clear(); //Limpio el grafo de dependencias para recalcularlo
                          this.state.dependancesGraphEdges.clear();
                          //this.setState({sentencias: sentencesExample});
                           // Codigo de agregar sentencia a los grafos
                           this.state.sentencias.forEach( (s) => {this.getLatency(s)}); //Setteo la latencia de cada sentencia en base a la cadena de operaciones
                           //console.log(this.state.sentencias);
                          createGraph({ //Llamado a la funcion addSentence de DependancesAlgorithm
                            nodes: this.state.dependancesGraphNodes,
                            edges: this.state.dependancesGraphEdges
                          }, this.state.sentencias);
                          /// Fin codigo de agregar sentencia a grafos
                          this.setState({
                            showPreview: false
                          });

                          this.state.spaceGraphNodes.clear();//Limpio el grafo espacial para recalcularlo
                          this.state.spaceGraphEdges.clear();
                          
                          var ciclos = getCycles({ //Llamado a la funcion addSentence de DependancesAlgorithm
                            nodes: this.state.dependancesGraphNodes,
                            edges: this.state.dependancesGraphEdges
                          });
                          this.setState({
                            cycles: ciclos,
                            
                          },
                          () => {
                            
                            var tempTraza = getTrazas(this.state.dependancesGraphEdges, this.state.dependancesGraphNodes, this.state.cycles, this.state.sentencias, this.state.n).sort((a, b) => {
                              return b.total - a.total;
                            });
                            this.setState({
                              trazas: this.state.cycles.length > 0 ? tempTraza : [{tiempo: 0, total: 1}],
                              checkedSecond: this.state.cycles.length > 0,
                              noTrazas: !(this.state.cycles.length > 0)
                            }, () => {
                              createSpaceGraph({ //Llamado a la funcion addSentence de DependancesAlgorithm
                                nodes: this.state.dependancesGraphNodes,
                                edges: this.state.dependancesGraphEdges
                              }, {
                                nodes: this.state.spaceGraphNodes,
                                edges: this.state.spaceGraphEdges
                              }, this.state.trazas);
                              console.log("TRAZEANAAAAS ", this.state.sentencias);
                              this.setState({
                                tiempoSecuencial: this.tiempoSecuencial()
                              });
                            });
                          });
                          
                       


                        }}>
                              Calcular trazas
                        </Button>
                        <Collapse in={this.state.noTrazas}> 
                          <div style={{
                            background: '#FF9DB7',
                            fontWeight: 'bold',
                            color: '#C20035',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            textAlign: 'center',
                            marginTop: '5px'
                          }}>
                            No se han encontrado trazas
                          </div>
                        </Collapse>
                    </Paper>
                  </Grid>
                  <Grid item xs={2} >
                    <Paper style={this.classes.paper} elevation={3} > 
                        <Fragment>
                        <input
                          accept="text/*"
                          id="contained-button-file"
                          style={{display: 'none'}}
                          type="file"
                          onChange={(event) => {
                            this.importar(event);
                          }}
                        />
                        <label htmlFor="contained-button-file">
                          <Button fullWidth variant="outlined" component="span" align="center" color="primary"  className={this.classes.button}
                          onClick={() => {
                            console.log(JSON.parse(this.state.sentencias));
                          }}>
                              Importar
                          </Button>
                        </label>
                        </Fragment>
                      <Button fullWidth type="submit" variant="outlined" align="center" color="primary"  className={this.classes.button}
                        onClick={() => {
                          this.exportar();
                        }}>
                        Exportar
                      </Button> 
                    </Paper>
                    <Paper style={this.classes.paper} elevation={3}>
                    <FormControlLabel
                      control={<Switch checked={this.state.checked} onChange={this.showLatencies} />}
                      label="Latencias"
                      width="100%"
                    />
                    <Collapse in={this.state.checked}>
                      <LatencyPaper classes={this.classes} latencias={this.state.latencias} onChangeTxtFieldLatency = {(op, latency) => {
                                                                                      if (latency < 0)
                                                                                          this.setState( {latencias: {...this.state.latencias, [op]: 0} });
                                                                                      else if (latency > 10)
                                                                                          this.setState( {latencias:{...this.state.latencias,  [op]: 10 }});
                                                                                      else
                                                                                          this.setState( {latencias: {...this.state.latencias,  [op]: parseInt(latency) }});
                                                                                      }
                                                                                    } />
                    </Collapse>
                    </Paper>
                    </Grid>

                    
              </Grid>
              <Collapse in={this.state.checkedSecond}>
                <Grid containter 
                container
                justify="center"
                alignItems="flex-start"
                spacing={3}
                style={{
                  marginTop: '10px'
                }}
                >
                <Grid item xs={6}> 
                    <Paper style={this.classes.paper} elevation={3} >
                      <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                        Trazas
                      </Typography>   
                      <RadioGroup onChange={this.handleChangeOnTrazaRadio}> 
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Aceleracion</b></TableCell>
                            <TableCell><b>Resultado</b></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                              {this.state.tiempoSecuencial}/({this.state.trazas[0].tiempo}*{this.state.n})
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {Math.floor((this.state.tiempoSecuencial/(this.state.trazas[0].tiempo*this.state.n))* 100) / 100}
                            </TableCell>
                          </TableRow> 
                        </TableBody>
                      </Table>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Camino</b></TableCell>
                            <TableCell align="right"><b>Suma</b></TableCell>
                            <TableCell align="right"><b>Total</b></TableCell>
                            <TableCell align="right"><b>Ver</b></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          
                        {
                          this.state.trazas.map((e, indice) => 
                            (
                            <TableRow style={{background: (indice === 0) ? '#FFD2DE' : '#FFF'}} key={indice}>
                              <TableCell component="th" scope="row">
                                { 
                                  e.camino
                                }
                              </TableCell>
                              <TableCell align="right">
                                {
                                  e.latencias
                                } 
                              </TableCell>
                              <TableCell align="right">
                                {
                                  e.total
                                } 
                              </TableCell>
                              <TableCell align="right">
                                <Radio
                                  value={indice}
                                  inputProps={{ 'aria-label': 'B' }}
                                  checked={
                                    indice == this.state.changeTrazaState ? true : false
                                  }
                                  />
                                    </TableCell>
                            </TableRow>
                          ))
                        }
                              
                            
                          
                        </TableBody>
                      </Table>  
                      </RadioGroup>                                                           
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                  <Paper style={this.classes.paper} elevation={3} >
                          <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                            Grafo de dependencias
                          </Typography>
                          <DependancesGraph 
                            graph = {{nodes:[], edges:[]}}
                            getNodes = {this.getNodesDependancesGraph.bind(this)}
                            getEdges= {this.getEdgesDependancesGraph.bind(this)}
                          />
                    </Paper>
                  </Grid>                                                                  
                </Grid>
                <Grid container
                justify="center"
                alignItems="flex-start"
                spacing={3}> 
                  <Grid item xs={10}> 
                    <Paper style={this.classes.paper} height="100%" elevation={3} > 
                            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                              Grafo espacial
                            </Typography>
                            <SpaceGraph 
                              graph = {{nodes:[], edges:[]}}
                              getNodes = {this.getNodesSpaceGraph.bind(this)}
                              getEdges= {this.getEdgesSpaceGraph.bind(this)}
                            />
                    </Paper> 
                  </Grid>                                                   
                                                                    
                </Grid>
              </Collapse>
              <center> 
                <p style={{color: '#A0A0A0'}}>Martin Lorenzo y Valentin Fernandez - Abril 2020</p>
              </center>
            </Container>
          </main>
        </div>
      </>
    );
  }
}



