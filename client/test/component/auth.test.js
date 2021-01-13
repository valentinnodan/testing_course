import {render, fireEvent, screen} from "@testing-library/react";
import React from "react";
import App from '../../src/App';

global.user = {
    name: 'Ololo Ololoev',
    coins: []
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(user),
    })
);

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

describe('all elements are rendered correctly', () => {
    beforeEach(() => {
        fetch.mockClear();
        render(<App/>);
        fireEvent.click(screen.getByText('Authorize'))
    })

    it('renders auth page', () => {
        expect(screen.getAllByText('Log in')).not.toBe(null);
    })

    it('authorizes', async () => {
        fireEvent.change(screen.getByTestId('auth-input'), {target: {value: '1'}})
        fireEvent.click(screen.getAllByText('Log in')[1])
        await flushPromises();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(screen.getByText(new RegExp(user.name))).toBeInTheDocument();
        expect(screen.getByText('Log out')).toBeInTheDocument();
    })
})