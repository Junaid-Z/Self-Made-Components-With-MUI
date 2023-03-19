import SMButton from "../../components/SMButton";
import { Grid } from "@mui/material";
import { useState } from "react";
import SMSnackbar from "../../components/SMSnackbar";

function SnackbarAPI() {
	let [value, setValue] = useState(
		{
			open: false,
			vertical: 'top',
			horizontal: 'center'
		}
	);
	return (
		<div className="container">
			<div className="testingArea">
				<Grid container sx={{ alignItems: 'center' }} rowGap={2} columnSpacing={1} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Top Left"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'top',
									horizontal: 'left'
								})
							}}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Top Center"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'top',
									horizontal: 'center'
								})
							}}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Top Right"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'top',
									horizontal: 'right'
								})
							}}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Bottom Left"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'bottom',
									horizontal: 'left'
								})
							}}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Bottom Center"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'bottom',
									horizontal: 'center'
								})
							}}
						/>
					</Grid>

					<Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={6} lg={4} xl={4}>
						<SMButton
							label={"Bottom Right"}
							variant={"contained"}
							onClick={() => {
								setValue({
									open: true,
									vertical: 'bottom',
									horizontal: 'right'
								})
							}}
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
						<div className="title">message:</div>
					</li>
				</ul>
				<p>This prop can contain a component or some text to displayed in the snackbar.</p>

				<ul>
					<li>
						<div className="title">position:</div>
					</li>
				</ul>
				<p>This prop should be an object with 2 properties vertical and horizontal. The vertical property should
					contain any of the 2 values (top, bottom).The horizontal property should contain any of the 3 values (left,
					right,center).
				</p>

				<ul>
					<li>
						<div className="title">autoHideDuration:</div>
					</li>
				</ul>
				<p>This prop should be an integer that indicates time in milliseconds after which
					the snackbar should be closed automatically.If not supplied it will stay open</p>

				<ul>
					<li>
						<div className="title">open:</div>
					</li>
				</ul>
				<p>This prop should contain a boolean value indicating whether the snackbar should be displayed or not</p>

				<ul>
					<li>
						<div className="title">onClose:</div>
					</li>
				</ul>
				<p>This prop should contain a function the will be executed to close the snackbar</p>

				<SMSnackbar
					open={value.open}
					handleClose={() => { setValue({ ...value, open: false }) }}
					position={{
						vertical: value.vertical,
						horizontal: value.horizontal
					}}
					duration={2000}
					message={<h1>"HEllo WOrld"</h1>} />
			</div>
		</div >
	)
}

export default SnackbarAPI;