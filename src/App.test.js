import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the text repositories', () => {
  render(<App />);
  const linkElement = screen.getByText(/repositories/i);
  expect(linkElement).toBeInTheDocument();
});


