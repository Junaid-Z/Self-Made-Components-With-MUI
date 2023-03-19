import SMRadio from "../../components/SMRadio";
import { Grid } from "@mui/material";
import { useState } from "react";

function RadioAPI() {
	let [value, setValue] = useState('')
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={6} xl={6}>
						<SMRadio
							error={false}
							label={"Label"}
							list={[
								{ displayName: "Option 1", value: "opt1" },
								{ displayName: "Option 2", value: "opt2" }
							]}
							value={value}
							onChange={(e) => { setValue(e.target.value) }}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={6} xl={6}>
						<SMRadio
							error={true}
							helperText={"Select in an error state"}
							name={"gender"}
							label={"Label"}
							list={[
								{ displayName: "Option 1", value: "opt1" },
								{ displayName: "Option 2", value: "opt2" }
							]}
							value={value}
							onChange={(e) => { setValue(e.target.value) }}
						/>
					</Grid>

				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 6 props
				</h2>

				<ul>
					<li>
						<div className="title">Label:</div>
					</li>
				</ul>
				<p>This prop defines the heading of the select group.</p>

				<ul>
					<li>
						<div className="title">list:</div>
					</li>
				</ul>
				<p>This prop should contain an array of objects where each object is an option
					and each object should contain a value and displayName.</p>

				<ul>
					<li>
						<div className="title">value:</div>
					</li>
				</ul>
				<p>This prop contains current value of the radio group</p>


				<ul>
					<li>
						<div className="title">onChange:</div>
					</li>
				</ul>
				<p>This prop should contain a function the will be executed every time the value is changed</p>

				<ul>
					<li>
						<div className="title">error:</div>
					</li>
				</ul>
				<p>This prop should contain a boolean value which indicates
					whether the component is in an error state</p>

				<ul>
					<li>
						<div className="title">helperText:</div>
					</li>
				</ul>
				<p>This prop should contain text to be displayed below the group</p>

			</div>
		</div >
	)
}

export default RadioAPI;