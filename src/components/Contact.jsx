export default function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto relative">
      <h2 className="text-5xl font-black neon-text mb-12 text-center">Contact & Map</h2>
      <div className="glass-card p-8 mx-auto max-w-6xl relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/30 transition-all duration-500 group">
        {/* Inner Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold neon-text mb-4">Get in Touch</h3>
            <p className="text-white/80 mb-4">Ready to dive into the vortex? Reach out for queries or collaborations.</p>
            <p className="text-lg mb-2 flex items-center">
              <span className="mr-3 text-neon-cyan">✉️</span>
              <a href="mailto:aimlevent@kpriet.ac.in" className="hover:text-neon-cyan transition">aimlevent@kpriet.ac.in</a>
            </p>
            <p className="text-lg flex items-center">
              <span className="mr-3 text-neon-cyan">📞</span>
              +91 63740 38984 / +91 90258 31459
            </p>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15078.64325444661!2d77.550497!3d11.313016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9132f4f89e445%3A0x81f682bd38f8a702!2sErode%20Sengunthar%20Engineering%20College!5e1!3m2!1sen!2sin!4v1759753449447!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}