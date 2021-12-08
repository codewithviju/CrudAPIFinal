import { Typography, Box, Grid, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { deepPurple, green } from '@mui/material/colors'
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const usestyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        backgroundColor: green[400],
        color: "white"
    }
});

const EditData = () => {

    const classes = usestyle();
    const {id} = useParams();
    const navigate = useNavigate();
    const [Employee,setEmployee] = useState({
        empname : "",
        empemail : ""
    });

    // Get Single Record From API
    useEffect(()=>{

        async function getEmployee()
        {

            try {
                const Employee = await axios.get(`http://localhost:3333/employees/${id}`)
                setEmployee(Employee.data)
                
            }
            catch (error) {
                console.log(`Something Wrong.. Look At ${error}`)
            }
        }
        getEmployee();
    },[id])

    function GetDatafromField(e) {
        setEmployee({
            ...Employee,
            [e.target.name]: e.target.value
        })


    }

    async function OnFormSubmit(e) {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3333/employees/${id}`, Employee)
            navigate("/")
            
           

        }
        catch (error) {
            console.log(`Something Wrong.. Look At ${error}`)
        }
    }

    
    return (
        <>


            <Grid container justify="center" alignItems="center" justifyContent="center" spacing={4} center>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Edit Form</Typography>
                    </Box>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="id"  name="id"   fullWidth autoFocus value={id} disabled />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="Name" label="Name" name="empname" id="empname"  fullWidth autoFocus value={Employee.empname} onChange={e => GetDatafromField(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="Email" label="Email" name="empemail" id="empemail"  fullWidth autoFocus value={Employee.empemail} onChange={e => GetDatafromField(e)}/>
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button variant="contained" type="button" fullWidth color="primary" onClick={e => OnFormSubmit(e)}>Save</Button>

                        </Box>
                        <Box m={3} textAlign="center">
                            <Button variant="contained" onClick={()=> navigate('/')} >Back To Home</Button>
                        </Box>

                    </form>
                </Grid>

            </Grid>
        </>
    )
}

export default EditData
