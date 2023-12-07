import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on <GifGrid />', () => {
  const category = 'Breaking Bad';

  test('Should display the initial loading', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={ category }/>);
    expect(screen.getByText('Is loading...'))
    expect(screen.getByText(category))
  });

  test('Should display items when images loading useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Haminne no Ippo',
        url: 'https://test.page/ippo,jpg'
      },
      {
        id: '1234',
        title: 'Goku',
        url: 'https://test.page/goku.jpg'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render( <GifGrid category = { category } />);
    expect( screen.getAllByRole('img').length).toBe(2);
  });
});

