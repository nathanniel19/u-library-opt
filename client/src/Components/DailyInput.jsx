import React, { useState } from 'react';

import {
    Container,
    Card,
    CardAction,
    CardContent,
    Button,
    Typography,
    ThemeProvider,
    TextField,
    Select,
    MenuItem,
    Menu,
} from "@mui/material";

import Navbar from './Navbar';
import Theme from '../Theme';

const DailyInput = () => {
    //Init Value
    const initialValue = [{
        name: "",
        activity: "",
        hourStart: "",
        hourEnd: "",
    },
    ];
    //Data Input Nama
    const [values, setValues] = useState(initialValue);
    const [listInput, setListInput] = useState(values);

    const addInput = (e) => {
        setValues([...values, initialValue])
    }

    //Data Karyawan
    const dataKaryawan = [
        "Jonathan Juan Daniel",
        "Gaza El Pasa",
        "Richo F.P",
        "Armat",
        "Hadi",
        "Dinda Oktaviani",
        "Andre Ishlah Azani",
        "Alvarezza"
    ];
    //Handle Change name
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues([{
            ...values,
            [name]: value,
        }]);
    };

    //console.log(values.map((data) => data))

    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Navbar />
                <Container>
                    <Card sx={{ maxWidth: 1200, mt: 5 }}>
                        <CardContent>
                            <Typography align="center" variant="h5" fontWeight="600">Submit Daily Activity Report</Typography>
                            <Button variant="contained" sx={{ mt: 4, ml: 3 }} onClick={addInput}>Tambah Activity</Button>

                            <Container sx= {{ mt: 4 }}>
                                <Select label="nama karyawan" name="name" value={values.name} onChange={handleInputChange} fullWidth>
                                    { dataKaryawan.map((data, index) => {
                                        return (
                                                <MenuItem id={index} value={data}>{data}</MenuItem>
                                        )
                                    })}
                                </Select>
                                {values.map((value, index) => {
                                    return (
                                    <div id={index}>
                                        <TextField variant="outlined" value={value.activity} label="Activity" sx={{ mt: 2, width: "50%" }}/>
                                        <TextField variant="outlined" value={value.hourStart} label="Jam Mulai" sx={{ mt: 2, ml: 2, width: "23%" }}/>
                                        <TextField variant="outlined" value={value.hour} label="Jam Selesai" sx={{ mt: 2, ml: 2, width: "24%" }}/>
                                    </div>
                                    )
                                })}
                            </Container>
                        </CardContent>
                    </Card>
                </Container>
            </ThemeProvider>
        </div>
  )
}

export default DailyInput