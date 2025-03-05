"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gavel, Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

function IndexNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm border-b border-gray-200 dark:border-gray-800 py-4 mb-28 md:mb-0">
      <div className=" mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <Link
              href="/login"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              My Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavItem href="/" onClick={() => setIsOpen(false)}>
                Home
              </NavItem>
              <NavItem href="/about" onClick={() => setIsOpen(false)}>
                About
              </NavItem>
              <NavItem href="/services" onClick={() => setIsOpen(false)}>
                Services
              </NavItem>
              <NavItem href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </NavItem>
              <Link
                href="/login"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                My Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
}

export default IndexNavbar;
