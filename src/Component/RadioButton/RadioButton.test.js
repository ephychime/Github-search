import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

test('renders with default organization selected', () => {
  render(<RadioButton />);
  const radios = screen.getAllByRole('radio');
  const organizationRadio = radios.find(radio => radio.value === 'organizations');

  expect(organizationRadio).toBeInTheDocument();
  expect(organizationRadio).toBeChecked();
});

test('changes search type on radio button click', () => {
  render(<RadioButton />);
  const radios = screen.getAllByRole('radio');
  const usersRadio = radios.find(radio => radio.value === 'users');

  fireEvent.click(usersRadio);

  expect(usersRadio).toBeChecked();
});
