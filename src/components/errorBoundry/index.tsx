import * as React from 'react';
import { LoggerContext } from '../../context/logger';

type ErrorBoundryPropType = {
    fallbackComponent: (_: any) => JSX.Element;
    children: any;
};

type ErrorBoundryState = {
    isError: boolean;
};

const initialState = {
    isError: false,
};

class ErrorBoundry extends React.Component<
    ErrorBoundryPropType,
    ErrorBoundryState
> {
    static contextType = LoggerContext;
    context!: React.ContextType<typeof LoggerContext>;

    constructor(props: ErrorBoundryPropType) {
        super(props);
        this.state = initialState;
    }

    static getDerivedStateFromError(error: any) {
        return { isError: true };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        // log error to system
        this.context.logError(error);
    }

    render() {
        const { isError } = this.state;

        if (isError) {
            return (
                <this.props.fallbackComponent />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundry;
