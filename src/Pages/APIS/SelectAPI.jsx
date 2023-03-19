import SMSelect from "../../components/SMSelect";
import { Grid } from "@mui/material";
import { useState } from "react";

function SelectAPI() {
	let [value, setValue] = useState('');
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={6} xl={6}>

						<label className="myLabel">
							<div>
								Select with some helper text
							</div>
							<SMSelect
								helperText={'Somehelper text'}
								style={{ minWidth: "150px", ml: "10px" }}
								options={[{ value: "", displayName: "None" }, { value: "id", displayName: "ID" }, { value: "title", displayName: "Title" }]}
								value={value}
								displayEmpty={true}
								onChange={(e) => { setValue(e.target.value) }}
							/>
						</label>

					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={6} xl={6}>

						<label className="myLabel">
							<div>
								Select box with a label
							</div>
							<SMSelect
								label={"Select"}
								style={{ minWidth: "150px", ml: "10px" }}
								options={[{ value: "", displayName: "None" }, { value: "id", displayName: "ID" }, { value: "title", displayName: "Title" }]}
								value={value}
								onChange={(e) => { setValue(e.target.value) }}
							/>
						</label>

					</Grid>

				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 8 props
				</h2>

				<ul>
					<li>
						<div className="title">value:</div>
					</li>
				</ul>
				<p>This prop contains the current value of the component</p>

				<ul>
					<li>
						<div className="title">onChange:</div>
					</li>
				</ul>
				<p>This prop should contain a function the will be executed every time the state of component is changed</p>

				<ul>
					<li>
						<div className="title">helperText:</div>
					</li>
				</ul>
				<p>This prop contains a small message for the user below the component</p>

				<ul>
					<li>
						<div className="title">options:</div>
					</li>
				</ul>
				<p>This prop defines the list of options available. It should be an array of objects where
					each object represents an option and each object should contain it's displayName and value.</p>

				<ul>
					<li>
						<div className="title">label:</div>
					</li>
				</ul>
				<p>This prop defines the placeholder for when the box has a value of empty string.
					Only use this when displayEmpty is set to false or when there are no options with empty values</p>

				<ul>
					<li>
						<div className="title">variant:</div>
					</li>
				</ul>
				<p>This prop defines the placeholder for when the box has a value of empty string.
					Only use this when displayEmpty is set to false or when there are no options with empty values</p>

				<ul>
					<li>
						<div className="title">displayEmpty:</div>
					</li>
				</ul>
				<p>This prop should have a boolean value. A value of true would mean that options
					with empty values will not be rendered in the box when selected</p>

				<ul>
					<li>
						<div className="title">style:</div>
					</li>
				</ul>
				<p>This prop should have an object which contains all the styles that need
					to be applied to the select box</p>

			</div>
		</div >
	)
}

export default SelectAPI;