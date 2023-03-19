import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

function SMRadio({ list, label, value, onChange, error, helperText }) {
	return (
		<FormControl error={error}>
			<FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				value={value}
				onChange={onChange}>
				{
					list.map((v, i) => {
						return <FormControlLabel key={i} value={v.value} control={<Radio />} label={v.displayName} />
					})
				}
			</RadioGroup>
			<FormHelperText>{helperText}</FormHelperText>
		</FormControl>
	);
}
export default SMRadio;