'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContatoSection() {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui seria implementada a integração com e-mail/CRM
    setEnviado(true);
    reset();
    
    // Reset do estado após 5 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer mais informações sobre o Aurora Residence.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {enviado ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 text-center"
            >
              <p className="text-lg font-medium">Mensagem enviada com sucesso!</p>
              <p>Entraremos em contato em breve.</p>
            </motion.div>
          ) : null}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-6">
              <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
              <input
                type="text"
                id="nome"
                {...register('nome', { required: 'Nome é obrigatório' })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.nome ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mail inválido'
                  }
                })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
              <input
                type="tel"
                id="telefone"
                {...register('telefone', { required: 'Telefone é obrigatório' })}
                className={`w-full px-4 py-3 rounded-lg border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="(00) 00000-0000"
              />
              {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
              <textarea
                id="mensagem"
                {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${errors.mensagem ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
              {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}