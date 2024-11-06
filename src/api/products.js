import axios from 'axios';

export const fetchProducts = async (filter) => {
  const url = `https://itx-frontend-test.onrender.com/api/product?filter=${filter}`;
  const { data } = await axios.get(url);

  if (filter) {
    const filteredData = data.filter((product) =>
      product.brand.toLowerCase().includes(filter.toLowerCase()) ||
      product.model.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData;
  }

  return data;
};