import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkout from '../Pages/Checkout';


test('Nav Exist?', () => {
  render(<Checkout />);
  const linkElement = screen.getByTestId("Nav");
  expect(linkElement).toBeInTheDocument();
});

test('Text of the lable is amoire?', () => {
    render(<Checkout />);
    const linkElement = screen.getByTestId("AmoireLable");
    expect(linkElement).toHaveTextContent("Amoire");
  });