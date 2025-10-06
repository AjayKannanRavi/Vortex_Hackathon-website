export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/vortex.mp4" type="video/mp4" /> {/* Replace with your video path/URL */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" /> {/* Optional overlay for better text readability */}
      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="text-6xl font-bold neon-text mb-4">Vortex Hackathon</h1>
        <p className="text-2xl mb-8">October 29th & 30th 2025</p>
        <a href="#register" className="bg-gradient-to-r from-neon-purple to-neon-cyan px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition">Register Now</a>
      </div>
    </section>
  );
}