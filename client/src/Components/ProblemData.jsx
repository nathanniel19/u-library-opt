import { React, useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ThemeProvider,
    Paper,
    Button
} from '@mui/material';
import Axios from "axios";
import Theme from '../Theme';


const ProblemData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/problemRead").then((response) => {
            setData(response.data);
        });
        
    }, []);
    
    return (
        <div>
            <ThemeProvider theme={Theme}>
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Problem</TableCell>
                                <TableCell align="right">Brand</TableCell>
                                <TableCell align="right">Model</TableCell>
                                <TableCell align="center">View File</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { data.map((datas) => {
                                return (
                                    <TableRow>
                                        <TableCell>{datas.unitProblem}</TableCell>
                                        <TableCell align="right">{datas.unitBrand}</TableCell>
                                        <TableCell align="right">{datas.unitModel}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained">View File</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </div>
  )
}

export default ProblemData