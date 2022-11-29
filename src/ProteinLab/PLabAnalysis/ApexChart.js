import React from "react";
import "./PLabAnalysis.css";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {

	constructor(props) {
		const graphValue = props.graphValue;

		console.log('====================================');
		console.log('ApexChart--->', graphValue);
		console.log('====================================');

		const spike = graphValue.res ? graphValue.res[0].data.graph_data : null;
		const p2 = graphValue.res ? graphValue.res[1].data.graph_data : null;
		const p3 = graphValue.res ? graphValue.res[2].data.graph_data : null;
		const p4 = graphValue.res ? graphValue.res[3].data.graph_data : null;
		const p5 = graphValue.res ? graphValue.res[4].data.graph_data : null;

		super(props);
		this.state = {
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
				{
					id: 5,
					name: "Protein 5",
					data: p5,
				}
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
				// title: {
				//   text: 'Product Trends by Month',
				//   align: 'left'
				// },
				grid: {
					row: {
						colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
						opacity: 0.5,
					},
				},
				xaxis: {
					categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
					labels: {
						formatter: function (value) {
							props.showProtein(value);
							return value;
						},
				},
			},
		}
	};
}

	render() {
		return (
			<div id="chart">
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type="line"
					height={350}
				/>
			</div>
		);
	}
}