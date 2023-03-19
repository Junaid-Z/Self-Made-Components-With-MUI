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
// 	type: "input",
// 	width:4,
// onChange:()=>{},
// value:value,
// }
function ExSMForm({ list, button }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
				{
					list.map((v, i) => {
						return (
							<Grid
								key={i}
								item
								xs={v.xsWidth}
								md={v.mdWidth}
								lg={v.lgWidth}
							>
								{
									v.type === "input" ?
										<SMInput
											placeholder={v.placeholder}
											label={v.label}
											error={v.error}
											errorMsg={v.errorMsg}
											onChange={v.onChange}
											disabled={v.disabled}
											height={v.height}
											value={v.value} />
										: v.type === "radio" ?
											<SMRadio
												value={v.value}
												onChange={v.onChange}
												errorMsg={v.errorMsg}
												label={v.label}
												list={v.list}
												color={v.color}
												error={v.error}
											/>
											: v.type === "checkbox" ?
												<SMCheckbox value={v.value} label={v.label} size={v.size} color={v.color} onChange={v.onChange} />
												: <></>
								}
							</Grid>
						)
					})
				}
			</Grid>
		</Box >
	);
}

export default ExSMForm;