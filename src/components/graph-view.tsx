import { useRef, useState } from "react";
import Network from "react-vis-network-graph";                              
import { _data } from "../data/data";
import { GraphViewProps } from "../interfaces/graph-view-props";

export default function GraphView({
  setActive,
  setTitle,
  setDescription,
  setImagePath
}: GraphViewProps) {
  const graphRef = useRef(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const options = {
    interaction: {
      selectable: true,
      hover: true,
      zoomView: false,
      dragView: false,
    },
    manipulation: {
      enabled: true,
      initiallyActive: true,
      addNode: false,
      addEdge: true,
      editNode: undefined,
      editEdge: true,
      deleteNode: false,
      deleteEdge: true,
      // shapeProperties: {
      //   borderDashes: false,
      //   useImageSize: false,
      //   useBorderWithImage: false
      // },
      // controlNodeStyle: {
      //   shape: "dot",
      //   size: 6,
      //   color: {
      //     background: "#ff0000",
      //     border: "#3c3c3c",
      //     highlight: {
      //       background: "#07f968",
      //       border: "#3c3c3c"
      //     },
      //     borderWidth: 2,
      //     borderWidthSelected: 2
      //   }
      // },
      // height: "100%",
      // color: "green",
      // hover: "true",
      // nodes: {
      //   size: 20
      // }
    }
  };
  let addEdge = document.getElementsByClassName('vis-labal');
  console.log(addEdge.length)
  const handleNodeClick = (event: {
    edges: string[];
    event: {};
    items: [];
    nodes: string[];
    pointer: {};
  }) => {
    const selectedNode = _data.nodes.find(
      item => item.id === event.nodes[0]
    );
    setSelectedNodeId(event.nodes[0]);
    setTitle(selectedNode?.id || '');
    setDescription(selectedNode?.description || '');
    setImagePath(selectedNode?.image || '');
  };

  const handleOpenModal = () => {
    setActive(true);
  };

  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="mx-auto max-w-7xl">
        {/* Grafo */}
        <div className="border border-gray-300 rounded-lg mb-8 bg-white">
          <Network
            graph={_data}
            ref={graphRef}
            options={options}
            events={{
              click: handleNodeClick
            }}
            style={{ height: "40rem" }}
          />
        </div>

        {/* Texto com botão para abrir modal */}
        <div className="text-center">
          <p className="text-2xl mb-4">{selectedNodeId}</p>
          {selectedNodeId && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
              Abrir Modal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}