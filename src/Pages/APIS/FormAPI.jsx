import SMForm from "../../components/SMForm";
import { Grid } from "@mui/material";
import SMInput from "../../components/SMInput";
import SMButton from "../../components/SMButton";
import { useState } from "react";

function GridFormAPI() {
	let [value, setValue] = useState({})
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
					<Grid item sx={{ margin: 'auto' }} xs={12} sm={10} md={8} lg={6} xl={4}>

						<SMForm
							button={
								<Grid item sx={{ margin: 'auto' }} xs={12} sm={12} lg={12} xl={12}>
									<SMButton
										style={{ width: '100%' }}
										label={"click me"}
										variant={'contained'} />
								</Grid>
							}
							list={[
								{
									comp: <Grid sx={{ margin: 'auto' }} item xs={12} sm={12} lg={12} xl={12}>
										<SMInput
											label="Input 1"
											variant="outlined"
											value={value.input1}
											onChange={(e) => { setValue((prev) => { return { ...prev, input1: e.target.value } }) }}
											height={0}
											placeholder={"Input 1"}
										/>
									</Grid>,
									xsWidth: 12
								},
								{
									comp: <SMInput
										label="Input 2"
										variant="outlined"
										value={value.input2}
										onChange={(e) => { setValue((prev) => { return { ...prev, input2: e.target.value } }) }}
										height={0}
										placeholder={"Input 2"}
									/>,
									mdWidth: 6,
									xsWidth: 12
								},
								{
									comp: <SMInput
										label="Input 3"
										variant="outlined"
										value={value.input3}
										onChange={(e) => { setValue((prev) => { return { ...prev, input3: e.target.value } }) }}
										height={0}
										placeholder={"Input 3"}
									/>,
									mdWidth: 6,
									xsWidth: 12
								}
							]} />
					</Grid>
				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 2 props
				</h2>

				<ul>
					<li>
						<div className="title">list:</div>
					</li>
				</ul>
				<p>This prop should be an array of objects where each object represents a field.
					And should have an attribute with the name comp which containes the component to be displayed.
					Optional properties can be xs,sm,md,lg or xl the value of these determine their space on the grid
					on different screen sizes.</p>

				<ul>
					<li>
						<div className="title">button:</div>
					</li>
				</ul>
				<p>This prop should contain a button to be displayed at the end of the form.</p>

			</div>
		</div >
	)
}

export default GridFormAPI;