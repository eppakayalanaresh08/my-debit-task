"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { playfair, lora } from "@/lib/fonts";

const features = [
  { icon: Shield, label: "Bank-Level Security" },
  { icon: Zap, label: "Instant Transactions" },
  { icon: Globe, label: "Global Acceptance" },
];

const stats = [
  { value: "2M+", label: "Active Users" },
  { value: "150+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Next-Generation Banking
            </div>

            {/* Heading */}
            <div className="space-y-4">
             
              {/* <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight font-[Playfair_Display] tracking-tight">
  Premium
  <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
    Debit Cards
  </span>
</h1> */}

<h1 className={`text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight ${playfair.className}`}>
  Premium
  <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
    Debit Cards
  </span>
</h1>


<p className={`text-lg text-blue-100/90 max-w-xl leading-relaxed tracking-wide font-light ${lora.className}`}>
                Experience the future of digital payments with our advanced debit cards.
                Secure, fast, and designed for the modern lifestyle.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-3 text-blue-100">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group px-8 py-4 font-semibold hover:scale-105">
                <span>Get Your Card</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 transform hover:scale-105">
                Learn More
              </Button>
              


            


            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/20">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-blue-200">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            // className="relative ml-20"
            className="ml-0 lg:ml-20 relative mt-10 " 
          >
            {/* Main Card */}
            <motion.div
              whileHover={{ rotate: 3 }}
              className="relative transform rotate-6 transition-transform duration-500 "
            >
              <Card className="w-80 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 shadow-2xl rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded" />
                  <div className="font-bold text-lg">FinTech</div>
                </div>
                <div className="space-y-4">
                  <div className="text-xl font-mono tracking-wider">**** **** **** 1234</div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <div>
                      <div className="text-xs opacity-75">VALID THRU</div>
                      <div>12/28</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-75">CARD HOLDER</div>
                      <div>JOHN DOE</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Secondary Card */}
            <div className="absolute -top-4 -left-4 transform -rotate-12 opacity-60">
              <Card className="w-80 h-48 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 shadow-xl rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded" />
                  <div className="font-bold text-lg">FinTech</div>
                </div>
                <div className="space-y-4">
                  <div className="text-xl font-mono tracking-wider">**** **** **** 5678</div>
                </div>
              </Card>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-float" />
            <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-blue-400/20 rounded-full animate-float delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;



