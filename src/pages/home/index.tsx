import React from 'react'
import { AlertContext } from '../../context/alert'
import { AlertSeverity } from '../../components/alertBox'
import { Box, Typography } from '@mui/material'

const { useEffect } = React
const HomePage = (): JSX.Element => {
    // code goes here!!!

    // sample alert
    const { setAlert, removeAlert } = React.useContext(AlertContext)

    useEffect(() => {
        // Alert is invoked from here to display usage
        // In real scenario,do not invoke from useEffect
        const alertId = setAlert({
            severity: AlertSeverity.SUCCESS,
            childElement: 'Rock your project with this helper kit!!! 🚀😊',
        })
        return () => removeAlert(alertId)
    }, [])

    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="h5"> Home page</Typography>
        </Box>
    )
}

export default HomePage
