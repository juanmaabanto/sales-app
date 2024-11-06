import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';

export const useProducts = (filter) => {
  const {data = [], error, isLoading } = useQuery({
    queryKey: ['getProducts', filter],
    queryFn: () => fetchProducts(filter),
    staleTime: 60*60*1000,
  });

  return {
    data,
    error: error ? error.message : error,
    isLoading
  }
}