import React, { Component } from 'react';
import Graph from 'react-graph-vis';


export default class DependancesGraph extends Component
{
    render(){
        const options = {
            height: '250px',
            edges: {
                smooth: true
              }
        };
        return(
            <Graph 
                options={options}
                graph= {this.props.graph}
                getNodes = {this.props.getNodes} 
                getEdges= {this.props.getEdges}/>
        )
    }
}