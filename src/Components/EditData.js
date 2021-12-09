import { Typography, Box, Grid, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { deepPurple, green } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import React from 'react'

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
                                <TextField autoComplete="id" label="id" name="id" id="id" required fullWidth autoFocus value="1" disabled />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="Name" label="Name" name="Name" id="Name" required fullWidth autoFocus value="" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="Email" label="Email" name="Email" id="Email" required fullWidth autoFocus value="" />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button variant="contained" type="button" fullWidth color="primary">Save</Button>

                        </Box>
                        <Box m={3} textAlign="center">
                            <Link to="/">
                                <Button variant="contained" color="primary" style={{ textDecoration: "none" }} align="center">Back To Home</Button>
                            </Link>
                        </Box>

                    </form>
                </Grid>

            </Grid>
        </>
    )
}

export default EditData
