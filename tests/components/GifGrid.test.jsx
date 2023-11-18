import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Test on <GifGrid />', () => {
  const category = 'Breaking Bad';

  test('Should display the initial loading', () => {
    render(<GifGrid category={ category }/>);
    expect(screen.getByText('Is loading...'))
    expect(screen.getByText(category))
  });  
});

