import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestingPage from "../Pages/TestingPage";
import components from "../Data/ComponentsList";
import SMDashboard from "../Pages/SMDashboard";
import ButtonAPI from "../Pages/APIS/ButtonAPI";
import SwitchAPI from "../Pages/APIS/SwitchAPI";
import CheckboxAPI from "../Pages/APIS/CheckboxAPI";
import SelectAPI from "../Pages/APIS/SelectAPI";
import InputAPI from "../Pages/APIS/InputAPI";
import RadioAPI from "../Pages/APIS/RadioAPI";
import SnackbarAPI from "../Pages/APIS/SnackbarAPI";
import ModalAPI from "../Pages/APIS/ModalAPI";
import GridFormAPI from "../Pages/APIS/FormAPI";
export default function MyRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SMDashboard links={components} />} >
					<Route path="button" element={<ButtonAPI />}></Route>
					<Route path="switch" element={<SwitchAPI />}></Route>
					<Route path="checkbox" element={<CheckboxAPI />}></Route>
					<Route path="select" element={<SelectAPI />}></Route>
					<Route path="input" element={<InputAPI />}></Route>
					<Route path="radio" element={<RadioAPI />}></Route>
					<Route path="snackbar" element={<SnackbarAPI />}></Route>
					<Route path="modal" element={<ModalAPI />}></Route>
					<Route path="form" element={<GridFormAPI />}></Route>
				</Route>
				<Route path="/testing" element={<TestingPage />} />
			</Routes>
		</BrowserRouter>
	)
}