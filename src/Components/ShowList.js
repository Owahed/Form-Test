import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ShowList = () => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch('https://obscure-island-01542.herokuapp.com/allList')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const classes = useStyles();
    return (
        <div className="container">
            
            <div className="mt-5">
                <h3 className="mb-5 text-center">All List</h3>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Name</b></TableCell>
                                <TableCell align="right"> <b>Email ID</b> </TableCell>
                                <TableCell align="right"> <b>Country</b>  </TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {services.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                    {row.firstName}  {row.lastName}
                                    </TableCell>

                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.counter}</TableCell>
                                   
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ShowList;