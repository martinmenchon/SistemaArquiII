import { GraphNode } from './GraphNode';

export class Graph {
  private nodes: Map<number, GraphNode>;
  private rootNodes: GraphNode[];

  constructor() {
    this.nodes = new Map<number, GraphNode>();
    this.rootNodes = [];
  }

  public addNode(id: number, node: GraphNode) {
    this.nodes.set(id, node);
  }

  public buildDependencies() {
    this.nodes.forEach((node: GraphNode, id: number) => {
      this.nodes.forEach((otherNode: GraphNode, id: number) => {
        if (node.getInstruction().existDependency(otherNode.getInstruction()))
          node.addDependence(otherNode);
      });
    });

    this.initRootNodes();
  }

  private initRootNodes(){
    let dependenciesIDs: Set<number> = new Set<number>();

    this.nodes.forEach((node: GraphNode, id: number) => {
      node.getDependencies().forEach( (depNode: GraphNode) => { 
        dependenciesIDs.add(depNode.getId());
      });
    });
    
    this.nodes.forEach((node: GraphNode, id: number) => {
      if(!dependenciesIDs.has(id)){
        this.rootNodes.push(node);
      }
    });
  }

  public getRootNodes(): GraphNode[] {
    return this.rootNodes;
  }

  public getAllNodes(): GraphNode[] {
    let outNodes: GraphNode[] = [];
    this.nodes.forEach((node: GraphNode, id: number) => {
      outNodes.push(node);
    });
    return outNodes;
  }

  public initAllAcummLatencies() {
    const rootNodes: GraphNode[] = this.getRootNodes();

    for (let i = 0; i < rootNodes.length; i++) {
      let nodeRoot: GraphNode = rootNodes[i];
      this.initAllAcumm(nodeRoot, nodeRoot.getInstLatency());
    }
  }

  private initAllAcumm(node: GraphNode, acumm: number) {
    if (node.getAcummLatency() < acumm)
      node.setAcummLatency(acumm);

    while (!node.isFinished()) {
      let dependencies: number[] = node.getInstruction().getDependencies();
      for (let j = 0; j < dependencies.length; j++) {
        return this.initAllAcumm(this.nodes.get(dependencies[j]), acumm + this.nodes.get(dependencies[j]).getInstLatency());
      }
    }
  }


  private findPathsFromRootNode(currentNode: GraphNode, currentPath: GraphNode[], allPaths: Array<GraphNode[]>) {

    if (currentNode.isFinished()) {
      let finishPath: GraphNode[] = [];

      for (let i = 0; i < currentPath.length; i++) {
        finishPath.push(currentPath[i]);
      }
      finishPath.push(currentNode);

      allPaths.push(finishPath);

    } else {
      let dependencies: GraphNode[] = currentNode.getDependencies();
      for (let i = 0; i < dependencies.length; i++) {
        let dependencieNode: GraphNode = dependencies[i];
        currentPath.push(currentNode);
        this.findPathsFromRootNode(dependencieNode, currentPath, allPaths);
        currentPath.pop();
      }
    }


  }

  public buildCriticalPath() {
    const rootNodes: GraphNode[] = this.getRootNodes();

    let allPaths: Array<GraphNode[]> = new Array<GraphNode[]>();


    for (let i = 0; i < rootNodes.length; i++) {
      let nodeRoot: GraphNode = rootNodes[i];
      this.findPathsFromRootNode(nodeRoot, [], allPaths);
    }

    let critcalPath: GraphNode[];
    let acummLatencyCriticalPath = 0;
    for (let i = 0; i < allPaths.length; i++) {
      let currentPath: GraphNode[] = allPaths[i];
      let acummLatency: number = currentPath[currentPath.length - 1].getAcummLatency();
      let accumPath = 0;

      for (let j = 0; j < currentPath.length; j++) {
        accumPath += currentPath[j].getInstLatency();
      }

      if (acummLatency == accumPath) {
        if (acummLatencyCriticalPath < acummLatency) {
          acummLatencyCriticalPath = acummLatency;
          critcalPath = currentPath;
        }
      }
    }

    for (let i = 0; i < critcalPath.length; i++) {
      critcalPath[i].setCriticalNode(true);
    }

    this.getRootNodes().forEach(rootNode => {
      if (!rootNode.isCritical()) {
        let turnIntoCritical: boolean = false;
        rootNode.getDependencies().forEach(node => {
          if (node.isCritical())
            turnIntoCritical = true;
        });
        rootNode.setCriticalNode(turnIntoCritical);
      }
    });

  }

  public isCriticalNode(id: number) {
    if (this.nodes.get(id) !== undefined) {
      return this.nodes.get(id).isCritical();
    }
  }

  public getNodesByET(cycle: number): Array<GraphNode> {
    let nodesOut: Array<GraphNode> = new Array<GraphNode>();

    this.nodes.forEach((node: GraphNode, id: number) => {
      if ((node.getET() <= cycle) && (node.getET() != -1)) {
        nodesOut.push(node);
      }
    });

    return nodesOut;
  }

  public deleteNode(id: number) {
    this.nodes.delete(id);
  }

  public hasDependencies(node: GraphNode): boolean {
    let found: boolean = false;

    this.nodes.forEach((nodeCurrent: GraphNode, id: number) => {
      let dependencies: GraphNode[] = nodeCurrent.getDependencies();
      dependencies.forEach((nodeDep: GraphNode) => {
        if (nodeDep.equals(node)) {
          found = true;
        }
      });
    });

    if (found) {
      return true;
    } else {
      return false;
    }
  }

  public setETNode(nodeId: number, ET: number) {
    this.nodes.get(nodeId).setET(ET);
  }

  public isEmpty(): boolean {
    return this.nodes.size === 0;
  }

}
