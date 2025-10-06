export default function Tracks() {
  const tracks = [
    { name: 'AI/ML', description: 'Build intelligent systems.', icon: '🤖' },
    { name: 'Blockchain', description: 'Decentralized solutions.', icon: '🔗' },
    { name: 'Cybersecurity', description: 'Protecting digital assets.', icon: '🛡️' },
    // { name: 'FullStack Development', description: 'End-to-end web solutions.', icon: '🌐' },
    { name: 'IoT', description: 'Connecting the world.', icon: '📡' },
    { name: 'Open Innovation', description: 'Your own unique idea.', icon: '💡' }  ,
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-l from-neon-cyan to-neon-purple rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-black neon-text mb-16 text-center relative">Tracks & Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="glass-card p-8 w-full max-w-sm h-64 flex flex-col items-center justify-center text-center hover:scale-110 hover:rotate-1 transition-all duration-500 border-2 border-transparent hover:border-neon-purple/50 relative overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon with glow */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{track.icon}</div>
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 neon-text">{track.name}</h3>
              <p className="text-lg relative z-10">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}