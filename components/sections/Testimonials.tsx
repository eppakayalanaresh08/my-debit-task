
"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "The premium debit card has transformed how we manage our business expenses. The real-time analytics and spending insights have helped us optimize our cash flow significantly.",
    rating: 5,
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Financial Director",
    company: "Global Ventures",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "Outstanding security features and seamless international transactions. The 24/7 support team is incredibly responsive and knowledgeable.",
    rating: 5,
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    company: "Creative Solutions",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "The cashback rewards and expense categorization features are game-changers. I've saved thousands while keeping perfect track of all business expenses.",
    rating: 5,
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "Innovation Labs",
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "The API integration capabilities and developer-friendly tools make this the perfect choice for tech companies. Exceptional service and reliability.",
    rating: 5,
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Retail Plus",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content:
      "Managing multiple locations has never been easier. The multi-card management system and detailed reporting give us complete visibility and control.",
    rating: 5,
    location: "Chicago, IL",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24" id="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Customer Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ">
            Trusted by
            <span className="block  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
              industry leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who transformed their financial operations.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <Card className="bg-white p-6 md:p-10 rounded-xl shadow-xl border text-center lg:text-left">
                    <CardContent className="flex flex-col lg:flex-row items-center gap-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl">
                        <Quote className="text-white w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-center lg:justify-start mb-2">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 font-medium mb-4">
                          {t.content}
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <Image
                            src={t.image}
                            alt={t.name}
                            width={64}
                            height={64}
                            className="rounded-full border-2 border-white shadow"
                          />
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">{t.name}</div>
                            <div className="text-blue-600 text-sm font-medium">{t.role}</div>
                            <div className="text-gray-500 text-sm">
                              {t.company} • {t.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;