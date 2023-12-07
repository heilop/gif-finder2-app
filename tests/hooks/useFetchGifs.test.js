import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { exact } from 'prop-types';

describe('Tests on hook useFetchGifs', () => {
  test('Should return the initial state', () => {

    const { result } =renderHook( () => useFetchGifs('Breaking Bad'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

  test('Should return an array of images and isLoading as false', async() => {

    const { result } = renderHook(() => useFetchGifs('Breaking Bad'));

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })
})
