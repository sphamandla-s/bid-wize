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
              Discover a seamless bidding experience powered by real-time AI
              insights. Buy and sell with confidence, knowing you're getting the
              best market-driven deals.
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
                width={500} // Adjust size as needed
                height={300} // Adjust size as needed
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

// function Hero() {
//   return (
//     <div className="relative overflow-hidden">
//       <SparklesCore
//         background="transparent"
//         minSize={0.4}
//         maxSize={1}
//         particleDensity={25}
//         className="absolute inset-0 w-full h-full"
//         particleColor="#4F46E5"
//       />

//       <HeroHighlight>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-12 md:py-24 lg:px-8 max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col text-center md:text-left space-y-6 relative z-10"
//           >
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
//             >
//               Welcome To BidWize
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
//             >
//               Revolutionizing Online
//               <Highlight className="text-indigo-600 dark:text-indigo-400"> Bidding</Highlight>
//               <br />
//               <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 Bid Smart, Sell & Collect
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
//             >
//               Discover a seamless bidding experience powered by real-time AI insights. Buy and sell with confidence,
//               knowing you're getting the best market-driven deals.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="mx-auto md:mx-0"
//             >
//               <HoverBorderGradient
//                 containerClassName="rounded-full"
//                 as="button"
//                 className="dark:bg-gray-900 bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
//               >
//                 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   Start Exploring
//                 </span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-indigo-600"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </HoverBorderGradient>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex justify-center items-center rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 h-96"
//           >
//             <div className="absolute inset-0 rounded-2xl border border-indigo-100/30 dark:border-gray-700" />
//             <div className="relative w-full h-full flex items-center justify-center">
//               {/* Replace with your actual hero image or illustration */}
//               <div className="animate-float">
//                 <svg
//                   className="w-64 h-64 text-indigo-600 dark:text-indigo-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </HeroHighlight>
//     </div>
//   );
// }
