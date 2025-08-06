import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImagemProps {
  src: string;
  alt: string;
}

const imagens: ImagemProps[] = [
  { src: '/images/hero-bg.svg', alt: 'Fachada do Aurora Residence' },
  { src: '/images/planta.svg', alt: 'Planta do apartamento de 58m²' },
  { src: '/images/planta.svg', alt: 'Planta do apartamento de 61m²' },
  { src: '/images/planta.svg', alt: 'Planta do apartamento de 71m²' },
];

export default function GaleriaSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImagemProps | null>(null);

  const openLightbox = (imagem: ImagemProps) => {
    setCurrentImage(imagem);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Galeria de Imagens e Plantas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conheça os detalhes do Aurora Residence e visualize as plantas dos apartamentos disponíveis.</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {imagens.map((imagem, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => openLightbox(imagem)}
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={imagem.src} 
                    alt={imagem.alt} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800">{imagem.alt}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {lightboxOpen && currentImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-screen p-4">
              <button 
                className="absolute top-4 right-4 text-white text-2xl z-10"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <div className="relative w-full h-[80vh]">
                <Image 
                  src={currentImage.src} 
                  alt={currentImage.alt} 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4">{currentImage.alt}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}