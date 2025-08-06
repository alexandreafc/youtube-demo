import Image from 'next/image';
import { motion } from 'framer-motion';

interface DiferencialProps {
  icon: string;
  title: string;
  description: string;
}

const Diferencial = ({ icon, title, description }: DiferencialProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: '/images/building.svg',
      title: '25 Apartamentos',
      description: 'Unidades de 58, 61 e 71m²'
    },
    {
      icon: '/images/bbq.svg',
      title: 'Varanda com Churrasqueira',
      description: 'Churrasqueira a carvão'
    },
    {
      icon: '/images/bedroom.svg',
      title: '2 Quartos',
      description: '1 suíte'
    },
    {
      icon: '/images/car.svg',
      title: '1 Vaga de Garagem',
      description: 'Estacionamento coberto'
    },
    {
      icon: '/images/location.svg',
      title: 'Localização Estratégica',
      description: 'A 4km da praia'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Diferenciais do Empreendimento</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conheça as características que fazem do Aurora Residence a escolha perfeita para você.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Diferencial 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}