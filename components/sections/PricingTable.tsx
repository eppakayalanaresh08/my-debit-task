
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { playfair, lora } from "@/lib/fonts";


const cardData = [
  {
    id: "essential",
    name: "Essential",
    price: "Free",
    originalPrice: null,
    features: [
      "No monthly fees",
      "ATM withdrawals",
      "Online & mobile banking",
      "Contactless payments",
      "24/7 customer support"
    ],
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    badge: null,
    icon: Star
  },
  {
    id: "premium",
    name: "Premium",
    price: "$9.99",
    originalPrice: "$19.99",
    features: [
      "Everything in Essential",
      "No foreign transaction fees",
      "Premium customer support",
      "Travel insurance",
      "Cashback rewards (1.5%)",
      "Priority card replacement"
    ],
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    badge: "Most Popular",
    icon: Crown
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "$24.99",
    originalPrice: "$39.99",
    features: [
      "Everything in Premium",
      "Higher cashback (2.5%)",
      "Concierge services",
      "Airport lounge access",
      "Comprehensive travel insurance",
      "Personal financial advisor"
    ],
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
    badge: null,
    icon: Gem
  }
];

export default function PricingTable() {
  const [selected, setSelected] = useState("premium");

  return (
    <section className="py-20 bg-gray-50" id="cards">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
        >
          <Crown className="w-4 h-4 mr-2" /> Choose Your Card
        </motion.div>
      
        <h2 className={`text-4xl lg:text-5xl font-medium text-gray-900 mb-4 leading-snug tracking-normal ${playfair.className}`}>
  Find the perfect card <span className="text-blue-600 italic">for your lifestyle</span>
</h2>

<p className={`text-lg lg:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide font-light ${lora.className}`}>
  Whether you're just starting out or looking for premium benefits, we have a card that fits your needs and budget.
</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => {
            const Icon = card.icon;
            const isSelected = selected === card.id;

            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(card.id)}
              >
                <Card
                  className={`relative cursor-pointer transition-all duration-300 ${
                    card.badge
                      ? "ring-2 ring-blue-500 shadow-xl"
                      : isSelected
                        ? "ring-2 ring-blue-300 shadow-lg"
                        : "shadow-md hover:shadow-xl"
                  }`}
                >
                  {card.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        {card.badge}
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className={`w-full h-40 ${card.color} rounded-xl p-4 text-white relative overflow-hidden mb-6`}>
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-10 h-6 bg-yellow-400 rounded"></div>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-lg font-mono tracking-wider">**** **** **** ****</div>
                        <div className="mt-2 text-sm opacity-90">{card.name} Card</div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-gray-900">{card.price}</span>
                        <span className="text-gray-500 text-sm">/month</span>
                        {card.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">{card.originalPrice}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.name}</h3>
                    </div>

                    <ul className="space-y-3 mb-6 text-left">
                      {card.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={isSelected ? "default" : "outline"}
                      className="w-full"
                    >
                      {isSelected ? "Selected" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-gray-500">
          All plans include industry-leading security and 24/7 customer support.
          <a href="#" className="text-blue-600 hover:underline ml-1">Learn more about our features</a>
        </p>
      </div>
    </section>
  );
}
