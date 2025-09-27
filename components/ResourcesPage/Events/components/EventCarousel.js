"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slideData = [
  {
    id: 1,
    image: "/resources/events/event-1.webp",
    alt: "Residential Interiors",
  },
  {
    id: 2,
    image: "/resources/events/event-2.webp",
    alt: "Retail Interiors",
  },
  {
    id: 3,
    image: "/resources/events/event-3.webp",
    alt: "Office Interiors",
  },
];

const EventCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }, 2000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const currentData = slideData[currentSlide];

  return (
    <>
    <div
      className="lg:px-0 lg:pb-20 pb-5 max-w-screen-lg w-full mx-auto pt-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-3 md:px-0 ">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <div className="lg:w-[55%] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Image
                  src={currentData.image}
                  alt={currentData.alt}
                  width={475}
                  height={400}
                  className="w-full max-w-[475px] lg:w-auto"
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
              <button
                onClick={prevSlide}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {slideData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-secondary" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex flex-col flex-1 gap-5 items-end justify-between lg:w-[45%] w-full">
            {/* Top Content */}
            <div className="space-y-4 lg:space-y-10 text-left">
              <h2 className="text-xl md:text-3xl font-light tracking-wider">
                Naavik Manthan 2025
              </h2>
              <p className="text-sm md:text-lg font-light">
                Naavik Manthan 2025, held on 26th September at the Courtyard by
                Marriott Mumbai International Airport in partnership with JSW
                Shipping, brought seafarers and shore teams together for
                meaningful conversations on the future of shipping. Discussions
                spanned coastal shipping, operational excellence, AI in
                shipping, compliance, and crew welfare, highlighting the
                importance of dialogue and collaboration in building a safer,
                stronger, and more resilient maritime sector.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Progress Indicators */}
        {/* <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {slideData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all rounded-full ${
                currentSlide === idx
                  ? "bg-[#ED1C25] w-8"
                  : "bg-gray-300 w-4 hover:bg-gray-400"
              }`}
            />
          ))}
        </div> */}
        
      </div>
      <hr className="w-full border-gray-400 mt-14" />
      
    </div>
    </>
  );
};

export default EventCarousel;
