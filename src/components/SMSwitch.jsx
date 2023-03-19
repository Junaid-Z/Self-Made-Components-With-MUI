import * as React from 'react';
import Switch from '@mui/material/Switch';

function SMSwitch({ onChange, disabled, size, checked }) {
	const label = { inputProps: { 'aria-label': 'Switch demo' } };
	return (
		<Switch
			{...label}
			checked={checked}
			disabled={disabled}
			onChange={onChange ? onChange : () => { }}
			size={size} />
	);
}
export default SMSwitch;