import { useState } from "react";
import SMInput from "../SMInput";
import filterRow from "./functions";
import SMSelect from "../SMSelect";
function SMTable(props) {
	let { style, data, onRowClick, cols, limit, borderStyle } = props;
	let [searchTerm, setSearchTerm] = useState();
	let [searchCat, setSearchCat] = useState('');
	return (
		<>
			<div className="tableFilter" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "20px" }}>
				<SMInput type="text" placeholder="search" onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} label='Search' />
				<SMSelect
					style={{ minWidth: "200px", ml: "20px" }}
					displayEmpty={false}
					label="Search by"
					value={searchCat}
					onChange={(e) => { setSearchCat(() => { return e.target.value }) }}
					options={[{ value: "", displayName: "All Columns" }, ...cols]}
				/>
			</div>
			<table style={{ ...style, ...borderStyle, borderSpacing: "0px", }} >
				<thead>
					<tr >
						{cols.map((col, i) => {
							return (<th style={{ ...borderStyle, letterSpacing: "1px", textAlign: 'start', padding: "10px 10px" }} key={i}>{col.displayName}</th>)
						})}
					</tr>
				</thead>
				<tbody>
					{(() => {
						let rowsDisplayed = 0;
						return data.map((value, rI) => {
							if ((rowsDisplayed < (limit ? limit : Infinity)) && filterRow(value, cols, searchTerm, searchCat)) {
								rowsDisplayed += 1;
								return (
									<tr
										key={rI}
										onClick={onRowClick
											? () => {
												onRowClick()
											}
											: (() => { })}
									>
										{cols.map((col, cI) => {
											return (<td
												key={cI}
												style={{ ...borderStyle, textAlign: 'start', padding: "10px 10px" }}
											>
												{value[col.value]}
											</td>)
										})}
									</tr>
								)
							}
							return undefined;
						})
					})()
					}
				</tbody>
			</table>
		</>
	)
}
export default SMTable;