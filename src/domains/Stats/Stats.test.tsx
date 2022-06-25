import { render, screen } from '@testing-library/react'
import Stats from './Stats'

test('Stats page: Renders', () => {
  render(<Stats />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})
