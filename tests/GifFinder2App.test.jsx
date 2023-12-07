import { render, screen } from '@testing-library/react';
import { GifFinder2App } from '../src/GifFinder2App';

describe('Test on <GifFinder2App />', () => {
  test('Should render the title in h1', () => {
    render(<GifFinder2App />);
    expect(screen.findByRole('h1')).toBeTruthy();
  });
});
