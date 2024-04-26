import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product';

describe('Product Component', () => {
    test('renders Product component', () => {
        render(<Product />);
        expect(screen.getByText(/Product Details/i)).toBeInTheDocument();
    });
});
