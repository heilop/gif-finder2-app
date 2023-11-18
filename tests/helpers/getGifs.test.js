import { getGifs } from '../../src/helpers/getGifs';

describe('Test on getGifs', () => {
    test('should return an gif arrays', async () => {
        const gifs = await getGifs ('One Punch');
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })

    test('should return 0 elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
 })
