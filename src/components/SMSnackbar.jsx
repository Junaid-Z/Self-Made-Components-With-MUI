import Snackbar from '@mui/material/Snackbar';

function SMSnackbar({ position, open, handleClose, duration, message }) {
	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: position.vertical,
					horizontal: position.horizontal
				}}
				autoHideDuration={duration}
				open={open}
				onClose={handleClose}
				message={message}
			/>
		</div>
	);
}

export default SMSnackbar;