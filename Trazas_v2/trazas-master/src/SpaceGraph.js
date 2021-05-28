import React, { Component } from 'react';
import Graph from 'react-graph-vis';

export default class SpaceGraph extends Component {
    options = {
        layout: {
            /*hierarchical: {
                enabled: true,
                nodeSpacing: 0,
                levelSeparation: 0,
                direction: 'LR'
            }*/
        },
        height: '500px',
        groups: {
            useDefaultGroups: true
        },/*
            a: {
                color: { 
                    highlight:{
                        background: "red"
                    }   
                }
            },
            b: {
                color: { 
                    highlight: {
                        background: "green"
                    }
                }
            },
            c: {
                color: { 
                    highlight:{
                        background:"purple"
                    }
                }
            }
        },*/
        physics: {
            enabled: false
        },
        interaction: {
            dragNodes: false,
            dragView: true,
            hover: false,
            hoverConnectedEdges: true,
            multiselect: true,
            navigationButtons: false,
            selectable: true,
            selectConnectedEdges: true,
            tooltipDelay: 300,
            zoomView: true
        }

    }

    events = {
        selectNode: function (event) { //This will be executed by Network object, not in SpaceGraph. So this is a Network.
            let nodes = [];
            const group = this.body.nodes[event.nodes[0]].options.group; // Get group of selected node
            let nodeAux;
            for(nodeAux in this.body.nodes){ //Get the nodes of same group as selected node
                if(this.body.nodes[nodeAux].options.group === group)
                    nodes.push(nodeAux);    
            } 
            this.selectNodes(nodes, true); //Select group of nodes highlighting there edges
        }
    }

    render() {
        return (
            <Graph key="Graph"
                graph= {this.props.graph}
                getNodes = {this.props.getNodes} 
                getEdges= {this.props.getEdges}
                events={this.events} 
                options={this.options} //Options must be on state? in SpaceGraph class? Outside?
            />
        )
    }
}