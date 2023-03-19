import SMButton from "../../components/SMButton";
import { Grid } from "@mui/material";
import { useState } from "react";
import SMModal from "../../components/SMModal";
function ModalAPI() {
    let [value, setValue] = useState(false);
    return (
        <div className="container">
            <div className="testingArea">
                <Grid container sx={{ alignItems: 'center' }} rowGap={2} columnSpacing={1} columns={{ xs: 12, md: 12, lg: 12, xl: 12 }}>

                    <Grid item sx={{ justifyContent: 'center', display: 'flex' }} xs={12} md={12} lg={12} xl={12}>
                        <SMButton
                            label={"Open Modal"}
                            variant={"contained"}
                            onClick={() => { setValue(true) }}
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
                        <div className="title">open:</div>
                    </li>
                </ul>
                <p>This prop should contain a boolean value indicating whether the snackbar should be displayed or not</p>

                <ul>
                    <li>
                        <div className="title">handleClose:</div>
                    </li>
                </ul>
                <p>This prop should contain a function the will be executed to close the modal</p>

                <ul>
                    <li>
                        <div className="title">heading:</div>
                    </li>
                </ul>
                <p>This prop should contain some text or a component to be displayed as the title of the modal</p>

                <ul>
                    <li>
                        <div className="title">text:</div>
                    </li>
                </ul>
                <p>This prop should contain some text or a component to be displayed as the body of the modal</p>
                <SMModal
                    open={value}
                    handleClose={() => { setValue(false) }}
                    heading={"Hello World"}
                    text={"This is a modal"} />
            </div>
        </div >
    )
}

export default ModalAPI;