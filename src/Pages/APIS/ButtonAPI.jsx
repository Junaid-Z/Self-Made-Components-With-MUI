import SMButton from "../../components/SMButton";
import { Grid } from "@mui/material";

function ButtonAPI() {
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center' }} rowGap={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={3} xl={3}>
						<SMButton
							label={"A contained Button"}
							variant={"contained"}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={3} xl={3} >
						<SMButton
							label={"A outlined Button"}
							variant={"outlined"}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={3} xl={3} >
						<SMButton
							label={"A text Button"}
							variant={"text"}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={3} xl={3} >
						<SMButton
							label={"A Disabled Button"}
							variant={"contained"}
							disabled={true}
						/>
					</Grid>

				</Grid>
			</div>

			<div className="usage">
				<h2>
					The Button component takes the following 5 props
				</h2>

				<ul>
					<li>
						<div className="title">variant:</div>
					</li>
				</ul>
				<p>This prop defines the button type. It can contain a value from any of these 3 options contained, text, outlined.</p>

				<ul>
					<li>
						<div className="title">label:</div>
					</li>
				</ul>
				<p>This prop defines the text label within the button.</p>

				<ul>
					<li>
						<div className="title">disabled:</div>
					</li>
				</ul>
				<p>This prop should be boolean a value. A value of true indicates that the button is
					disabled and a vlaue of false indicates the oppposite</p>

				<ul>
					<li>
						<div className="title">href:</div>
					</li>
				</ul>
				<p>This prop should contain url of the page to navigate to if the button is a link</p>

				<ul>
					<li>
						<div className="title">onClick:</div>
					</li>
				</ul>
				<p>This prop should contain a function the will be executed every time the button is clicked</p>

				<ul>
					<li>
						<div className="title">style:</div>
					</li>
				</ul>
				<p>This prop should contain an object that defines the style of the button</p>

			</div>
		</div >
	)
}

export default ButtonAPI;