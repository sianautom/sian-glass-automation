import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Tech Solutions",
    quote: "SIAN transformó completamente nuestros procesos. Ahorramos más de 20 horas semanales con su automatización.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    company: "Innovate Corp",
    quote: "La implementación fue impecable. Su equipo entendió perfectamente nuestras necesidades y superó expectativas.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    company: "Growth Partners",
    quote: "ROI increíble. En solo 3 meses recuperamos la inversión y seguimos escalando con sus soluciones.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Lo que dicen nuestros clientes</span>
          </h2>
          <p className="text-white/70 text-xl">Resultados reales, satisfacción garantizada</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/50 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
