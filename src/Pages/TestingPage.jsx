import { useEffect, useState } from "react";
import SMButton from "../components/SMButton";
import SMInput from "../components/SMInput";
import SMTable from "../components/SMTable/SMTable";
import SMSelect from "../components/SMSelect";
import dummyData from '../Data/DummyData'
import SMSwitch from "../components/SMSwitch";
import SMCheckbox from "../components/SMCheckbox";
import SMRadio from "../components/SMRadio";
import ExSMForm from "../components/ExSMForm";
import SMModal from "../components/SMModal";
import SMSnackbar from "../components/SMSnackbar";
import SMForm from "../components/SMForm";
import { Box, Grid } from "@mui/material";
import {
	signUp,
	signIn,
	deleteData,
	updateData,
	setData,
	subscribe,
	getData
} from "../Firebase/FirebaseFunctions";
import { width } from "@mui/system";

function TestingPage(props) {
	let [value, setValue] = useState({});
	useEffect(() => {
		subscribe('TODOS', (snapshot) => { setValue(snapshot.val()) })
	}, [])
	const logData = () => {
		getData('TODOS').then((d) => { console.log(d.val()) })
	}
	return (



		< div className="testingPage" >
			<div style={{ textAlign: 'center' }}>
				<div>
					{JSON.stringify(value)}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Set Data'}
						onClick={() => { setData('TODOS', { a: 2, b: 3 }) }} />

					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Log Data'}
						onClick={() => { logData() }} />

					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Update Data'}
						onClick={() => { updateData('TODOS/-NRIcGRIjSyoE81HOpKY', { a: 5, b: 7 }) }} />

					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Delete Data'}
						onClick={() => { deleteData('TODOS') }} />

					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Sign Up'}
						onClick={() => {
							signUp({ email: "123@123.com", password: '112233' })
								.then((res) => {
									console.log(res.user.uid);
									setData(('users/'), {
										id: res.user.uid
									})
								}).catch((err) => {
									console.log(err);
								})
						}} />

					<SMButton
						style={{ display: 'block', width: '200px', marginTop: '20px', padding: '10px' }}
						variant={'contained'}
						label={'Sign In'}
						onClick={() => {
							signIn({ email: "123@123.com", password: '112233' })
								.then((res) => {
									console.log(res.user.uid);
								}).catch((err) => {
									console.log(err);
								})
						}} />
				</div>
			</div>




			{/* <Grid item sx={{ margin: 'auto' }} xs={12} sm={10} md={8} lg={6} xl={4}>

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
			</Grid> */}

			{/* <SMSnackbar
				open={value}
				handleClose={() => { setValue(false) }}
				position={{
					vertical: "top",
					horizontal: "center"
				}}
				message={<h1>"HEllo WOrld"</h1>}
				duration={1000} /> */}

			{/* <SMModal
				open={value}
				handleClose={() => { setValue(false) }}
				heading={"Hello World"}
				text={"This is a modal"} /> */}

			{/* <ExSMForm list={[{
				type: "input",
				disabled: false,
				label: "Input",
				error: true,
				height: 1,
				errorMsg: "Putr Virus",
				placeholder: "ENter",
				xsWidth: 12,
				mdWidth: 8,
				lgWidth: 6,
				onChange: (e) => { setValue(e.target.value) },
				value: value,
			},
			{
				list: [
					{ displayName: "Male", value: "male" },
					{ displayName: "Female", value: "female" }
				],
				value: value,
				xsWidth: 12,
				mdWidth: 8,
				lgWidth: 6,
				label: "Gender",
				type: "radio",
				name: "gender",
				onChange: (e) => { setValue(e.target.value) },
				color: "secondary",
				error: false,
				errorMsg: "ABC"
			},
			{
				value: 1,
				label: "ABCF",
				xsWidth: 1,
				mdWidth: 1,
				lgWidth: 2,
				label: "AVASDADAWd",
				type: "checkbox",
				onChange: (e) => { setValue(1) },
				color: "secondary",
			},
			{
				value: 1,
				xsWidth: 1,
				mdWidth: 1,
				lgWidth: 2,
				label: "AVASDADAWd",
				type: "checkbox",
				onChange: (e) => { setValue(1) },
				color: "secondary",
			}
			]} /> */}

			{/* <SMRadio
				error={true}
				errorMsg={"Please Select An Option"}
				name={"gender"}
				label={"Gender"}
				list={[
					{ displayName: "Male", value: "male" },
					{ displayName: "Female", value: "female" }
				]}
				value={value}
				onChange={(e) => { setValue(e.target.value) }}
				color={"secondary"}
			/> */}

			{/* <SMCheckbox value={value} size={"large"} color={"success"} onChange={(e) => { setValue(e.target.checked); console.log(value) }} /> */}

			{/* <SMSwitch
				color={"warning"}
				size={"medium"}
				checked={value}
				onChange={(e) => { setValue(e.target.checked) }}
				disabled={false}
			/> */}

			{/* <div>
				<SMButton label="Click ME" onClick={() => { setValue((prev) => { return !prev }) }}></SMButton>
			</div> */}

			{/* <div style={{ width: '60vw' }}>
				<SMTable
					limit={40}
					borderStyle={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#009fff9e" }}
					style={{ width: "100%" }}
					cols={[{ value: "id", displayName: "ID" }, { value: "title", displayName: "Title" }]}
					data={dummyData} />
			</div> */}

			{/* <SMInput
				label="CLICK ME"
				error={true}
				variant="outlined"
				errorMsg="HIIII"
				value={value}
				onChange={(e) => { console.log(e.target.value); setValue(() => { return e.target.value }); }}
				height={0}
				placeholder={"12312312"}
			/> */}

		</div >
	)
}
export default TestingPage;