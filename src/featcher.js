const Base_URL = "http://localhost:3001";

export const featcher = async (url) => {
  let responseObject = { errorMessage: " ", data: [] };
  try {
    const response = await fetch(Base_URL + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status} `);
        }
        return response.json();
      })
      .then((data) => {
        responseObject.errorMessage = "";
        responseObject.data = data;
        //return data;
      });
  } catch (error) {
    responseObject.errorMessage = error.message;
  }
  return responseObject;
};

export const getCategories = () => {
  return featcher("/categories");
};

export const getProducts = (id) => {
  return featcher("/products?catId=" + id);
};

export const getProductById = (id) => {
  return featcher("/products/" + id);
};
