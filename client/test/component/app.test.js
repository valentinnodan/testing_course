import {render, screen} from "@testing-library/react";
import React from "react";
import App from '../../src/App';

describe('all elements are rendered correctly', () => {
    beforeEach(() => {
        render(<App />);
    })
    it('contains header', () => {
        expect(screen.getByText('Authorize')).toBeInTheDocument();
        // expect(screen.queryByText('Authorize')).not.toBe(null);
    })
})