export const makeMeShortPost = async ({ URL, code }) => {
  const { BASE_URL } = process.env;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ URL, code }),
  };

  try {
    const data = await fetch(`${BASE_URL}/api/make-me-short`, requestOptions);
    const dataJSON = await data.json();

    if (dataJSON.error) {
      throw new Error(dataJSON.error);
    }

    return dataJSON;
  } catch (err) {
    return { error: err };
  }
};
