import { motion } from "framer-motion";
import { Copy, Mail, Linkedin, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("sianautom@gmail.com");
    toast.success("Email copiado al portapapeles");
  };

  return (
    <footer id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A] to-[#0A0F1C]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="gradient-text">¿Listo para el futuro?</span>
          </h2>

          <div className="inline-flex items-center gap-3 glass-card px-6 py-4 mb-8">
            <Mail className="w-5 h-5 text-orange-400" />
            <span className="text-white text-lg">sianautom@gmail.com</span>
            <button
              onClick={copyEmail}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Copy email"
            >
              <Copy className="w-4 h-4 text-white/60 hover:text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center group"
              >
                <social.icon className="w-5 h-5 text-white/60 group-hover:text-orange-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm">
            © 2025 SIAN - Soluciones Inteligentes de Automatización y Negocios. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
