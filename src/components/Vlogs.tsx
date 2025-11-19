import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const vlogs = [
  {
    title: "IA Trends 2025",
    description: "Las últimas tendencias en inteligencia artificial para empresas",
    thumbnail: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Tutoriales n8n",
    description: "Aprende a automatizar procesos complejos paso a paso",
    thumbnail: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Casos de Éxito",
    description: "Historias reales de transformación digital exitosa",
    thumbnail: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Automatización Avanzada",
    description: "Técnicas avanzadas para optimizar tu negocio",
    thumbnail: "from-blue-500/20 to-cyan-500/20",
  },
];

const Vlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % vlogs.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + vlogs.length) % vlogs.length);

  return (
    <section id="insights" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Insights & Vlogs</span>
          </h2>
          <p className="text-white/70 text-xl">Aprende de nuestros expertos</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {vlogs.map((vlog, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-8 cursor-pointer group"
                  >
                    <div className={`aspect-video rounded-3xl bg-gradient-to-br ${vlog.thumbnail} mb-6 relative overflow-hidden group-hover:glow-orange transition-all`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-orange-400/30 transition-all"
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </motion.div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                      {vlog.title}
                    </h3>
                    
                    <p className="text-white/60">
                      {vlog.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {vlogs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-orange-400 w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vlogs;
