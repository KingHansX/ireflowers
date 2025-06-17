import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ fullScreen = false }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 0 },
    show: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className={`${fullScreen ? 'fixed inset-0' : 'relative'} flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-2"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={item}
            className="w-3 h-3 rounded-full bg-[#98D8C1]"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Loading 