import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

export default class LatencyPaper extends Component {

    constructor(props){
        super(props);
        this.onChangeTxtFieldLatency = this.onChangeTxtFieldLatency.bind(this);
    }

    onChangeTxtFieldLatency(event){
        this.props.onChangeTxtFieldLatency(event.target.id, event.target.value);
    }

    render() {
        const classes = this.props.classes;
        return (
                <FormControl component="fieldset" style={classes.formControl}>
                    <FormLabel component="legend">Seleccione la latencia de las operaciones </FormLabel>
                    <br />
                    <Grid container  direction={"column"} >
                        <Grid item xs>
                            <TextField
                                style={{ maxWidth: '100%' }}
                                id="asignacion"
                                label="Asignacion"
                                value={this.props.latencias.asignacion}
                                onChange={this.onChangeTxtFieldLatency}
                                type="number"
                                inputProps={{
                                    min: "0",
                                    max: "10",
                                    step: "1",
                                }}
                                InputLabelProps={{
                                    shrink:true
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                style={{ maxWidth: '100%' }}
                                id="resta"
                                label="Resta"
                                value={this.props.latencias.resta}
                                onChange={this.onChangeTxtFieldLatency}
                                type="number"
                                inputProps={{
                                    min: "0",
                                    max: "10",
                                    step: "1",
                                }}
                                InputLabelProps={{
                                    shrink:true
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                style={{ maxWidth: '100%' }}
                                id="multiplicacion"
                                label="Multiplicacion"
                                value={this.props.latencias.multiplicacion}
                                onChange={this.onChangeTxtFieldLatency}
                                type="number"
                                inputProps={{
                                    min: "0",
                                    max: "10",
                                    step: "1",
                                }}
                                InputLabelProps={{
                                    shrink:true
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                style={{ maxWidth: '100%' }}
                                id="division"
                                label="Division"
                                value={this.props.latencias.division}
                                onChange={this.onChangeTxtFieldLatency}
                                type="number"
                                inputProps={{
                                    min: "0",
                                    max: "10",
                                    step: "1",
                                }}
                                InputLabelProps={{
                                    shrink:true
                                }}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                style={{ maxWidth: '100%' }}
                                id="suma"
                                label="Suma"
                                value={this.props.latencias.suma}
                                onChange={this.onChangeTxtFieldLatency}
                                type="number"
                                inputProps={{
                                    min: "0",
                                    max: "10",
                                    step: "1",
                                }}
                                InputLabelProps={{
                                    shrink:true
                                }}
                            />
                        </Grid>
                    </Grid>
                </FormControl>

        )
    }
}