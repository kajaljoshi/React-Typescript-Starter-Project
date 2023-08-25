import * as React from 'react'
import { Box, Typography } from '@mui/material'

const errorImageSrc = '../../assets/error.jpeg'

type ErrorBodyPropType = {
    onReset?: Function | null
}

const ErrorBody = ({ onReset }: ErrorBodyPropType): JSX.Element => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                width="50%"
                height="40%"
                src={errorImageSrc}
                alt="Error"
                loading="lazy"
            />
            <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                    <span>
                        We have logged the error! We will fix it soon! Please
                        try again after some time!
                    </span>
                </Typography>
            </Box>
        </Box>
    )
}

export default ErrorBody
