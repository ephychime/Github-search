import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header'; 

describe('Header Component', () => {
  test('renders navigation elements correctly', () => {
    render(<Header />);

    const image = screen.getByAltText('github-icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('w-24 h-16');

  });
});
