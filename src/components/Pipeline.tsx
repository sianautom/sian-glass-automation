import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Box, Rocket, TrendingUp } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos tus procesos actuales e identificamos oportunidades de mejora mediante IA y automatización.",
  },
  {
    icon: Box,
    number: "02",
    title: "Arquitectura",
    description: "Diseñamos la estructura tecnológica perfecta adaptada a tus necesidades específicas.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementación",
    description: "Construimos y desplegamos las soluciones, asegurando una transición suave y efectiva.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Escalamiento",
    description: "Optimizamos continuamente y escalamos las soluciones según crece tu negocio.",
  },
];

const Pipeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Pipeline de Éxito</span>
          </h2>
          <p className="text-white/70 text-xl">Tu camino hacia la transformación digital</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-orange-400 to-orange-500"
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-400/10 border-2 border-orange-400/30 flex items-center justify-center glow-orange"
                >
                  <step.icon className="w-7 h-7 text-orange-400" />
                </motion.div>

                {/* Content card */}
                <div className="glass-card p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-6xl font-bold text-white/5">{step.number}</span>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 gradient-text">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
