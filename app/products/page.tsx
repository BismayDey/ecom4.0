"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/lib/products";
import { useCart } from "@/lib/useCart";
import Image from "next/image";
import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Grid,
  List,
  Percent,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const { addToCart, addToWishlist } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "all" ||
          categoryFilter === "" ||
          product.category === categoryFilter)
    )
    .sort((a, b) => {
      if (priceSort === "asc") return a.price - b.price;
      if (priceSort === "desc") return b.price - a.price;
      return 0;
    });

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-1/3"
          />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={priceSort} onValueChange={setPriceSort}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={20} />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
            >
              <List size={20} />
            </Button>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                : "space-y-6"
            }
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }
                >
                  <div
                    className={
                      viewMode === "list" ? "md:w-1/3 relative" : "relative"
                    }
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        <Percent size={14} className="inline mr-1" />
                        {product.discount}% OFF
                      </span>
                    )}
                    {product.newArrival && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        <Zap size={14} className="inline mr-1" />
                        NEW
                      </span>
                    )}
                  </div>
                  <div
                    className={
                      viewMode === "list"
                        ? "md:w-2/3 flex flex-col justify-between"
                        : ""
                    }
                  >
                    <CardContent>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600 mb-2">
                        ₹{product.price.toLocaleString()}
                        {product.discount && (
                          <span className="ml-2 text-sm line-through text-gray-400">
                            ₹
                            {Math.round(
                              product.price / (1 - product.discount / 100)
                            ).toLocaleString()}
                          </span>
                        )}
                      </p>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={`star-${product.id}-${i}`}
                            className={
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                            size={16}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews.length})
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {product.description.slice(0, 100)}...
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button onClick={() => addToCart(product)}>
                        <ShoppingCart size={20} className="mr-2" /> Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => addToWishlist(product)}
                      >
                        <Heart size={20} />
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>
                TechBazaar is your one-stop shop for all things tech. We offer a
                wide range of high-quality electronics and gadgets.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/cart">Cart</a>
                </li>
                <li>
                  <a href="/wishlist">Wishlist</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: support@techbazaar.com</p>
              <p>Phone: +91 1234567890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 TechBazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
