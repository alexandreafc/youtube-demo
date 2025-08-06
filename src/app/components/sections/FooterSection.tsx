import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FooterSection() {
	return (
		<footer className='bg-gray-800 text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-xl font-bold mb-4'>Aurora Residence</h3>
						<p className='mb-4'>
							O melhor de Balneário Camboriú a 4km da praia.
						</p>
						<p className='text-gray-400'>
							© {new Date().getFullYear()} Aurora Residence. Todos os direitos
							reservados.
						</p>
					</div>

					<div>
						<h3 className='text-xl font-bold mb-4'>Contato</h3>
						<ul className='space-y-2'>
							<li className='flex items-center'>
								<span className='mr-2'>📍</span>
								<span>Rua Exemplo, 123 - Balneário Camboriú, SC</span>
							</li>
							<li className='flex items-center'>
								<span className='mr-2'>📱</span>
								<span>(47) 3333-3333</span>
							</li>
							<li className='flex items-center'>
								<span className='mr-2'>✉️</span>
								<span>contato@auroraresidence.com.br</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-xl font-bold mb-4'>Redes Sociais</h3>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='hover:text-blue-400 transition duration-300'
							>
								<span className='text-2xl'>📘</span>
							</Link>
							<Link
								href='#'
								className='hover:text-blue-400 transition duration-300'
							>
								<span className='text-2xl'>📸</span>
							</Link>
							<Link
								href='#'
								className='hover:text-blue-400 transition duration-300'
							>
								<span className='text-2xl'>📱</span>
							</Link>
						</div>
						<div className='mt-6'>
							<Link
								href='/politica-de-privacidade'
								className='text-gray-400 hover:text-white transition duration-300'
							>
								Política de Privacidade
							</Link>
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='mt-12 pt-8 border-t border-gray-700 text-center text-gray-400'
				>
					<p>Desenvolvido com ❤️ por Aurora Construtora</p>
				</motion.div>
			</div>
		</footer>
	);
}
