import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "3434802056";
  const message = encodeURIComponent("Hola, quisiera solicitar una consulta de familia.");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        >
          {/* Tooltip hint */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 mb-3 text-sm font-medium text-slate-700 hidden md:block"
          >
            ¿Necesitas asesoramiento? 👋
          </motion.div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-green-500 rounded-full -z-10 opacity-30"
            ></motion.div>
            <MessageCircle className="w-8 h-8" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
