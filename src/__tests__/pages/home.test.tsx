import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/home';
import { renderWithAlertContext } from '../__utils__/renderUtil';

jest.mock('../../context/alert');

const setAlert = jest.fn();
const removeAlert = jest.fn();
const mockAlertProviderVal = { setAlert, removeAlert };

const renderPage = () => {
    return render(renderWithAlertContext(<HomePage />, mockAlertProviderVal));
};

test('renders Home page Title', () => {
    renderPage();
    const pageText = screen.getByText('Home page');
    expect(pageText).toBeInTheDocument();
});

test('render alert on page mount', () => {
    renderPage();
    expect(setAlert).toBeCalled();
});
