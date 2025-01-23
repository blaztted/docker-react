// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heyy mate text', () => {
  render(<App />);
  const textElement = screen.getByText(/heyy mate/i);
  expect(textElement).toBeInTheDocument();
});