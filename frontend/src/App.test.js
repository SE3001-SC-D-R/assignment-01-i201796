import { render, screen} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import React from 'react'

test('Div Rendering?', () => {
  render(<App />);
  const linkElement = screen.getByTestId("AppDiv");
  expect(linkElement).toBeInTheDocument();
});
