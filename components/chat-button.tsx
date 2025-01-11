"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 shadow-lg"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle size={24} />
      </Button>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
              <h3 className="font-semibold">TechBazaar Support</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-4 h-72 overflow-y-auto">
              {/* Chat messages would go here */}
              <p className="text-gray-500">How can we help you today?</p>
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
