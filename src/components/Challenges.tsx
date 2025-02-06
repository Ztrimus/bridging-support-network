const challenges = [
  {
    title: "Complex Application Processes",
    description: "Navigating through multiple forms and requirements.",
  },
  {
    title: "Lack of Awareness",
    description: "Missing out on available benefits due to information gaps.",
  },
  {
    title: "Language & Digital Literacy",
    description: "Barriers in understanding and accessing digital services.",
  },
  {
    title: "Documentation Requirements",
    description: "Difficulty in gathering and maintaining required paperwork.",
  },
  {
    title: "Frequent Eligibility Changes",
    description: "Keeping up with changing criteria and deadlines.",
  },
];

const Challenges = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">
          Challenges in Benefit Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-mint-200 transition-colors"
            >
              <h3 className="text-xl font-semibold text-navy-800 mb-3">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;