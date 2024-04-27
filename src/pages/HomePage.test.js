import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import useProducts from '../hooks/useProducts';
jest.mock('../hooks/useProducts');

describe('HomePage', () => {
    it('renders correctly', () => {
        useProducts.mockReturnValue({
            products: [{ id: 1, name: 'Laptop', description: 'High performance', price: 1000 }],
            loading: false,
            error: null
        });
        render(<HomePage />);
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Laptop')).toBeInTheDocument();
        expect(screen.getByText('High performance')).toBeInTheDocument();
    });

    it('shows loading state', () => {
        useProducts.mockReturnValue({
            products: [],
            loading: true,
            error: null
        });
        render(<HomePage />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays error message on failure', () => {
        useProducts.mockReturnValue({
            products: [],
            loading: false,
            error: 'Failed to fetch products'
        });
        render(<HomePage />);
        expect(screen.getByText('Error loading products!')).toBeInTheDocument();
    });
});
