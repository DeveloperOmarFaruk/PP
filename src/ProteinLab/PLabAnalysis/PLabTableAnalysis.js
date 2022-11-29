import React from 'react'
import "./PLabAnalysis.css"

const PLabTableAnalysis = (props) => {
	const graphValue = props.graphValue;

	console.log('====================================');
	console.log('PLabTableAnalysis--->', graphValue);
	console.log('====================================');

	const spike = graphValue.res ? graphValue.res[0].data.all_data : null;
	const p2 = graphValue.res ? graphValue.res[1].data.all_data : null;
	const p3 = graphValue.res ? graphValue.res[2].data.all_data : null;
	const p4 = graphValue.res ? graphValue.res[3].data.all_data : null;
	const p5 = graphValue.res ? graphValue.res[4].data.all_data : null;

	return (
		<>
			<div className="plta-table-container">
				<h3>Covid-19 spike protein</h3>
				<table class="table">
					<thead className="plta-table">
						<th scope="col" >Positions</th>
						<th scope="col" >Amino Acid</th>
						<th scope="col" >Substitute</th>
						<th scope="col" >Ag</th>
						<th scope="col">Region</th>
					</thead>

					<tbody>
						{spike ? spike.map(spike => (
							<tr>
								<td scope="row" data-label="Positions">{spike.position}</td>
								<td data-label="Amino Acid">{spike.amino_acid}</td>
								<td data-label="Substitute">{spike.sub}</td>
								<td data-label="Ag">{spike.ag}</td>
								<td data-label="Region">{spike.region}</td>
							</tr>
						)) : <></>}
						{p2 ? p2.map(p2 => (
							<tr>
								<td scope="row" data-label="Positions">{p2.position}</td>
								<td data-label="Amino Acid">{p2.amino_acid}</td>
								<td data-label="Substitute">{p2.sub}</td>
								<td data-label="Ag">{p2.ag}</td>
								<td data-label="Region">{p2.region}</td>
							</tr>
						)) : <></>}
						{p3 ? p3.map(p3 => (
							<tr>
								<td scope="row" data-label="Positions">{p3.position}</td>
								<td data-label="Amino Acid">{p3.amino_acid}</td>
								<td data-label="Substitute">{p3.sub}</td>
								<td data-label="Ag">{p3.ag}</td>
								<td data-label="Region">{p3.region}</td>
							</tr>
						)) : <></>}
						{p4 ? p4.map(p4 => (
							<tr>
								<td scope="row" data-label="Positions">{p4.position}</td>
								<td data-label="Amino Acid">{p4.amino_acid}</td>
								<td data-label="Substitute">{p4.sub}</td>
								<td data-label="Ag">{p4.ag}</td>
								<td data-label="Region">{p4.region}</td>
							</tr>
						)) : <></>}
						{p5 ? p5.map(p5 => (
							<tr>
								<td scope="row" data-label="Positions">{p5.position}</td>
								<td data-label="Amino Acid">{p5.amino_acid}</td>
								<td data-label="Substitute">{p5.sub}</td>
								<td data-label="Ag">{p5.ag}</td>
								<td data-label="Region">{p5.region}</td>
							</tr>
						)) : <></>}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default PLabTableAnalysis;