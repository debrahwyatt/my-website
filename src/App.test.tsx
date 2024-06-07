import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom's custom matchers
import App from './App';
import './App.css'; // Import CSS file

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
