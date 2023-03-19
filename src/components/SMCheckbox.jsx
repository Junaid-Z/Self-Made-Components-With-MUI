import Checkbox from '@mui/material/Checkbox';

function SMCheckbox({ label, checked, onChange, disabled, size }) {
    return (
        <label style={{ display: 'flex', alignItems: 'center' }}>
            {label}
            <Checkbox
                size={size}
                disabled={disabled || false}
                onChange={onChange}
                checked={checked}
            />
        </label>
    );
}

export default SMCheckbox;