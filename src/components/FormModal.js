// import * as React from 'react';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormModal({ isOpen, handleClose, addRows }) {

    const [name, setName] = useState({});

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add user to the list fill out form below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="uName"
                        name="Name"
                        label="Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            const obj = { [e.target.name]: e.target.value }
                            setName(obj);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={() => addRows(name)}>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
