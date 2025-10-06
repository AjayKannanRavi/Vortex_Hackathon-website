import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate = "2025-10-29T09:00:00" }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const intervals = [
    { key: 'days', label: 'DAYS' },
    { key: 'hours', label: 'HOURS' },
    { key: 'minutes', label: 'MINUTES' },
    { key: 'seconds', label: 'SECONDS' },
  ];

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const startDate = new Date('2025-10-29T09:00:00');
  const formattedDate = '29.10.2025';
  const dayOfWeek = startDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const glowVariants = {
    initial: { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
    animate: {
      boxShadow: [
        '0 0 5px rgba(6, 182, 212, 0.5)',
        '0 0 20px rgba(6, 182, 212, 1)',
        '0 0 5px rgba(6, 182, 212, 0.5)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hourHandVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 12 * 60 * 60,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const minuteHandVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 60 * 60,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section className="py-16 bg-black text-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold text-white mb-12"
        >
          The Event Begins
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-8"
        >
          <motion.div
            className="flex space-x-4"
          >
            {intervals.map(({ key, label }, index) => (
              <motion.div
                key={key}
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="glass-card p-4 rounded-lg bg-black/20 border border-neon-cyan/50 min-w-[70px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 relative"
              >
                <motion.span
                  className="text-4xl lg:text-5xl font-mono font-bold text-neon-cyan tracking-wider mb-2 relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                  key={`${key}-${timeLeft[key]}`}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatNumber(timeLeft[key] || 0)}
                </motion.span>
                <span className="text-xs uppercase tracking-widest text-white/70 font-medium relative z-10">{label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="4" />
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="rgba(6, 182, 212, 1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={hourHandVariants}
                  animate="animate"
                />
                <motion.line
                  x1="50"
                  y1="50"
                  x2="80"
                  y2="50"
                  stroke="rgba(6, 182, 212, 1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={minuteHandVariants}
                  animate="animate"
                />
              </svg>
            </div>
            <motion.p
              className="text-2xl font-bold text-neon-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {formattedDate}
            </motion.p>
            <motion.p
              className="text-lg uppercase text-white/80 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {dayOfWeek}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}