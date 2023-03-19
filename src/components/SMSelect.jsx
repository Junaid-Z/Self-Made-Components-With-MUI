import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
function SMSelect({ value, helperText, onChange, variant, displayEmpty, label, options, style }) {
	return (
		<Box sx={style}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>
				<Select sx={{ width: '100%' }}
					variant={variant}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={value}
					label={label}
					onChange={onChange}
					displayEmpty={displayEmpty ? displayEmpty : false}
				>
					{
						options.map((v, i) => {
							return (<MenuItem key={i} value={v.value}>{v.displayName}</MenuItem>)
						})
					}
				</Select>
				{
					helperText ?
						<FormHelperText>{helperText}</FormHelperText>
						: <></>
				}
			</FormControl>
		</Box >
	);
}
export default SMSelect;