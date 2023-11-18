import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test on <AddCategory />', () => {
  test('Should change the field text value', () => {
    render(<AddCategory onNewCategory={() => {}}/>);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Ippo' }});
    expect(input.value).toBe('Ippo');
  })

  test('Should invoce onNewCategory if input has value', () => {
    const inputValue = 'Ippo';
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory = { onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue }});
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toBeCalledWith(inputValue);
  });

  test('Not should be called to onNewCategory when input value is empty', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory  onNewCategory = { onNewCategory } />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  })
})
