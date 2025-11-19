import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuál es el proceso de implementación?",
    answer: "Nuestro proceso consta de 4 fases: Diagnóstico inicial donde analizamos tus procesos, Arquitectura donde diseñamos la solución, Implementación donde construimos y desplegamos, y Escalamiento con optimización continua.",
  },
  {
    question: "¿En cuánto tiempo veré resultados?",
    answer: "Los primeros resultados son visibles en 2-4 semanas. Muchos clientes reportan ahorro de tiempo inmediato y ROI completo en 3-6 meses dependiendo del alcance del proyecto.",
  },
  {
    question: "¿Qué ahorro puedo esperar?",
    answer: "Nuestros clientes típicamente ahorran 15-30 horas semanales en tareas manuales, reducen errores en un 95%, y mejoran la velocidad de procesos en 3-5x. El ahorro económico varía según el caso.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "No. Nos encargamos de toda la parte técnica. Tu equipo solo necesita conocer sus procesos actuales. Ofrecemos capacitación completa para usar las soluciones implementadas.",
  },
  {
    question: "¿Qué tipo de empresas trabajan con ustedes?",
    answer: "Trabajamos principalmente con PYMEs de diversos sectores: e-commerce, servicios profesionales, consultoría, educación, salud, y más. Si tienes procesos repetitivos, podemos ayudarte.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Preguntas Frecuentes</span>
          </h2>
          <p className="text-white/70 text-xl">Resolvemos tus dudas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-orange-400 transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
