import React, { useState, useEffect } from "react";
import "./PLabAnalysis.css";
import ReactApexChart from "react-apexcharts";

const ApexChart = (props) => {
  const { graphValue, showProtein } = props;

  const spike = graphValue ? graphValue[0].graph_data : null;
  const p2 = graphValue ? graphValue[1].graph_data : null;
  const p3 = graphValue ? graphValue[2].graph_data : null;
  const p4 = graphValue ? graphValue[3].graph_data : null;
  const p5 = graphValue ? graphValue[4].graph_data : null;

  console.log("================================", spike, p5);

  const [graph, setGraph] = useState({
    series: [
      {
        id: "spike",
        name: "Spike Protein",
        data: spike,
      },
      {
        id: 2,
        name: "Protein 2",
        data: p2,
      },
      {
        id: 3,
        name: "Protein 3",
        data: p3,
      },
      {
        id: 4,
        name: "Protein 4",
        data: p4,
      },
      { id: 5, name: "Protein 5", data: p5 },
    ],
    options: {
      chart: {
        height: 450,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],

        tooltip: {
          formatter: function (value) {
            showProtein(value);
            return value;
          },
        },
      },
    },
  });

  useEffect(() => {
    const seriess = [];
    for (let i = 0; i < 5; i++) {
      const newData = graphValue && graphValue[i].graph_data;
      const data = newData?.filter((value) => value !== "");
      seriess.push({
        id: graph.series[i].id,
        name: graph.series[i].name,
        data: data ? data : null,
      });
    }

    setGraph({
      series: seriess,
      options: {
        xaxis: {
          tooltip: {
            formatter: function (value) {
              props.showProtein(value);
              return value;
            },
          },
        },
      },
    });
  }, [graphValue]);

  return (
    <div id="chart">
      <ReactApexChart
        options={graph.options}
        series={graph.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
