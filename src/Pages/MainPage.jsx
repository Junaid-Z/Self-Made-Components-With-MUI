import { Box, Grid } from '@mui/material';
import SMButton from '../components/SMButton'
function MainPage() {
    return (
        <Grid className='container'>
            <section>
                <div className="testingBox">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <Grid item xs={12} md={6} lg={4}>
                                <SMButton
                                    label={"A contained Button"}
                                    variant={"contained"}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className="usage">

                </div>
            </section>
        </Grid>
    )
}
export default MainPage;