import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, link, icon }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      style={{ willChange: 'transform, opacity' }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
      />
      
      <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
        <div 
          className="p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {typeof icon === 'string' && icon.startsWith('http') ? (
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-red-500/20">
                  <img src={icon} alt={title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/20">
                  {icon}
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
                <p className="text-zinc-500 text-sm mt-0.5">Click to learn more</p>
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400"
              style={{ willChange: 'transform' }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              style={{ willChange: 'height, opacity' }}
            >
              <div className="px-6 pb-6 pt-2 border-t border-zinc-800/50">
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {description}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}