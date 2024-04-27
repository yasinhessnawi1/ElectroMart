import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPage from './ProductPage';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';
jest.mock('../services/api');
jest.mock('react-router-dom', () => ({
    useParams: jest.fn()
}));

describe('ProductPage', () => {
    it('renders product details', async () => {
        useParams.mockReturnValue({ id: '1' });
        fetchProductDetails.mockResolvedValue({
            id: '1',
            name: 'Laptop',
            description: 'High performance',
            price: 1000
        });
        render(<ProductPage />);
        expect(await screen.findByText('Laptop')).toBeInTheDocument();
        expect(screen.getByText('High performance')).toBeInTheDocument();
        expect(screen.getByText('Price: $1000')).toBeInTheDocument();
    });
});
