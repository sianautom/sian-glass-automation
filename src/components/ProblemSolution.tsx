import { motion } from "framer-motion";
import { useState } from "react";
import { Frown, Smile, Clock, Zap, TrendingDown, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Antes vs Después</span>
          </h2>
          <p className="text-white/70 text-xl">Desliza para ver la transformación</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Problem Side */}
            <motion.div
              animate={{ opacity: sliderValue > 50 ? 0.3 : 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Frown className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Caos Manual</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Tareas repetitivas consumen horas" },
                  { icon: TrendingDown, text: "Errores humanos frecuentes" },
                  { icon: Frown, text: "Procesos lentos e ineficientes" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl"
                  >
                    <item.icon className="w-5 h-5 text-red-400" />
                    <span className="text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              animate={{ opacity: sliderValue < 50 ? 0.3 : 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Smile className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Orden Automatizado</h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Automatización instantánea" },
                  { icon: TrendingUp, text: "Precisión del 99.9%" },
                  { icon: Smile, text: "Flujos optimizados y rápidos" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl"
                  >
                    <item.icon className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Slider */}
          <div className="mt-8">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.3) ${sliderValue}%, rgba(34, 197, 94, 0.3) ${sliderValue}%, rgba(34, 197, 94, 0.3) 100%)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
