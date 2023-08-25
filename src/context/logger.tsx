import * as React from 'react';
import { useRollbar } from '@rollbar/react';

type LoggerContextValue = {
    logInfo: (_: string) => void;
    logError: (_: any) => void;
    logWarning: (_: string) => void;
};

const getLocalLogMethods = (): LoggerContextValue => {
    return {
        logInfo: (msg: string) => console.log(msg),
        logError: (error: any) => console.error(error),
        logWarning: (msg: string) => console.warn(msg),
    };
};

type LoggerContextProviderPropType = {
    children: JSX.Element;
};

export const LoggerContext = React.createContext(getLocalLogMethods());

export const LoggerContextProvider = (
    props: LoggerContextProviderPropType
): JSX.Element => {
    const rollbar = useRollbar();

    const getRollbarLogMethods = (): LoggerContextValue => {
        return {
            logInfo: (msg: string) => rollbar.info(msg),
            logError: (error: any) => rollbar.error(error),
            logWarning: (msg: string) => rollbar.warn(msg),
        };
    };

    const logObject =
        process.env.NODE_ENV === 'development'
            ? getLocalLogMethods()
            : getRollbarLogMethods();

    return (
        <LoggerContext.Provider value={logObject}>
            {props.children}
        </LoggerContext.Provider>
    );
};
