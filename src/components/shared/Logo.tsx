import Link from "next/link";
import { Gavel } from "lucide-react";
import { motion } from "framer-motion";
// import { SparklesCore } from "./ui/sparkles";

function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-1 group relative"
    >
      {/* Animated Gavel Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <Gavel className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-300" />
      </motion.div>

      {/* Text Logo with Gradient Animation */}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent 
                  bg-size-200 group-hover:bg-pos-100 transition-all duration-500"
      >
        BidWize
      </motion.span>
    </Link>
  );
}

export default Logo;