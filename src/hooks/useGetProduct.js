import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/products';

export const useGetProduct = (productId) => {
  const {data = [], error, isLoading } = useQuery({
    queryKey: ['getProductById', productId],
    queryFn: () => getProductById(productId),
    staleTime: 5*1000,
  });

  return {
    data,
    error: error ? error.message : error,
    isLoading
  }
}