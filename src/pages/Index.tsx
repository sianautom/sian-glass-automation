import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Pipeline from "@/components/Pipeline";
import Founders from "@/components/Founders";
import Vlogs from "@/components/Vlogs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <Pipeline />
      <Founders />
      <Vlogs />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
