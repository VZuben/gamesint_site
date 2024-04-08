import React, { SetStateAction, useRef, useState } from "react";
import Network from "react-vis-network-graph";
import Grid from "@mui/material/Grid";
import { _data } from "../data/data";

export interface GraphViewProps {

  handleActive: any,
  handleTitle: any,
  handleDescription: any,
  handleImagePath: any,

}

export default function GraphView({ handleActive, handleTitle, handleDescription, handleImagePath }: GraphViewProps) {
  const graphRef = useRef(null);
  const [datas, setDatas] = useState("--");
  const [data, setData] = useState(_data);

  const options = {
    interaction: {
      selectable: true,
      hover: true
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
      shapeProperties: {
        borderDashes: false,
        useImageSize: false,
        useBorderWithImage: false
      },
      controlNodeStyle: {
        shape: "dot",
        size: 6,
        color: {
          background: "#ff0000",
          border: "#3c3c3c",
          highlight: {
            background: "#07f968",
            border: "#3c3c3c"
          },
          borderWidth: 2,
          borderWidthSelected: 2
        }
      },
      height: "100%",
      color: "green",
      hover: "true",
      nodes: {
        size: 20
      }
    }
  };

  const handleNodeClick = (event: { edges: string[], event: {}, items: [], nodes: string[], pointer: {} }) => {

    
    const data = _data.nodes.find(item => item.id === datas);
    console.log(event)
    setDatas(event.nodes[0]);
    handleActive(true);
    handleTitle(data?.id);
    handleDescription(data?.label);
    handleImagePath(data?.image);


  };

  const handleOpenModal = () => {

  }


  return (
    <>
      <Grid>
        <Grid item md={7} style={{ display: "flex" }}>
          <Network
            graph={data}
            ref={graphRef}
            options={options}
            events={{
              click: handleNodeClick
            }}
            style={{ display: "flex", height: "40rem" }}
          />
        </Grid>
        <Grid item md={3}>
          <div>
            <p
              style={{
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Verdana"
              }}
            >
              <b>{datas}</b>
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}