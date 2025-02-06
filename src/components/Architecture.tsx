const Architecture = () => {
  return (
    <section className="py-20 bg-mint-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-12">
          System Architecture
        </h2>
        <div className="relative">
          <img
            src="/lovable-uploads/82b63222-4541-43d2-acd3-6ebd9e421879.png"
            alt="System Architecture Diagram"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-navy-800 mb-3">Web Crawler</h3>
            <p className="text-gray-600">
              Automated data collection from government websites using SimpleWebPageReader.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-navy-800 mb-3">Vector Database</h3>
            <p className="text-gray-600">
              Efficient storage and retrieval using Pinecone Vector DB.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-navy-800 mb-3">Authentication</h3>
            <p className="text-gray-600">
              Secure access with Google OAuth 2.0 integration.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-navy-800 mb-3">Safety & Bias</h3>
            <p className="text-gray-600">
              Protected by Llama Guard for fair and safe recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;