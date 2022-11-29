import React from "react";
import "./PLabAnalysis.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default class ApexChart extends React.Component {

	constructor(props) {
		const allGraphValue = props.getAllGraphs();
		console.log('====================================');
		console.log('---ApexChart--0000-->', allGraphValue);
		console.log('====================================');
		super(props);
		this.state = {
			series: [
				{
					id: "spike",
					name: "Spike Protein",
					data: allGraphValue.res[0].data.graph_data,
				},
				{
					id: 2,
					name: "Protein 2",
					data: allGraphValue.res[1].data.graph_data,
				},
				{
					id: 3,
					name: "Protein 3",
					data: allGraphValue.res[2].data.graph_data,
				},
				{
					id: 4,
					name: "Protein 4",
					data: allGraphValue.res[3].data.graph_data,
				},
				{
					id: 5,
					name: "Protein 5",
					data: allGraphValue.res[4].data.graph_data,
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
	
// async componentDidMount() {
// 	const data = {
// 		region: 0,
// 		lowPosition: 1,
// 		highPosition: 20,
// 	};
// 	const a = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph', data);
// 	const b = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph', data);
// 	const c = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph', data);
// 	const d = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph', data);
// 	const e = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph', data);

// 	await axios.all([a, b, c, d, e]).then(axios.spread((...responses) => {
// 		const responseOne = responses[0];
// 		const responseTwo = responses[1];
// 		const responesThree = responses[2];
// 		const responseFour = responses[3];
// 		const responesFive = responses[4];
// 		this.setState({
// 			series: [
// 				{
// 					id: "spike",
// 					name: "Spike Protein",
// 					data: responseOne.data.graph_data,
// 				},
// 				{
// 					id: 2,
// 					name: "Protein 2",
// 					data: responseTwo.data.graph_data,
// 				},
// 				{
// 					id: 3,
// 					name: "Protein 3",
// 					data: responesThree.data.graph_data,
// 				},
// 				{
// 					id: 4,
// 					name: "Protein 4",
// 					data: responseFour.data.graph_data,
// 				},
// 				{
// 					id: 5,
// 					name: "Protein 5",
// 					data: responesFive.data.graph_data,
// 				},
// 			]
// 		});
// 	})).catch(errors => {
// 		console.log("errors----", errors);
// 	})
// }



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