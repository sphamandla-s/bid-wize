"use client";

import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

interface ProductCardProps {
  time: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard({ time, image, title, description, price }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 hover:shadow-xl transition-shadow">
        
        {/* Timer Section */}
        <div className="text-center mb-4">
          <h4 className="text-sm text-neutral-600 dark:text-neutral-400">Time Remaining</h4>
          <h1 className="text-2xl font-bold text-black dark:text-white">{time}</h1>
        </div>

        {/* Product Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-6 gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 rounded-full px-4 py-2 text-white bg-black dark:bg-zinc-800 hover:bg-zinc-900 transition-colors flex items-center justify-between"
          >
            <span className="text-sm font-semibold">Place A Bid</span>
            <span className="bg-zinc-700 rounded-full text-xs px-3 py-1 text-white">{price}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full p-2 text-white bg-black dark:bg-zinc-800 hover:bg-zinc-900 transition-colors"
          >
            <Share2 size={18} />
          </motion.button>
        </div>

      </BackgroundGradient>
    </motion.div>
  );
}
