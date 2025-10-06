export default function About() {
  return (
    <section id="about" className="py-20 container mx-auto relative">
      <h2 className="text-5xl font-black neon-text mb-12 text-center relative z-10 group">
        About Vortex 2K25
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-full transition-all duration-500"></span>
      </h2>
      <div className="glass-card p-10 mx-auto max-w-7xl relative overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/30 transition-all duration-500 group">
        {/* Inner Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <p className="text-xl leading-relaxed mb-8 typewriter-about">
            Vortex is a 24-hour (day-night) national-level hackathon conducted by the Department of Computer Science and Engineering.
          </p>
          <ul className="space-y-4 text-lg text-white/90 list-disc pl-6 max-w-4xl mx-auto typewriter-about">
            <li className="animate-fade-in" style={{ animationDelay: '0.2s' }}>Teams will initially present their idea or project theme and explain their concept to the jury.</li>
            <li className="animate-fade-in" style={{ animationDelay: '0.4s' }}>Based on the presentations, shortlisted teams will be chosen to move forward.</li>
            <li className="animate-fade-in" style={{ animationDelay: '0.6s' }}>The shortlisted teams will go through three subsequent rounds.</li>
            <li className="animate-fade-in" style={{ animationDelay: '0.8s' }}>During each round, participants must follow the jury’s instructions and make any required modifications or improvements to their project.</li>
            <li className="animate-fade-in" style={{ animationDelay: '1s' }}>Marks will be awarded in every round based on performance, creativity, and implementation.</li>
            <li className="animate-fade-in" style={{ animationDelay: '1.2s' }}>The top three teams with the highest total marks will be awarded prizes and certificates.</li>
            <li className="animate-fade-in" style={{ animationDelay: '1.4s' }}>All other participants will also receive certificates of participation, ensuring that every team member is appreciated and recognized.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}