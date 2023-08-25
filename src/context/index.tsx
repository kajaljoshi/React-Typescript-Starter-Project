import * as React from 'react';
import { Provider as RollbarProvider } from '@rollbar/react';
import { AlertContextProvider } from './alert';
import { LoggerContextProvider } from './logger';
import ErrorBody from '../components/errorBody';
import ErrorBoundry from '../components/errorBoundry';

type ContextProviderWrapperPropType = {
    children: JSX.Element;
};

const rollbarConfig = {
    accessToken: process.env['LOG_KEY'],
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        client: {
            javascript: {
                code_version: '1.0.0',
                source_map_enabled: true,
            },
        },
    },
};

const ContextProviderWrapper = ({
    children,
}: ContextProviderWrapperPropType): JSX.Element => {
    return (
        <>
            <RollbarProvider config={rollbarConfig}>
                <LoggerContextProvider>
                    <ErrorBoundry fallbackComponent={ErrorBody}>
                        <AlertContextProvider>{children}</AlertContextProvider>
                    </ErrorBoundry>
                </LoggerContextProvider>
            </RollbarProvider>
        </>
    );
};

export default ContextProviderWrapper;
