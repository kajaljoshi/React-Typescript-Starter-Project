import * as React from 'react'
import AlertBox, { AlertProps } from '../components/alertBox'
import { uniqueId } from 'lodash'

enum AlertActions {
    AddAlert = 'addAlert',
    DeletAlert = 'deleteAlert',
}

type alertContextValueType = {
    setAlert: (_: alertContextProp) => string
    removeAlert: (_: string) => void
}

const initContextValue = {
    setAlert: () => '',
    removeAlert: () => null,
}

type alertContextProp = Omit<AlertProps, 'id'>

function alertReducer(alerts: AlertProps[], action: any) {
    switch (action.type) {
        case AlertActions.AddAlert: {
            return [...alerts, action.data]
        }
        case AlertActions.DeletAlert: {
            return alerts.filter((data) => data.id !== action.id)
        }
        default: {
            return []
        }
    }
}

export const AlertContext =
    React.createContext<alertContextValueType>(initContextValue)

export const AlertContextProvider = (props: any): JSX.Element => {
    const [alertList, dispatch] = React.useReducer(alertReducer, [])

    const addAlert = (data: alertContextProp) => {
        const id = uniqueId()
        dispatch({
            type: AlertActions.AddAlert,
            data: {
                id,
                ...data,
            },
        })
        return id
    }

    const deleteAlert = (id: string) =>
        dispatch({
            type: AlertActions.DeletAlert,
            id,
        })

    return (
        <AlertContext.Provider
            value={{ setAlert: addAlert, removeAlert: deleteAlert }}
        >
            <AlertBox alerts={alertList} onRemoveAlert={deleteAlert} />
            {props.children}
        </AlertContext.Provider>
    )
}
