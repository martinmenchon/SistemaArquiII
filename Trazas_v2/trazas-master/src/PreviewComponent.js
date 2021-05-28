import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class PreviewComponent extends Component
{
    state = {
        valor : this.props.valor,
    };
    render(){
        return(
            
                <FormControl style={{minWidth: '100%'}}> 
                <TextField
                        disabled
                        label="Preview"
                        variant="outlined"
                        name="pepe"
                        type="text"
                        key="333"
                        value={this.props.valor}
                        onChange={(event) => {
                          this.setState({
                              valor: event.target.value,
                          });
                        }}
                      />
                      <Button type="submit" onClick= {(event) => {
                          this.props.callBackAdd();
                          this.props.cancelarEdicion();
                        } }variant="outlined" color="primary" minWidth='100%'>
                         Agregar sentencia
                      </Button>
                      
                      </FormControl>
        );
    }
}