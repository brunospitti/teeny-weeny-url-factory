export const mostVisitedGet = async () => {
  const { BASE_URL } = process.env;

  try {
    const mostVisited = await fetch(`${BASE_URL}/api/most-visited`).then((data) =>
      data.json()
    );

    return mostVisited;
  } catch (err) {
    return [];
  }
};
