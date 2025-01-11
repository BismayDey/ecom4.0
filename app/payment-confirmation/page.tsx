"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle, Package, Truck } from "lucide-react";
import { useCart } from "@/lib/useCart";

export default function PaymentConfirmationPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-3xl">Payment Successful!</CardTitle>
              <CardDescription>Thank you for your purchase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="inline-block"
              >
                <CheckCircle size={100} className="text-green-500 mx-auto" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <CheckCircle
                    size={40}
                    className="mx-auto mb-2 text-green-500"
                  />
                  <h3 className="font-semibold">Order Confirmed</h3>
                  <p className="text-sm text-gray-600">
                    Your order has been confirmed and will be shipped soon.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Package size={40} className="mx-auto mb-2 text-blue-500" />
                  <h3 className="font-semibold">Preparing Your Order</h3>
                  <p className="text-sm text-gray-600">
                    We are carefully packing your items for shipment.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Truck size={40} className="mx-auto mb-2 text-purple-500" />
                  <h3 className="font-semibold">Shipping Soon</h3>
                  <p className="text-sm text-gray-600">
                    Your order will be shipped within 1-3 business days.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => router.push("/")}>
                Continue Shopping
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
