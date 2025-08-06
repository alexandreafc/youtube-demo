'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

interface LocalProps {
  id: number;
  name: string;
  type: string;
  position: {
    lat: number;
    lng: number;
  };
  distance: string;
}

const locais: LocalProps[] = [
  {
    id: 1,
    name: 'Praia Central',
    type: 'Praia',
    position: { lat: -26.9879, lng: -48.6354 },
    distance: '4 km'
  },
  {
    id: 2,
    name: 'Supermercado Exemplo',
    type: 'Supermercado',
    position: { lat: -26.9950, lng: -48.6400 },
    distance: '1.5 km'
  },
  {
    id: 3,
    name: 'Padaria Aurora',
    type: 'Padaria',
    position: { lat: -26.9930, lng: -48.6380 },
    distance: '0.8 km'
  },
  {
    id: 4,
    name: 'Escola Municipal',
    type: 'Escola',
    position: { lat: -26.9960, lng: -48.6420 },
    distance: '1.2 km'
  },
];

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -26.9920,
  lng: -48.6370
};

export default function RegiaoSection() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocal, setSelectedLocal] = useState<LocalProps | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <section id="regiao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Sobre a Região</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Localizado em uma área privilegiada de Balneário Camboriú, o Aurora Residence oferece fácil acesso a diversos pontos de interesse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Uma Região em Crescimento</h3>
            <p className="text-lg text-gray-700 mb-6">
              Balneário Camboriú é uma das cidades que mais cresce no Brasil, com valorização imobiliária constante e infraestrutura de primeiro mundo.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              O Aurora Residence está localizado a apenas 4km da praia, em uma área com completa infraestrutura de comércio, serviços e lazer.
            </p>
            <ul className="space-y-3">
              {locais.map((local) => (
                <li key={local.id} className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="font-medium">{local.name}</span>
                  <span className="text-gray-500 ml-2">({local.distance})</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Marcador do empreendimento */}
                <Marker
                  position={center}
                  icon={{
                    url: '/images/location.svg',
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                />

                {/* Marcadores dos pontos de interesse */}
                {locais.map((local) => (
                  <Marker
                    key={local.id}
                    position={local.position}
                    onClick={() => setSelectedLocal(local)}
                  />
                ))}

                {selectedLocal && (
                  <InfoWindow
                    position={selectedLocal.position}
                    onCloseClick={() => setSelectedLocal(null)}
                  >
                    <div className="p-2">
                      <h3 className="font-bold">{selectedLocal.name}</h3>
                      <p>{selectedLocal.type} - {selectedLocal.distance}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            ) : (
              <div className="h-[500px] bg-gray-200 flex items-center justify-center">
                <p>Carregando mapa...</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}