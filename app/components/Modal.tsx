import { useCallback } from "react";
import { Container, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

interface Props{
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal=({setOpen,open}:Props)=>{

      // Function to close the modal
  const handleClose = useCallback(() => {
    setOpen(false);
  },[]);

    return(
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submission Successful</DialogTitle>
        <DialogContent>
          <Typography>Your data has been accepted! We will get back to you soon.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default Modal