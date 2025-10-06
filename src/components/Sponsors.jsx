export default function Sponsors() {
  const sponsors = ['Google', 'Microsoft', 'Amazon', 'xAI'];

  return (
    <section id="sponsors" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold neon-text mb-8 text-center">Sponsors</h2>
      <div className="container mx-auto flex flex-wrap justify-center space-x-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="glass-card p-4 hover:scale-105 transition">
            <p className="text-xl">{sponsor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}