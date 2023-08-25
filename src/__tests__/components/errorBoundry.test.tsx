import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ErrorBoundary  from '../../components/errorBoundry';
import ErrorBody from '../../components/errorBody';

let shouldThrowError = false;

describe('Error Boundry test', () => {

    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
    })
    
    const MayThrowError = () : JSX.Element => {
        if(shouldThrowError) {
            throw new Error("Test Error");
        }

        return (<div>Body content!</div>)
    }

    const renderBoundry = (shouldThrowError = false) => {
        return render(
            <ErrorBoundary fallbackComponent={ErrorBody}>
                <MayThrowError />
            </ErrorBoundary>
        )
    }
    
    it('Render children correctly',() => {
        
        renderBoundry();
        let bodyContent = screen.getByText('Body content!');
        expect(bodyContent).toBeInTheDocument();

    });

    it('Render fallback component on error',() => {
        shouldThrowError = true;
        renderBoundry();
        let bodyContent = screen.queryByText('Body content!');
        expect(bodyContent).not.toBeInTheDocument();
        let fallbackUI = screen.getByTestId('errorBodyDiv');
        expect(fallbackUI).toBeInTheDocument();
    })
})