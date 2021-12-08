import React from 'react'
import { Typography, Box } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
const useStyle = makeStyles({
    headingColor: {
        backgroundColor: "#1565C0",
        color: "white"
    },

})
const Header = () => {


    const clasess = useStyle();
    return (
        <>
            <Box textAlign="center" className={clasess.headingColor} p={2} mb={2}>
                <Typography variant="h2" style={{ fontFamily: 'Encode Sans sans-serif'}}>Welcome To RV TechnoLabs</Typography>
                <Typography variant="h4">Employee Management System</Typography>
            </Box>


        </>
    )
}

export default Header
