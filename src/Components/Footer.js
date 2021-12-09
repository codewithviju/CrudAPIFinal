import React from 'react'
import { Typography, Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
const useStyle = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },

})
const Footer = () => {


    const clasess = useStyle();
    return (
        <>
            <Box textAlign="center" className={clasess.headingColor} p={2} mb={2}>

                <Typography variant="h5" align="right">All Right Reserved - RV Technolabs</Typography>
            </Box>


        </>
    )
}

export default Footer
