export const getMoviesData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    );
    const data = await response.json();
    return data;

    // return new Promise((resolve) => {
    //   setTimeout(() => resolve({ message: "Welcome to About Page!" }), 2000);
    // });
  } catch (error) {
    console.log(error);
  } //here we are fetching data from the api
};
