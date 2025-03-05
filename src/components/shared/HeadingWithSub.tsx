"use client";

import React from 'react'
import { motion } from 'framer-motion';

interface HeadingProps {
    heading: string,
    description: string
}

function HeadingWithSub({ heading, description }: HeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center"
        >
            <h1 className="text-4xl font-bold md:text-6xl lg:text-[6rem] text-black dark:text-white">
                {heading}
            </h1>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                {description}
            </p>
        </motion.div>
    )
}

export default HeadingWithSub