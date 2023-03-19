import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SMInput from './SMInput';
import SMRadio from './SMRadio';
import SMCheckbox from './SMCheckbox';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));
// {
// width:4,
// onChange:()=>{},
// value:value,
// }
function SMForm({ list, button }) {
	return (
		<Box sx={{ flexGrow: 1, justifyContent: 'center' }}>
			<Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
				{
					list.map((v, i) => {
						return (
							<Grid
								key={i}
								item
								xs={v.xsWidth}
								sm={v.smWidth}
								md={v.mdWidth}
								lg={v.lgWidth}>
								{v.comp}
							</Grid>
						)
					})
				}
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					{button}
				</Grid>
			</Grid>
		</Box >
	);
}

export default SMForm;