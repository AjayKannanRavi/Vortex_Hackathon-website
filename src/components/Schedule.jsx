export default function Schedule() {
  const timelineEvents = [
    {
      time: '9:30 AM - 10:00 AM',
      title: 'Opening Ceremony',
      description: 'The event officially begins with an inauguration, introduction of problem statements, and rules for participants.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      time: '10:00 AM - 10:30 AM',
      title: 'Arrangement',
      description: 'Participants get seated in their places and get ready with their idea for hackathon. Organizers will briefly tell about the 3 rounds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      time: '10:30 AM - 1:00 PM',
      title: 'Idea Selection',
      description: 'Initial shortlisting: Teams present their proposed ideas and judges evaluate and select teams to proceed for the upcoming challenges.',
      color: 'from-cyan-500 to-green-500'
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Lunch Break',
      description: 'After the announcement of the teams that are selected for the 3 rounds. They get a small refreshment before starting the round.',
      color: 'from-green-500 to-yellow-500'
    },
    {
      time: '2:10 PM - 5:30 PM',
      title: 'Round 1',
      description: 'Prototype/Feature Build. Objective: Develop initial version of the product with basic functionality.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      time: '5:30 PM - 6:15 PM',
      title: 'Snacks Break',
      description: '“Take a well-deserved break! Refresh yourself with snacks and beverages before diving into the next challenge.”',
      color: 'from-orange-500 to-red-500'
    },
    {
      time: '6:20 PM - 7:45 PM',
      title: 'Round 1 Evaluation',
      description: 'Judges review progress and provide scores & feedback. Top-performing teams proceed to next round.',
      color: 'from-red-500 to-pink-500'
    },
    {
      time: '7:45 PM - 8:30 PM',
      title: 'Dinner',
      description: '“Dinner is served! Refuel and recharge – the night is long, and the code awaits.”',
      color: 'from-pink-500 to-purple-500'
    },
    {
      time: '8:40 PM - 12:00 AM',
      title: 'Round 2',
      description: 'Integration & Innovation Challenge. Objective: Implement a creative/technical twist or integration feature.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      time: '12:00 AM - 1:15 AM',
      title: 'Slot 2 Evaluation',
      description: 'Judges evaluate second-round output. Feedback and scores shared. Some eliminations may happen here (optional).',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      time: '1:15 AM - 2:00 AM',
      title: 'Break',
      description: 'Break between Bread and jam in which the participants can relax a bit.',
      color: 'from-cyan-500 to-green-500'
    },
    {
      time: '2:10 AM - 5:30 AM',
      title: 'Round 3',
      description: 'Final Build & Polish. Final product development, testing, and UI/UX polishing. Prepare for final demo & pitch.',
      color: 'from-green-500 to-yellow-500'
    },
    {
      time: '5:30 AM - 6:45 AM',
      title: 'Round 3 Evaluation',
      description: 'Final Pitch/Demo. Each team presents their finished product. Judging based on impact, innovation, execution, and presentation.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      time: '6:45 AM - 10:00 AM',
      title: 'Refresh & Relax Break',
      description: '“All rounds completed! Take a short break to relax, freshen up, and prepare for the final results. You’ve earned it!”',
      color: 'from-orange-500 to-red-500'
    },
    {
      time: '10:00 AM - 12:00 PM',
      title: 'Announcement',
      description: 'Final scores revealed. Top 3 teams awarded. Certificates and goodies distributed.',
      color: 'from-red-500 to-pink-500'
    },
    {
      time: '12:00 PM - 1:30 PM',
      title: 'Lunch & Networking',
      description: '“Celebrate your hard work over lunch. Connect with fellow participants, mentors, and judges before wrapping up the event.”',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-black neon-text mb-16 text-center">Schedule</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-neon-purple to-neon-cyan h-full z-0"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex items-center mb-12 relative z-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-3/4 glass-card p-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${event.color} text-white`}>
                  {event.time}
                </div>
                <h3 className="text-2xl font-bold neon-text mb-3">{event.title}</h3>
                {event.description && <p className="text-lg leading-relaxed">{event.description}</p>}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full border-4 border-black z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}