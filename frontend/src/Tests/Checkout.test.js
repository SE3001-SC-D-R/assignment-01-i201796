import '@testing-library/jest-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import Checkout from '../Pages/Checkout';
import { render, screen, fireEvent} from '@testing-library/react';
import React from 'react'
import { createMemoryHistory } from "history";

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

  test('Place Order Button Exists?', () => {
    render(<BrowserRouter><Checkout /></BrowserRouter>);
    const linkElement = screen.getByTestId("PO-bt");
    expect(linkElement).toBeInTheDocument();
  });

  
  test('Sofa Image Renders?', () => {
    render(<BrowserRouter><Checkout /></BrowserRouter>);
    const linkElement = screen.getByTestId("img1");
    expect(linkElement).toBeInTheDocument();
  });

  test('Checkout Page Loaded?', () => {
    render(<BrowserRouter><Checkout /></BrowserRouter>);
    const linkElement = screen.getByTestId("Checkout-h1");
    expect(linkElement).toHaveTextContent("Checkout");
  });

//   const renderWithRouter = (component) => {
//     const history = createMemoryHistory()
//     return { 
//     ...render (
//     <Router history={history}>
//         {component}
//     </Router>
//     )
//   }
//   }
// test('Should render thankyou page', () => {

//   const { container, getByTestId } = renderWithRouter(<Checkout/>) 
//   const intialLink = getByTestId("Button")
//   const postLink = getByTestId("Thank-you-Page-Link")

//   expect(container.innerHTML).toMatch('Checkout')
//   expect(intialLink).toContainElement(postLink)
// })

