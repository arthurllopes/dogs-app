import React from 'react'
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import { Graph, GraphItem, Total } from "./style";


const StatsGraph = ({data}) => {
    const [graph, setGraph] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        const graphData = data.map((item) => {
          return {
            x: item.title,
            y: Number(item.acessos),
          };
        });
    
        setTotal(
          data.map(({ acessos }) => Number(acessos)),
        );
        setGraph(graphData);
      }, [data]);

    return (
        <Graph>
            <Total>
                <p>Acessos: {total}</p>
            </Total>
            <GraphItem>
                <VictoryPie
                data={graph}
                innerRadius={50}
                padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                style={{
                    data: {
                    fillOpacity: 0.9,
                    stroke: '#fff',
                    strokeWidth: 2,
                    },
                    labels: {
                    fontSize: 14,
                    fill: '#333',
                    },
                }}
                />
            </GraphItem>
            <GraphItem>
                <VictoryChart>
                <VictoryBar alignment="start" data={graph}></VictoryBar>
                </VictoryChart>
            </GraphItem>
        </Graph>
    )
}

export default StatsGraph
