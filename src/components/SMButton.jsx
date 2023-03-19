import { Button } from "@mui/material";

function SMButton({ variant, disabled, href, label, onClick, style }) {
	return (
		<Button
			sx={style}
			disabled={disabled || false}
			href={href}
			variant={variant}
			onClick={onClick}>
			{label}
		</Button>
	)
}
export default SMButton;