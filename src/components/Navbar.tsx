import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="glass-card px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">SIAN</div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-white/80 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-white/80 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection("insights")} className="text-white/80 hover:text-white transition-colors">Insights</button>
          <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-white/80 hover:text-white transition-colors">Contact</button>
        </div>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-background font-semibold px-6 rounded-full glow-orange transition-all hover:scale-110"
        >
          Agendar
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
