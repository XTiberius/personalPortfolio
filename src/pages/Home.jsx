import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SocialButton from '../components/SocialButton';

// Custom X (Twitter) icon
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom Substack icon
const SubstackIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.54-5.672L20.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const projects = [
  {
    title: "Nexus VC",
    description: "A venture capital firm focused on early-stage investments in emerging technology sectors. Nexus VC partners with visionary founders building transformative solutions across AI, blockchain, and deep tech.",
    link: "https://a16z.com",
    icon: "N"
  },
  {
    title: "Concord Wallet",
    description: "A next-generation digital wallet designed for seamless cryptocurrency management. Concord Wallet combines institutional-grade security with an intuitive user experience for both retail and professional users.",
    link: "https://www.concordx.ai",
    icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69508b18de85ab348da9315c/e6dfb04db_concordlogo.png"
  },
  {
    title: "BlackBird Protocol",
    description: "A decentralized protocol enabling secure, private transactions across multiple blockchain networks. BlackBird Protocol leverages cutting-edge cryptography to ensure data integrity and user privacy.",
    link: "https://ethereum.org",
    icon: "B"
  }
];

const socials = [
  {
    href: "https://www.linkedin.com/in/david2003august22",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://x.com/domarementem",
    icon: XIcon,
    label: "X (Twitter)"
  },
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://substack.com/@davidmrashid",
    icon: SubstackIcon,
    label: "Substack"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background effects - Optimized with GPU acceleration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
        <div 
          className="absolute top-1/2 left-0 w-64 h-64 bg-zinc-800/30 rounded-full blur-3xl"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      </div>

      {/* Star field effect - Optimized with memoization and reduced count */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        {useMemo(() => {
          const stars = [];
          for (let i = 0; i < 30; i++) {
            stars.push({
              id: i,
              left: Math.random() * 100,
              top: Math.random() * 100,
              opacity: Math.random() * 0.7 + 0.3
            });
          }
          return stars;
        }, []).map((star) => (
          <div
            key={star.id}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
              willChange: 'opacity',
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Glow behind photo - Optimized blur */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-full blur-2xl opacity-30 scale-110"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            />
            
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-red-500/30 shadow-2xl shadow-red-500/20">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69508b18de85ab348da9315c/b92661444_IMG_3317.png"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                David Monroe Rashid
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 font-medium tracking-wide text-sm uppercase">Builder • Founder • Investor • Advisor</span>
            </div>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              Passionate about building scalable and transformative technology primarily at the intersection of web3 and finance. I am an individualist, stoic, pragmatician, liberatarian, and freedom maxxer. I am interested in building projects in web3 that are philisophically aligned with sovereign, efficient, democratized, and secure values.  I am interested in history, all things blockchain/web3, health + fitness especially as it relates to biohacking/health tech. and privacy technology. I am currently advisor to a specialized investment platform, Nexus VC, as well as the founder of Concord Systems, a full-service smart custody platform for Crypto seeking IRA’s, and cofounder of BlackBird Protocol, a novel ZK ethereum rollup that addresses issues previously ignored by other ZK chains that improves scalability, efficiency and security. If you are working in crypto/privacy I am always open to collaboration. Michigan Wolverine… Go Blue!
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ willChange: 'opacity' }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2"
              style={{ willChange: 'transform' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ventures & Projects</h2>
            <p className="text-zinc-500 max-w-lg mx-auto">A collection of companies and protocols I've helped build and launch.</p>
          </motion.div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="px-6 py-24 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
              style={{ willChange: 'transform, opacity' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's Connect</h2>
              <p className="text-zinc-500">Find me across the internet</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-4"
              style={{ willChange: 'transform, opacity' }}
            >
              {socials.map((social) => (
                <SocialButton key={social.label} {...social} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-zinc-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} David Rashid. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}