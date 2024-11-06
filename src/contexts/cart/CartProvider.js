import useLocalStorage from "../../hooks/useLocalStorage";
import { CartContext } from "./cart.context";


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', { count: 0, expirationTime: Date.now() });

  const getCartCount = () => {
    if (Date.now() > cart.expirationTime) {
      setCart({ count: 0, expirationTime: Date.now() });
      return 0;
    }
    return cart.count;
  };


  const addToCart = (count) => {
    const expirationTime = Date.now() + 60 * 60 * 1000; 
    setCart({ count, expirationTime });
  };

  return (
    <CartContext.Provider value={{ cartCount: getCartCount(), addToCart }}>
      {children}
    </CartContext.Provider>
  );
};