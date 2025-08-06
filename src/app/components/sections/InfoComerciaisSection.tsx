import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  value: string;
  icon: string;
}

const InfoCard = ({ title, value, icon }: InfoCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
    >
      <div className="text-3xl text-blue-500 mb-2">{icon}</div>
      <h3 className="text-xl font-bold mb-1 text-gray-800">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600">{value}</p>
    </motion.div>
  );
};

export default function InfoComerciaisSection() {
  const infos = [
    {
      title: 'Preço a partir de',
      value: 'R$ 590.000',
      icon: '💰'
    },
    {
      title: 'Entrada',
      value: '10%',
      icon: '🔑'
    },
    {
      title: 'Entrega das chaves',
      value: '36 meses',
      icon: '📅'
    },
    {
      title: 'Financiamento',
      value: 'Até 180x',
      icon: '📝'
    }
  ];

  return (
    <section id="comercial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Informações Comerciais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Condições especiais de lançamento com financiamento direto com a construtora.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infos.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <InfoCard 
                title={info.title} 
                value={info.value} 
                icon={info.icon} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Financiamento direto com a construtora, sem burocracia e com as melhores condições do mercado.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300"
            onClick={() => {
              const contato = document.getElementById('contato');
              if (contato) {
                contato.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Fale com um Consultor
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}