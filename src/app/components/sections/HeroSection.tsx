import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.svg" 
          alt="Aurora Residence" 
          fill 
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
            Aurora Residence – Viva o melhor de Balneário Camboriú a 4km da praia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Apartamentos modernos a partir de R$ 590.000 com financiamento direto.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300"
            onClick={() => {
              const diferenciais = document.getElementById('diferenciais');
              if (diferenciais) {
                diferenciais.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Saiba Mais
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}