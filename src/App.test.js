<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
