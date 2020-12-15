export const mostVisitedGet = async () => {
  const BASE_URL = window.location.origin;

  try {
    const mostVisited = await fetch(`${BASE_URL}/api/most-visited`).then((data) =>
      data.json()
    );

    return mostVisited;
  } catch (err) {
    console.log('🚀 ~ file: mostVisitedGet.js ~ line 11 ~ mostVisitedGet ~ err', err);
    return [];
  }
};
