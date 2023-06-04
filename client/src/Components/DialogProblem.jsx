import { React, useState } from 'react';
import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
    Button,
    ThemeProvider,
} from "@mui/material";
import storage from '../Firebase/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Axios from "axios";


import Theme from "../Theme";

const DialogProblem = () => {
    //Dialog Condition
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleClickOpen = () => {
        setDialogOpen(true);
    };
    const handleClickClose = () => {
        setDialogOpen(false);
    };

    //Input Condition
    const initialValue = {
        brand: "",
        model: "",
        problem: "",
        url: null
    };
    const [values, setValues] = useState(initialValue);
    const [files, setFiles] = useState(null);
    const [filesName, setFilesName] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleFileChange = (e) => {
        setFiles(e.target.files[0]);
        setFilesName(e.target.files[0].name)
    }

    //Firebase Upload Files
    const storageRef = ref(storage, "ProblemList/" + filesName);
    

    //Submit data condition
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/problemSubmit", {
            brand: values.brand,
            model: values.model,
            problem: values.problem,
            url: values.url
        });
        uploadBytes(storageRef, files)
            .then((snapshot) => {
                console.log("files uploaded");
                getDownloadURL(snapshot.ref)
                    .then(downloadURL => {
                        setValues({...values, url: downloadURL});
                        console.log(downloadURL);
                    });
        });
        setDialogOpen(false);
        console.log(values);
        //window.location.reload();
    };

    

    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Button variant='contained' onClick={handleClickOpen}>Submit Problem</Button>
                <Dialog open={dialogOpen}>
                    <DialogTitle align="center">Submit Problem Unit</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin='dense'
                            name="brand"
                            value={values.brand}
                            onChange={handleInputChange}
                            label="Input Brand"
                            variant="standard"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            name="model"
                            value={values.model}
                            onChange={handleInputChange}
                            label="Input Model"
                            variant="standard"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            name="problem"
                            value={values.problem}
                            onChange={handleInputChange}
                            label="Input Problem Description"
                            variant="standard"
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                    <input type = "file" name = "file" onChange = {handleFileChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={handleClickClose}>Close</Button>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </div>
    )
}

export default DialogProblem