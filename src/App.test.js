import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders learn react link', () => {
  render(<App />);
  const wrapperElement = screen.getByTestId('app-wrapper');
  expect(wrapperElement).toBeInTheDocument();
});

describe('App', () => {
  it('should renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
