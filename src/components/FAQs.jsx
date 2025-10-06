import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      q: 'What is Vortex?', 
      a: 'Vortex is a thrilling 24-hour national-level hackathon hosted by the Department of Computer Science and Engineering. This continuous coding marathon unites innovators, developers, and visionaries from across India to tackle real-world challenges in AI/ML, Blockchain, Cybersecurity, FullStack Development, and IoT. Experience non-stop innovation, from idea pitching to final demos, all in one intense day!' 
    },
    { 
      q: 'Who can participate?', 
      a: 'Open to all undergraduate and postgraduate students from engineering colleges nationwide. Form teams of up to 4 members—no prior hackathon experience required. Our department ensures an inclusive environment for beginners and pros alike.' 
    },
    { 
      q: 'What makes the Department of CSE special?', 
      a: 'Our department stands out with state-of-the-art labs equipped for AI research, blockchain prototyping, and IoT simulations. Led by industry-expert faculty with publications in top journals, we foster hands-on learning through collaborations with tech giants like Google and Microsoft. Join Vortex to access exclusive workshops and mentorship from our renowned alumni in Silicon Valley startups.' 
    },
    { 
      q: 'What\'s the schedule like?', 
      a: 'The 24-hour event kicks off with an opening ceremony at 9:30 AM, followed by idea selection, three intense rounds of building and evaluation, breaks for meals, and wraps up with awards by 1:30 PM the next day. Expect continuous hacking with mentor check-ins to keep the energy high!' 
    },
    // { 
    //   q: 'Is there a registration fee?', 
    //   a: 'Early bird registration is free until October 15th, 2025. After that, it\'s ₹500 per team to cover swag, meals, and certificates. All proceeds support our department\'s student innovation fund.' 
    // },
    { 
      q: 'What prizes are up for grabs?', 
      a: 'Top teams win cash prizes totaling over ₹20,000, along with gadgets, internships, and certificates. Special awards for best in each track, judged by our CSE faculty and industry partners.' 
    },
    { 
      q: 'How do I prepare?', 
      a: 'Brush up on your chosen track—our department offers free pre-event webinars on GitHub collaboration and rapid prototyping. No fancy tools needed; laptops and ideas are enough!' 
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-neon-cyan to-neon-purple rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1], 
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black neon-text mb-16 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden rounded-2xl border border-white/20 hover:border-neon-cyan/50 transition-colors duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold neon-text">{faq.q}</h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-lg text-white/80 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}