import { makeMeShortPost } from '../makeMeShortPost';

const mockJsonResponse = () => Promise.resolve({ mockJsonResponse: 'makeMeShortPost' });

const mockFailedJsonResponse = () => Promise.resolve({ error: 'error' });

describe('makeMeShortPost', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it('calls fetch with the correct parameters', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: mockJsonResponse,
      })
    );

    const URL = await makeMeShortPost({ URL: 'http://example.com' });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith('http://localhost/api/make-me-short', {
      body: '{"URL":"http://example.com"}',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    expect(URL).toEqual({ mockJsonResponse: 'makeMeShortPost' });
  });

  it('returns an object with error if fetch fails', async () => {
    const error = new Error('failed fetch');

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(error));

    const URL = await makeMeShortPost({ URL: 'http://example.com' });

    expect(URL).toEqual({ error });
  });

  it('returns an object with error if response has error property', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: mockFailedJsonResponse,
      })
    );

    const URL = await makeMeShortPost({ URL: 'http://example.com' });

    expect(URL).toEqual({ error: new Error('error') });
  });
});
