import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Architecture from "@/components/Architecture";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Challenges />
      <Architecture />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;