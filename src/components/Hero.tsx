import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-mint-50 to-white">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-navy-800 mb-6">
          Bridging Underprivileged to Government Support
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          A platform that connects underprivileged individuals with relevant government benefits, faster.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-mint-200 hover:bg-mint-300 text-navy-800">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
        <div className="mt-8 text-mint-300 font-semibold">
          🏆 Won 1st Prize at Llama Impact Hackathon
        </div>
      </div>
    </section>
  );
};

export default Hero;