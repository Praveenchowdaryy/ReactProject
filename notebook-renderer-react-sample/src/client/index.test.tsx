jest.config.js
{
  "preset": "react-native",
  "testEnvironment": "jsdom",
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
}

src/client/index.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});