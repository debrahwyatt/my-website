import { render, screen } from '@testing-library/react'
import UML from './UML'

test('UML page: Renders', () => {
  render(<UML />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})
