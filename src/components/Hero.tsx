"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <HeroHighlight>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
          <div className="flex flex-col text-center md:text-left space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-semibold  text-indigo-600 dark:text-indigo-400"
            >
              Welcome To <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent 
                  bg-size-200 group-hover:bg-pos-100 transition-all duration-500">BidWize</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto md:mx-0"
            >
              Revolutionizing Online Bidding.{" "}
              <Highlight className="text-black dark:text-white">
                Bid Smart, Sell & Collect.
              </Highlight>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            >
               Discover a seamless bidding experience powered by real-time AI insights.
                Buy and sell with confidence, knowing you&apos;re 
                getting the best market-driven deals.

            </motion.p>

            <div className=" mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mx-auto md:mx-0"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 font-semibold"
                >
                  <Link href='/signup'>
                    <span className="uppercase">Start Exploring</span>
                  </Link>
                </HoverBorderGradient>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 h-96"
          >
            <div className="relative w-full h-64 flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-lg">
              <Image
                src="/Product presentation-pana.svg" // Ensure this path is correct
                alt="Hero Image"
                width={500}
                height={300} 
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}

export default Hero;

