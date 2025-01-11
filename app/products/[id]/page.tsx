"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { useCart } from "@/lib/useCart";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  Truck,
  RefreshCw,
  Shield,
  ThumbsUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart, addToWishlist } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate fetching related products
    // In a real app, this would be an API call
  }, []);

  if (!product) {
    notFound();
  }

  // Simulating multiple product images
  const productImages = [product.image, ...Array(3).fill(product.image)];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white p-4 rounded-lg shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square"
              >
                <Image
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight />
            </Button>
            <div className="flex justify-center mt-4 space-x-2">
              {productImages.map((_, index) => (
                <Button
                  key={`image-dot-${index}`}
                  variant="outline"
                  size="sm"
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`star-${i}`}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                    size={20}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-2xl font-semibold mb-4 text-primary">
              ₹{product.price.toLocaleString()}
            </p>
            {product.discount && (
              <p className="text-green-600 mb-4">
                {product.discount}% OFF - Save ₹
                {Math.round(
                  product.price * (product.discount / 100)
                ).toLocaleString()}
              </p>
            )}
            <p className="text-gray-600 mb-6">{product.description}</p>
            {product.colors && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Colors:</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <Button
                      key={`color-${color}`}
                      variant="outline"
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color ? "ring-2 ring-primary" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && (
                        <Check className="text-white" size={16} />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity:</h3>
              <div className="flex items-center space-x-2">
                <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="text-xl font-semibold">{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={`feature-${index}`} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <Button onClick={handleAddToCart} className="flex-1">
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" onClick={() => addToWishlist(product)}>
                <Heart size={20} />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center text-center">
                <Truck size={24} className="mb-2 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw size={24} className="mb-2 text-primary" />
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield size={24} className="mb-2 text-primary" />
                <span className="text-sm">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Product Description
                </h2>
                <p className="text-gray-700">{product.description}</p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Highlights</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={`highlight-${index}`} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Product Specifications
                </h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Brand</td>
                      <td className="py-2">{product.brand}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Category</td>
                      <td className="py-2">{product.category}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Stock</td>
                      <td className="py-2">{product.stock} units</td>
                    </tr>
                    {product.colors && (
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Available Colors</td>
                        <td className="py-2">{product.colors.join(", ")}</td>
                      </tr>
                    )}
                    {product.features.map((feature, index) => (
                      <tr key={`spec-${index}`} className="border-b">
                        <td className="py-2 font-semibold">
                          Feature {index + 1}
                        </td>
                        <td className="py-2">{feature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Customer Reviews
                </h2>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`overall-star-${i}`}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                        size={24}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-600 ml-2">out of 5</span>
                </div>
                <div className="mb-6">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const percentage =
                      (product.reviews.filter(
                        (review) => Math.floor(review.rating) === star
                      ).length /
                        product.reviews.length) *
                      100;
                    return (
                      <div
                        key={`star-bar-${star}`}
                        className="flex items-center mb-2"
                      >
                        <span className="w-12 text-sm text-gray-600">
                          {star} star
                        </span>
                        <Progress value={percentage} className="h-2 mx-4" />
                        <span className="text-sm text-gray-600">
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 py-4 last:border-b-0"
                  >
                    <div className="flex items-center mb-2">
                      <span className="font-semibold mr-2">
                        {review.userName}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={`review-star-${review.id}-${i}`}
                            className={
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                            size={16}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{review.date}</span>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <ThumbsUp size={14} className="mr-1" /> Helpful
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="qa" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Questions & Answers
                </h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="font-semibold mb-2">
                      Q: Is this product compatible with [specific device]?
                    </p>
                    <p className="text-gray-700">
                      A: Yes, this product is compatible with [specific device].
                      It has been tested and verified to work seamlessly.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="font-semibold mb-2">
                      Q: What is the warranty period for this product?
                    </p>
                    <p className="text-gray-700">
                      A: This product comes with a 2-year manufacturer warranty.
                      Please refer to the warranty card included in the package
                      for more details.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">
                      Q: Can I return the product if I am not satisfied?
                    </p>
                    <p className="text-gray-700">
                      A: Yes, we offer a 30-day return policy. If you are not
                      completely satisfied with your purchase, you can return it
                      for a full refund within 30 days of delivery.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
