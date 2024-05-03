
import { render, fireEvent, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox';

test('input field allows typing and displays text', () => {
    
  render(<SearchBox />);
  
  const inputField = screen.getByPlaceholderText('Type here');


  fireEvent.change(inputField, { target: { value: 'adanna12' } });

 
  expect(inputField.value).toBe('adanna12');
});
