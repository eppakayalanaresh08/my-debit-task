"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  CreditCard,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { playfair, lora } from "@/lib/fonts";


const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layer encryption and fraud protection keep your money safe.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Seamless integration with mobile wallets and contactless payments.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CreditCard,
      title: "Instant Issuance",
      description: "Get your virtual card immediately and physical card within 2 days.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Real-time Transactions",
      description: "Lightning-fast processing with instant notifications.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Acceptance",
      description: "Use your card anywhere in the world with competitive exchange rates.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Lock,
      title: "Biometric Auth",
      description: "Secure authentication using fingerprint and face recognition.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: TrendingUp,
      title: "Spending Insights",
      description: "AI-powered analytics to help you manage and optimize spending.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support via chat, call, or email.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            // className="text-4xl font-bold text-gray-900 mb-6"
            className={`text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-snug tracking-normal ${playfair.className}`}

          >
            Everything you need in a
            <span className="block text-blue-600">modern debit card</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide ${lora.className}`}
            >
            Our debit cards come packed with cutting-edge features designed to make
            your financial life easier, safer, and more rewarding.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group feature-card p-6 rounded-2xl border hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
                  <CardContent className="p-0">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button className="px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
