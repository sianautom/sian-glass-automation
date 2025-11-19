import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !accepted) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    toast.success("¡Gracias por suscribirte!");
    setEmail("");
    setAccepted(false);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-400/10 items-center justify-center mb-6"
            >
              <Mail className="w-8 h-8 text-orange-400" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">¿Listo para el futuro?</span>
            </h2>
            
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Recibe insights, trucos y novedades de automatización e IA directamente en tu inbox.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-full"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-background font-semibold px-8 rounded-full glow-orange whitespace-nowrap hover:scale-110 transition-all"
                >
                  Suscribirme
                </Button>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="accept"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked as boolean)}
                  className="mt-1 border-white/20 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="accept"
                  className="text-sm text-white/60 text-left cursor-pointer"
                >
                  Acepto recibir comunicaciones sobre automatización, IA y novedades de SIAN
                </label>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
