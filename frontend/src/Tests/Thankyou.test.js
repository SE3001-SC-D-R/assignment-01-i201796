import '@testing-library/jest-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import Thankyou from '../Pages/Thankyou';
import { render, screen, fireEvent} from '@testing-library/react';
import React from 'react'
import { createMemoryHistory } from "history";

test('Nav Exist?', () => {
  render(<BrowserRouter><Thankyou /></BrowserRouter>);
  const linkElement = screen.getByTestId("nv-id2");
  expect(linkElement).toBeInTheDocument();
});

test('Newletter From Loaded?', () => {
    render(<BrowserRouter><Thankyou /></BrowserRouter>);
    const linkElement = screen.getByTestId("form");
    expect(linkElement).toBeInTheDocument();
  });
  
test('Thank you Page Loaded?', () => {
    render(<BrowserRouter><Thankyou /></BrowserRouter>);
    const linkElement = screen.getByTestId("th-h1");
    expect(linkElement).toHaveTextContent("Order Confirmed!");
  });

  test('Order Conformation Loaded?', () => {
    render(<BrowserRouter><Thankyou /></BrowserRouter>);
    const linkElement = screen.getByTestId("conformation");
    expect(linkElement).toHaveTextContent("You order was successfuly completed.");
  });
