import SMTable from "../../components/SMTable/SMTable";
import { Grid } from "@mui/material";
import { useState } from "react";
import dummyData from "../../Data/DummyData";

function TableAPI() {
	let [value, setValue] = useState({})
	return (
		<div className="container">
			<div className="testingArea" style={{ height: '400px', overflow: 'auto' }}>
				<Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
					<div style={{ width: '60vw' }}>
						<SMTable
							searchBarStyle={{ maxWidth: '400px', marginLeft: 'auto', position: 'sticky', top: '0px' }}
							limit={40}
							colStyle={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#009fff9e" }}
							style={{ width: "100%" }}
							cols={[{ value: "id", displayName: "ID" }, { value: "title", displayName: "Title" }]}
							data={dummyData} />
					</div>
				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 7 props
				</h2>

				<ul>
					<li>
						<div className="title">data:</div>
					</li>
				</ul>
				<p>This prop should be an array of objects where each object represents a row of data.</p>

				<ul>
					<li>
						<div className="title">cols:</div>
					</li>
				</ul>
				<p>This prop should be an array of objects where each object represents a field to be displayed from the data.
					Each object should contain a key and it's displayName.The data will be looked up for in the table using the key
					and the heading of that field will be the displayName.</p>

				<ul>
					<li>
						<div className="title">limit:</div>
					</li>
				</ul>
				<p>This prop takes an integer to limit the data displayed, if not provided all the data in the list will be displayed.</p>

				<ul>
					<li>
						<div className="title">onRowClick:</div>
					</li>
				</ul>
				<p>This prop takes a function which will be executed every time a row is clicked.</p>

				<ul>
					<li>
						<div className="title">style:</div>
					</li>
				</ul>
				<p>This prop should contain an object which defines style for the table.</p>

				<ul>
					<li>
						<div className="title">colStyle:</div>
					</li>
				</ul>
				<p>This prop should contain an object which defines style for each table cell.</p>

				<ul>
					<li>
						<div className="title">searchBarStyle:</div>
					</li>
				</ul>
				<p>This prop should contain an object which defines style for the search bar container.</p>

			</div>
		</div >
	)
}

export default TableAPI;