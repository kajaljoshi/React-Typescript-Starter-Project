import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header', () => {
    render(<App />);
    const headerText = screen.getByText('Test Header');
    expect(headerText).toBeInTheDocument();
});

test('renders home page', () => {
    render(<App />);
    const pageText = screen.getByText('Home page');
    expect(pageText).toBeInTheDocument();
});
