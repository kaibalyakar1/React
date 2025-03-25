export const fetchMoviewDetails = async ({ params }) => {
  console.log("params", params);

  const { id } = params;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=1c12799f`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
