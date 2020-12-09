import {render, screen} from "@testing-library/react";
import React from "react";
import App from '../../../src/App';

describe('all elements are rendered correctly', () => {
    beforeEach(() => {
        render(<App />);
    })
    it('renders header', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByText('Coin')).toBeInTheDocument();
        expect(screen.getByText('Authorize')).toBeInTheDocument();
    })
    it('renders greeting when not authorized', () => {
        expect(screen.getByText('Hello, guest!')).toBeInTheDocument();
    })
    it('does not render link to budget when not authorized', () => {
        expect(screen.queryByText('To budget')).toBe(null);
    })
    it('renders promo text', () => {
        expect(screen.getByText(new RegExp('Coin is an app'))).toBeInTheDocument();
    })
})