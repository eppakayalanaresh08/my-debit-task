"use client";

import React from "react";
import {
  DollarSign,
  Shield,
  Plane,
  Smartphone,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "Cashback Rewards",
    description: "Earn up to 2.5% cashback on all purchases",
    value: "2.5%",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Zero Fraud Liability",
    description: "Complete protection against unauthorized transactions",
    value: "$0",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Plane,
    title: "Travel Benefits",
    description: "No foreign transaction fees and travel insurance",
    value: "150+",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Works with Apple Pay, Google Pay, and Samsung Pay",
    value: "100%",
    color: "from-orange-500 to-red-600",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" /> Premium Benefits
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              More than just a
              <span className="block text-green-600">debit card</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Experience banking reimagined with rewards, protection, and
              convenience that adapts to your lifestyle.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <span
                          className={`text-sm font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                        >
                          {benefit.value}
                        </span>
                      </div>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <Button className="px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105">
                Start Earning Rewards
              </Button>
            </div>
          </motion.div>

          {/* Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold mb-1">$247.50</div>
                <div className="text-green-400 text-sm">Cashback This Month</div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Dining", value: "$87.50", percent: "60%", color: "from-green-400 to-emerald-500" },
                  { name: "Gas", value: "$65.25", percent: "40%", color: "from-blue-400 to-cyan-500" },
                  { name: "Shopping", value: "$94.75", percent: "80%", color: "from-purple-400 to-pink-500" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                        style={{ width: item.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="text-xs text-gray-400">
                  Next reward tier in $52.50
                </div>
              </div>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              +2.5%
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
