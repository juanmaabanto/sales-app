import { useMutation } from '@tanstack/react-query';
import { addCart } from '../api/cart';
import { useCart } from './useCart';

export const useAddCart = () => {
  const { addToCart, cartCount } = useCart();

  const {data = {}, error, isPending, mutate } = useMutation({
    mutationFn: (product) => addCart(product),
    onSuccess: (response) => {
      // Siempre retorna 1 porque no reenvia cookies, se necesita habilitar cors en el backend
      console.log(response);
      const newCount = cartCount + 1;//response.count;
      addToCart(newCount);
    }
  });

  return {
    mutate,
    data,
    error: error ? error.message : error,
    isLoading: isPending
  }
}