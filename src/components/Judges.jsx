export default function Judges() {
  const people = [
    { name: 'Judge 1', role: 'Tech Expert' },
    { name: 'Mentor 1', role: 'Industry Leader' },
    // Add more
  ];

  return (
    <section id="judges" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-4xl font-bold neon-text mb-8 text-center">Judges & Mentors</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {people.map((person, index) => (
          <div key={index} className="glass-card p-6 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
            <p>{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}