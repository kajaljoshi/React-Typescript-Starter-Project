import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/home';
import { renderWithAlertContext } from '../__utils__/renderUtil';
import { isTemplateExpression } from 'typescript';
import { isTypedArray } from 'util/types';
import { AlertContext, AlertContextProvider } from '../../context/alert';

const setAlert = jest.fn();
const removeAlert = jest.fn();
const mockAlertProviderVal = { setAlert, removeAlert };

describe("Alert Context test",() => {
    
    const AlertsMockTest = () => {
        const { setAlert, removeAlert} = React.useContext(AlertContext);

        useEffect(() => {
            let id1 = setAlert({
                childElement: 'test alert 1'
            });
            let id2 =setAlert({
                childElement: 'test alert 2'
            });
            removeAlert(id1);
        }, [])

        return(
            <></>
        )
    }

    const renderPage = () => {
        return render(
            <AlertContextProvider>
                <AlertsMockTest />
            </AlertContextProvider>
        );
    };

    it('Should display and remove alert correctly', () => {
        
        renderPage();
        const alertDiv = screen.getByText('test alert 2');
        expect(alertDiv).toBeInTheDocument();

    });
});

