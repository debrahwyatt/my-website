import { render, screen } from '@testing-library/react'
import Docs from './Docs'

test('Docs page: Renders', () => {
  render(<Docs />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})
