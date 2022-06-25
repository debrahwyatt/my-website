import { render, screen } from '@testing-library/react'
import AI from './AI'

test('AI page: Renders', () => {
  render(<AI />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})
