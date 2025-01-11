import { useState, useEffect } from "react";
import { Product } from "./products";

export function useCart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems, product];
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const addToWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      const newItems = [...prevItems, product];
      localStorage.setItem("wishlist", JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(newItems));
      return newItems;
    });
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  };
}
