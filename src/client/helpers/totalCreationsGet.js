export const totalCreationsGet = async () => {
  const BASE_URL = window.location.origin;

  try {
    const totalCreations = await fetch(`${BASE_URL}/api/total-creations`).then((data) =>
      data.json()
    );

    return totalCreations;
  } catch (err) {
    return null;
  }
};
