export const mostVisitedGet = async () => {
  const BASE_URL = window.location.origin;

  try {
    const mostVisited = await fetch(`${BASE_URL}/api/most-visited`).then((data) =>
      data.json()
    );

    return mostVisited;
  } catch (err) {
    return [];
  }
};
