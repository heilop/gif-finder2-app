import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test on <AddCategory />', () => {
  test('Should change the field text value', () => {
    render(<AddCategory />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Ippo' }});
    expect(input.value).toBe('Ippo');
  })
})
