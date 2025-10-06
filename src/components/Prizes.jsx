export default function Prizes() {
  const prizes = [
    { place: '1st Place', amount: '₹10000' },
    { place: '2nd Place', amount: '₹7000' },
    { place: '3rd Place', amount: '₹5000' },
  ];

  return (
    <section id="prizes" className="py-20 container mx-auto relative">
      <h2 className="text-5xl font-black neon-text mb-12 text-center">Prizes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prizes.map((prize, index) => (
          <div key={index} className="glass-card p-8 text-center hover:scale-110 transition-all duration-300 relative overflow-hidden group">
            {/* Inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">{prize.place}</h3>
            <p className="text-4xl font-black relative z-10 neon-text">{prize.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
}