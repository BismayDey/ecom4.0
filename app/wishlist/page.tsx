"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/lib/useCart";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ₹{item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < Math.floor(item.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                        size={16}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({item.reviews.length})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button onClick={() => addToCart(item)}>
                    <ShoppingCart size={20} className="mr-2" /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 EcomStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
