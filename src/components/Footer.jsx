import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#06b6d4',
      transition: { duration: 0.2 },
    },
  };

  // Icon hover variants for attractive animation
  const iconVariants = {
    hover: {
      scale: 1.1,
      filter: 'drop-shadow(0 0 10px #06b6d4)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    tap: { scale: 0.95 },
  };

  // Variants for staggered letter animation in VORTEX
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <footer className="py-12 bg-black text-white relative overflow-hidden">
      {/* Subtle background glow - adjusted for a simpler, static version */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Animated VORTEX Title */}
          <motion.div variants={itemVariants} className="text-left">
            <motion.h3
              className="text-3xl font-black text-white mb-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="neon-text"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {Array.from('VORTEX').map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    custom={i}
                    className="inline-block mx-[1px]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              <span className="text-2xl"> 2K25</span>
            </motion.h3>
            <motion.p
              className="text-white/70 text-sm leading-relaxed max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Celebrating innovation, creativity, and academic excellence.
            </motion.p>
          </motion.div>

          {/* Middle: Quick Links */}
          <motion.div variants={itemVariants} className="text-left">
            <motion.h4
              className="text-xl font-bold text-white mb-6"
              whileHover={{ y: -2 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#tracks" className="text-white/70 hover:text-cyan-400 transition block text-sm font-medium">Tracks & Challenges</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#register" className="text-white/70 hover:text-cyan-400 transition block text-sm font-medium">Registration</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#schedule" className="text-white/70 hover:text-cyan-400 transition block text-sm font-medium">Schedule</a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Right: Contact Us */}
          <motion.div variants={itemVariants} className="text-left">
            <motion.h4
              className="text-xl font-bold text-white mb-6 text-left"
              whileHover={{ y: -2 }}
            >
              Contact Us
            </motion.h4>
            <div className="space-y-3 text-sm text-white/70">
              <motion.p
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span 
                  className="mt-1 mr-3 flex-shrink-0 text-cyan-400" 
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Location Pin SVG Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </motion.span>
                <span className="max-w-xs text-left leading-relaxed">Erode Sengunthar Engineering College,Thudupathi,Perundurai - Erode,638057</span>
              </motion.p>
              <motion.p className="flex items-center" variants={linkVariants} whileHover="hover">
                <motion.span 
                  className="mr-3 text-cyan-400" 
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Phone Icon SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </motion.span>
                Ajaykannan R (+91 9597237743)
              </motion.p>
              <motion.p className="flex items-center" variants={linkVariants} whileHover="hover">
                <motion.span 
                  className="mr-3 text-cyan-400" 
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Phone Icon SVG (duplicate for second phone) */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </motion.span>
                Chandiran S (+91 9876543210)
              </motion.p>
              <motion.p className="flex items-center" variants={linkVariants} whileHover="hover">
                <motion.span 
                  className="mr-3 text-cyan-400" 
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Email Envelope SVG Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </motion.span>
                <a href="mailto:vortex2k25@esec.ac.in" className="hover:text-cyan-400 transition">vortex2k25@esec.ac.in</a>
              </motion.p>
              <motion.p className="flex items-center" variants={linkVariants} whileHover="hover">
                <motion.span 
                  className="mr-3 text-cyan-400" 
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Instagram Icon SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5C18.78 2 20 3.22 20 5v14c0 1.78-1.22 3-2.75 3h-8.5C5.22 22 4 20.78 4 19V5c0-1.78 1.22-3 2.75-3zM12 17c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="currentColor"/>
                  </svg>
                </motion.span>
                <a href="https://www.instagram.com/vortex_2k25_cse" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">Vortex2k25.CSE</a>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}