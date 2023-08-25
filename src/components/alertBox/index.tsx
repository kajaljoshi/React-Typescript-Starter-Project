import * as React from 'react'
import { Alert, Box, Stack } from '@mui/material'

export enum AlertSeverity {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    SUCCESS = 'success',
}

export type AlertProps = {
    id: string
    childElement?: JSX.Element | string
    severity?: AlertSeverity
}

export type AlertBoxProps = {
    alerts: Array<AlertProps> | null
    onRemoveAlert: (_: string) => void
}

const AlertBox = ({ alerts, onRemoveAlert }: AlertBoxProps): JSX.Element => {
    const getAlert = (alertItem: AlertProps) => {
        return (
            <Alert
                key={alertItem.id}
                onClose={() => onRemoveAlert(alertItem.id)}
                severity={alertItem.severity || AlertSeverity.INFO}
            >
                {alertItem.childElement}
            </Alert>
        )
    }

    return alerts ? (
        <Box sx={{ mx: 2 }}>
            <Stack spacing={2}>
                {alerts.map((alertItem) => getAlert(alertItem))}
            </Stack>
        </Box>
    ) : (
        <></>
    )
}

export default AlertBox
