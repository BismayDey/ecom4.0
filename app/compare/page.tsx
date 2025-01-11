"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/lib/products";
import Image from "next/image";
import { Check, X } from "lucide-react";

export default function ComparePage() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);

  useEffect(() => {
    setAvailableProducts(products);
  }, []);

  const addProduct = (product: Product) => {
    if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
      setAvailableProducts(
        availableProducts.filter((p) => p.id !== product.id)
      );
    }
  };

  const removeProduct = (product: Product) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    setAvailableProducts([...availableProducts, product]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Compare Products</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Select Products to Compare (Max 3)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {availableProducts.map((product) => (
              <Button
                key={product.id}
                onClick={() => addProduct(product)}
                disabled={selectedProducts.length >= 3}
                className="text-left"
              >
                {product.name}
              </Button>
            ))}
          </div>
        </div>
        {selectedProducts.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Feature</th>
                  {selectedProducts.map((product) => (
                    <th key={product.id} className="border p-2">
                      <div className="flex flex-col items-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="mb-2"
                        />
                        {product.name}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeProduct(product)}
                          className="mt-2"
                        >
                          Remove
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Price</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="border p-2">
                      ₹{product.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Rating</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="border p-2">
                      {product.rating.toFixed(1)} / 5
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Brand</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="border p-2">
                      {product.brand}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Category</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="border p-2">
                      {product.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">In Stock</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="border p-2">
                      {product.stock > 0 ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
                {/* Add more rows for other features */}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
