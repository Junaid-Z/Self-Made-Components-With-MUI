import SMInput from "../../components/SMInput";
import { Grid } from "@mui/material";
import { useState } from "react";

function InputAPI() {
    let [value, setValue] = useState();
    return (
        <div className="container">
            <div className="testingArea">
                <Grid container sx={{ alignItems: 'start' }} rowSpacing={2} columnSpacing={2} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4}>
                        <SMInput
                            label={"Simple input"}
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                            placeholder={"A placeholder"}
                        />
                    </Grid>

                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4}>
                        <SMInput
                            error={true}
                            helperText={'required*'}
                            label={"Input in error state with helper text"}
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                            placeholder={"A placeholder"}
                        />
                    </Grid>

                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={4} lg={4} xl={4}>
                        <SMInput
                            height={2}
                            disabled={true}
                            label={"Disabled Input"}
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                            placeholder={"A placeholder"}
                        />
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
                <p>This prop should contain a function the will be executed every time the value of component is changed</p>

                <ul>
                    <li>
                        <div className="title">helperText:</div>
                    </li>
                </ul>
                <p>This prop contains a small message for the user below the component</p>

                <ul>
                    <li>
                        <div className="title">disabled:</div>
                    </li>
                </ul>
                <p>This prop takes a boolean value which which identifies whether the
                    component is in a disabled state or not</p>

                <ul>
                    <li>
                        <div className="title">placeholder:</div>
                    </li>
                </ul>
                <p>This prop defines the placeholder for when the field is empty</p>

                <ul>
                    <li>
                        <div className="title">height:</div>
                    </li>
                </ul>
                <p>This prop defines the amount of lines the input field occupies</p>

                <ul>
                    <li>
                        <div className="title">error:</div>
                    </li>
                </ul>
                <p>This prop takes a boolean value which which identifies whether the
                    component is in an error state or not</p>

                <ul>
                    <li>
                        <div className="title">label:</div>
                    </li>
                </ul>
                <p>This prop should have a sting which will be displayed
                    on top when the input is in focus.
                </p>

            </div>
        </div >
    )
}

export default InputAPI;