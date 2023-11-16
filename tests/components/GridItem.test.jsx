import { render, screen } from '@testing-library/react'
import { GridItem } from '../../src/components/GridItem'

describe('Test on <GridItem/>', () => {

  const title = 'Demo title';
  const url = 'https://some-url/demo.jpg';

  test('should match with snapshot', () => {
    const { container } = render (<GridItem title={ title } url={ url } />)
    expect(container).toMatchSnapshot()
  })

  test('should have image with URL and ALT attributes', () => {
    render (<GridItem title={ title } url={ url } />)
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe(url);
    // expect( screen.getByRole('img').alt ).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe(url);
    expect( alt ).toBe(title);
  })

  test('should shown title of component', () => {
    render(<GridItem title={ title } url={ url } />);
    expect( screen.getByText(title) ).toBeTruthy();
   })
 })
