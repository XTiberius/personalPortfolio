import React from 'react';
import { motion } from 'framer-motion';

export default function SocialButton({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-3 px-5 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300"
    >
      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
      <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">{label}</span>
    </motion.a>
  );
}