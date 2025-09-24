import { rest, RestRequest, ResponseComposition, RestContext } from 'msw';

// Example fake data for playlist and songs
const fakePlaylist = [
  { id: 'song1', title: 'Fake Song 1', artist: 'Fake Artist 1' },
  { id: 'song2', title: 'Fake Song 2', artist: 'Fake Artist 2' },
];

const fakeSongs = {
  song1: { id: 'song1', title: 'Fake Song 1', url: '/fake/song1.mp3' },
  song2: { id: 'song2', title: 'Fake Song 2', url: '/fake/song2.mp3' },
};

export const handlers = [
  rest.get('/api/v1/playlist', (
    _req: RestRequest,
    res: ResponseComposition,
    ctx: RestContext
  ) => {
    return res(ctx.status(200), ctx.json(fakePlaylist));
  }),
  rest.get('/api/v1/songs/:id', (
    req: RestRequest,
    res: ResponseComposition,
    ctx: RestContext
  ) => {
    const { id } = req.params as { id: string };
    const song = fakeSongs[id as keyof typeof fakeSongs];
    if (song) {
      return res(ctx.status(200), ctx.json(song));
    }
    return res(ctx.status(404), ctx.json({ error: 'Song not found' }));
  }),
];
