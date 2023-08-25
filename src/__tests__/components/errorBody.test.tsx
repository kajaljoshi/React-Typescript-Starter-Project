import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import ErrorBody from '../../components/errorBody';

describe('Error Body test', () => {

    it('Render error body correctly',() => {
        const page = render(<ErrorBody />);
        expect(page).toMatchSnapshot();
    })
})