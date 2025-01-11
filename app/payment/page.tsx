"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, ShoppingCartIcon as Paypal, Banknote } from "lucide-react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Redirect to confirmation page
    router.push("/payment-confirmation");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Payment Details</CardTitle>
              <CardDescription>Complete your purchase securely</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="credit-card">
                    <CreditCard className="mr-2" />
                    Credit Card
                  </TabsTrigger>
                  <TabsTrigger value="paypal">
                    <Paypal className="mr-2" />
                    PayPal
                  </TabsTrigger>
                  <TabsTrigger value="bank-transfer">
                    <Banknote className="mr-2" />
                    Bank Transfer
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Name on Card</Label>
                      <Input
                        id="card-name"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input
                          id="expiry-date"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Processing..." : "Pay Now"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="paypal">
                  <div className="text-center py-8">
                    <p className="mb-4">
                      You will be redirected to PayPal to complete your payment.
                    </p>
                    <Button
                      onClick={() => router.push("https://www.paypal.com")}
                    >
                      Proceed to PayPal
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="bank-transfer">
                  <div className="space-y-4">
                    <p>Please use the following details for bank transfer:</p>
                    <div>
                      <p>
                        <strong>Bank Name:</strong> TechBazaar Bank
                      </p>
                      <p>
                        <strong>Account Number:</strong> 1234567890
                      </p>
                      <p>
                        <strong>IFSC Code:</strong> TBAZ0001234
                      </p>
                      <p>
                        <strong>Account Name:</strong> TechBazaar Pvt Ltd
                      </p>
                    </div>
                    <p>
                      Once you have made the transfer, please email the
                      transaction details to payments@techbazaar.com
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Your payment information is secure and encrypted.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
