"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './shared/productCard';
import { products } from '@/data';
import HeadingWithSub from './shared/HeadingWithSub';


function LiveAuction() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title and Description */}
      <HeadingWithSub heading='Live Auction'
        description='Explore the world&apos;s best & largest bidding marketplace with our
          beautiful bidding products. We want to be part of your smile, success,
          and future growth.' />

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            time={product.endTime}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default LiveAuction;