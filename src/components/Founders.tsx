import { motion } from "framer-motion";
import { Lightbulb, Code2 } from "lucide-react";

const founders = [
  {
    name: "Jesús",
    role: "Estrategia",
    icon: Lightbulb,
    description: "Especialista en transformación digital y arquitectura de negocios inteligentes.",
  },
  {
    name: "André",
    role: "Técnica",
    icon: Code2,
    description: "Experto en implementación de IA, automatización y desarrollo de sistemas escalables.",
  },
];

const Founders = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Los Fundadores</span>
          </h2>
          <p className="text-white/70 text-xl">El equipo detrás de tu transformación</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                {/* Portrait placeholder with gradient overlay */}
                <div className="w-48 h-48 rounded-[32px] bg-gradient-to-br from-orange-500/20 to-blue-500/20 mb-6 relative overflow-hidden group-hover:glow-orange transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-blue-400/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <founder.icon className="w-20 h-20 text-orange-400/40" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {founder.name}
                </h3>
                
                <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                  <span className="text-orange-400 font-medium">{founder.role}</span>
                </div>

                <p className="text-white/60 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
