export const makeMeShortPost = async ({ URL, code }) => {
  const BASE_URL = window.location.origin;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ URL, code }),
  };

  try {
    const URLObject = await fetch(
      `${BASE_URL}/api/make-me-short`,
      requestOptions
    ).then((data) => data.json());

    if (URLObject.error) {
      throw new Error(URLObject.error);
    }

    return URLObject;
  } catch (err) {
    return { error: err };
  }
};
