import React from 'react'
import { Box, Typography, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Tooltip, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom';
import { deepPurple, green, orange } from '@mui/material/colors'
import axios from 'axios'
import { useState, useEffect } from 'react'
const useStyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    },
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }
})

const ListData = () => {
    const clasess = useStyle();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    })

    // To Get Data From API

    async function getAllEmployees() {
        try {
            const employees = await axios.get("http://localhost:3333/employees")
            setEmployees(employees.data)
        }
        catch (error) {
            console.log(`Something Wrong.. Look At ${error}`)
        }
    }


    return (
        <>
            <Box textAlign="center" p={2} className={clasess.stuListColor}>
                <Typography variant="h4">Employees List</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161" }} fullwidth>
                            <TableCell align="center" className={clasess.tableHeadCell}>No</TableCell>
                            <TableCell align="center" className={clasess.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={clasess.tableHeadCell}>Email</TableCell>
                            <TableCell align="center" className={clasess.tableHeadCell}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            employees.map((employ, i) => {
                                return (
                                    <>
                                        <TableRow key={i}>
                                            <TableCell align="center">{i + 1}</TableCell>
                                            <TableCell align="center">{employ.empname}</TableCell>
                                            <TableCell align="center">{employ.empemail}</TableCell>
                                            <TableCell align="center">
                                                <Tooltip title="Edit">
                                                    <IconButton>
                                                        <Link to="/edit/1">
                                                            <EditIcon color="primary"></EditIcon>
                                                        </Link>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton>

                                                        <DeleteIcon color="secondary"></DeleteIcon>

                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>

                                    </>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListData
