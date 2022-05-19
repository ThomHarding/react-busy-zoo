import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('snail button adds one snail', () => {
  render(<App />);
  const snails = screen.getAllByText(/🐌/i);
  const snailCount = snails.length;
  const addSnailButton = screen.getByText(/Snail/i);
  fireEvent.click(addSnailButton);
  const newSnails = screen.getAllByText(/🐌/i);
  const newSnailsCount = newSnails.length;
  expect(snailCount + 1 === newSnailsCount);
});

test('zoo can both open and close', () => {
  render(<App />);
  const closeZooButton = screen.queryByText(/Close it/i);
  const openZooButton = screen.queryByText(/Open the zoo/i);
  fireEvent.click(closeZooButton);
  const closed = screen.queryByText('get out of my entire zip code');
  expect(closed).toBeInTheDocument();
  fireEvent.click(openZooButton);
  const open = screen.queryByText('zoo\'s open come right in :)');
  expect(open).toBeInTheDocument();
  fireEvent.click(closeZooButton);
  const laterClosed = screen.queryByText('get out of my entire zip code');
  expect(laterClosed).toBeInTheDocument();
});
