import { render, screen, logRoles } from '@testing-library/react';
import App from './App';

test.skip('example test one', () => {
  render(<App />);
  logRoles(screen.getByTestId("parent-container"))
  const btnElement = screen.getByRole("button", {name: 'Click here', exact: false});
  expect(btnElement).toBeInTheDocument();
});
