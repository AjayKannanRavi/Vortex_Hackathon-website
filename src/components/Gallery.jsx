export default function Gallery() {
  const images = [
    'https://codeweek.eu/blog/wp-content/uploads/2024/03/AU1U4185-scaled.jpg',
    'https://www.coloradocollege.edu/newsevents/newsroom/_images/Harvard-Hackathon-Winners-2023.jpg',
    'https://www.hawaii.edu/news/wp-content/uploads/2025/09/manoa-ics-honolulu-tech-week-hackathon-winners.jpg',
    'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3722023110624244969',
    'https://codeweek.eu/blog/wp-content/uploads/2024/03/AU1U3680-scaled.jpg',
    'https://stanforddaily.com/wp-content/uploads/2025/10/SushiHackathon.png',
  ];

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-4xl font-bold neon-text mb-8 text-center">Gallery</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} className="rounded-lg hover:scale-105 transition" />
        ))}
      </div>
    </section>
  );
}