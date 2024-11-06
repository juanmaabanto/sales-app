import axios from 'axios';

export const addCart = async (product) => {
  const url = `https://itx-frontend-test.onrender.com/api/cart`;
  const { data } = await axios.post(url, product);

  return data
}