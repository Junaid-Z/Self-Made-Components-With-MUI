import SMSwitch from "../../components/SMSwitch";
import { Grid } from "@mui/material";
import { useState } from "react";

function SwitchAPI() {
	let [value, setValue] = useState(false);
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4}>

						<label className="myLabel">
							<div>
								A normal switch
							</div>
							<SMSwitch
								checked={value}
								onChange={() => { setValue((prev) => { return !prev }) }}
							/>
						</label>

					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4}>

						<label className="myLabel">
							<div>
								A Small button
							</div>
							<SMSwitch
								checked={value}
								onChange={() => { setValue((prev) => { return !prev }) }}
								size={'small'}
							/>
						</label>

					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4} >

						<label className="myLabel">
							<div>
								A disabled switch
							</div>
							<SMSwitch
								checked={value}
								onChange={() => { setValue((prev) => { return !prev }) }}
								disabled={true}
							/>
						</label>

					</Grid>

				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 4 props
				</h2>

				<ul>
					<li>
						<div className="title">checked:</div>
					</li>
				</ul>
				<p>This prop should be boolean a value. A value of true indicates that the switch in an on
					state a value of false indicates the oppposite.</p>

				<ul>
					<li>
						<div className="title">onChange:</div>
					</li>
				</ul>
				<p>This prop should contain a function the will be executed every time the state of switch is changed</p>

				<ul>
					<li>
						<div className="title">disabled:</div>
					</li>
				</ul>
				<p>This prop should be boolean a value. A value of true indicates that the switch is
					disabled and can not be used</p>

				<ul>
					<li>
						<div className="title">size:</div>
					</li>
				</ul>
				<p>This prop defines the size of the switch, it's value can either be 'small' or 'medium'.</p>
			</div>

		</div >
	)
}

export default SwitchAPI;