const teamMembers = [
  {
    name: "Saurabh Zinjad",
    role: "Lead Developer",
    github: "https://github.com/Ztrimus",
    image: "/lovable-uploads/68a03ecb-ac8b-4b1e-b081-00175b331a51-1.png"
  },
  {
    name: "Keval Shah",
    role: "Backend Engineer",
    github: "https://github.com/kevalshah14",
    image: "/lovable-uploads/68a03ecb-ac8b-4b1e-b081-00175b331a51-2.png"
  },
  {
    name: "Shikha Verma",
    role: "Frontend Engineer",
    github: "https://github.com/sverma89asu",
    image: "/lovable-uploads/68a03ecb-ac8b-4b1e-b081-00175b331a51-3.png"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-navy-800">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-300 hover:text-mint-200"
              >
                GitHub Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;