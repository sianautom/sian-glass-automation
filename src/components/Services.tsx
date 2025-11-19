import { motion } from "framer-motion";
import { Headphones, Target, RefreshCcw, Search, Box, Rocket, Wrench } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Concierge Automatizado",
    description: "Asistencia 24/7 mediante IA que atiende consultas y guía a tus clientes automáticamente.",
  },
  {
    icon: Target,
    title: "Cualificador de Leads",
    description: "Identifica y clasifica leads de alta calidad, optimizando tu embudo de ventas.",
  },
  {
    icon: RefreshCcw,
    title: "Recuperador Post-Venta",
    description: "Reconecta con clientes anteriores mediante flujos automatizados inteligentes.",
  },
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    description: "Análisis profundo de procesos para identificar oportunidades de automatización.",
  },
  {
    icon: Box,
    title: "Arquitectura de Sistemas",
    description: "Diseñamos la infraestructura tecnológica perfecta para tu negocio.",
  },
  {
    icon: Rocket,
    title: "Implementación & Optimización",
    description: "Ponemos en marcha soluciones que funcionan desde el día uno.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Continuo",
    description: "Soporte técnico constante para garantizar rendimiento óptimo.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-white/70 text-xl">Soluciones completas para cada necesidad</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card glass-card-hover p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-400/10 flex items-center justify-center mb-6 group-hover:glow-orange transition-all">
                <service.icon className="w-7 h-7 text-orange-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
