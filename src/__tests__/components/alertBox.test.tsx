import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import AlertBox, { AlertProps, AlertSeverity } from '../../components/alertBox';
import { uniqueId } from 'lodash';

const removeAlert = jest.fn();
describe("AlertBox tests", () => {

    const renderAlertBox = (alerts: AlertProps[] | null) => {
        return render(<AlertBox alerts={alerts} onRemoveAlert={removeAlert}/>)
    }

    it("Display multiple alerts", () => {
        const alerts = [
            {
                id: uniqueId("test"),
                childElement: "alert test 1",
                severity: AlertSeverity.INFO
            },
            {
                id: uniqueId("test"),
                childElement: "alert test 2"
            }
        ]
        renderAlertBox(alerts);
        let alert1 = screen.getByText('alert test 1');
        let alert2 = screen.getByText('alert test 2');

        expect(alert1).toBeInTheDocument();
        expect(alert2).toBeInTheDocument();
    })

    it("Remove alert", () => {
        const alerts = [
            {
                id: uniqueId("test"),
                childElement: "alert test 1",
                severity: AlertSeverity.INFO
            }
        ]
        renderAlertBox(alerts);
        let alert1 = screen.getByText('alert test 1');
        expect(alert1).toBeInTheDocument();

        let removeBtn = fireEvent.click(screen.getByTitle('Close'));
        expect(removeAlert).toBeCalledWith(alerts[0].id);
    })

    it("Do not display alert if alerts = []", () => {
        renderAlertBox(null);
        
        let alertBoxDiv = screen.queryByTestId('alertBoxDiv');
        expect(alertBoxDiv).not.toBeInTheDocument();
    })
})