import React from "react";
import "./PLabAnalysis.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default class ApexChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					id: "spike",
					name: "M Protein",
					data: []
				},
				{
					id: 2,
					name: "N Protein",
					data: []
				},
				{
					id: 3,
					name: "E Protein",
					data: []
				},
				{
					id: 4,
					name: "Protein 4",
					data: []
				},
				{
					id: 5,
					name: "Protein 5",
					data: []
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
					categories: [
						"50",
						"100",
						"150",
						"200",
						"250",
						"300",
						"350",
						"400",
						"450",
						"500",
					],
				},
			},
		};
	}

	async componentDidMount() {
		const data = {
			region: 0,
			lowPosition: 1,
			highPosition: 20,
		};
		const a = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph', data)
		const b = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph', data)
		const c = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph', data)
		const d = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph', data)
		const e = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph', data)

		await axios.all([a, b, c, d, e]).then(axios.spread((...responses) => {
			const responseOne = responses[0];
			const responseTwo = responses[1];
			const responesThree = responses[2];
			const responseFour = responses[3];
			const responesFive = responses[4];
			this.setState({
				series: [
					{
						id: "spike",
						name: "M Protein",
						data: responseOne.data.graph_data,
					},
					{
						id: 2,
						name: "N Protein",
						data: responseTwo.data.graph_data,
					},
					{
						id: 3,
						name: "E Protein",
						data: responesThree.data.graph_data,
					},
					{
						id: 4,
						name: "Protein 4",
						data: responseFour.data.graph_data,
					},
					{
						id: 5,
						name: "Protein 5",
						data: responesFive.data.graph_data,
					},
				]
			});
		})).catch(errors => {
			console.log("errors----", errors);
		})
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