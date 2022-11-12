import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import { render, screen} from '@testing-library/react';
import React from 'react'


test('Nav Exist?', () => {
  render(<BrowserRouter><Checkout /></BrowserRouter>);
  const linkElement = screen.getByTestId("Nav");
  expect(linkElement).toBeInTheDocument();
});

test('Text of the lable is amoire?', () => {
    render(<BrowserRouter><Checkout /></BrowserRouter>);
    const linkElement = screen.getByTestId("AmoireLable");
    expect(linkElement).toHaveTextContent("Amoire");
  });

  test('Is Billing Form Loading?', () => {
    render(<BrowserRouter><Checkout /></BrowserRouter>);
    const linkElement = screen.getByTestId("Bill");
    expect(linkElement).toBeInTheDocument();
  });

  

