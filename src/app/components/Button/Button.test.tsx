import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button correctly', () => {
  const { getByText } = render(<Button label="Test Button" />);
  expect(getByText('Test Button')).toBeInTheDocument();
});

test('button click handler works', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="Test Button" onClick={handleClick} />);
  fireEvent.click(getByText('Test Button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
