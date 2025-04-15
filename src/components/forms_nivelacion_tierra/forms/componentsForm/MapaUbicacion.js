'use client';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';

// Corrige el problema con los íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

const LocationPicker = ({ setFieldValue }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setFieldValue('latitud', lat.toFixed(6));
      setFieldValue('longitud', lng.toFixed(6));
    },
  });

  return position === null ? null : <Marker position={position} />;
};

const MapaUbicacion = ({ setFieldValue }) => {
  return (
    <MapContainer
      center={[20.44819465937593, -98.41534285830343]}
      zoom={9}
      attributionControl={false}
      minZoom={8}
      maxZoom={20}
      style={{ height: '450px', width: '100%' }}
    >
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
      />

      <LocationPicker setFieldValue={setFieldValue} />
    </MapContainer>
  );
};

export default MapaUbicacion;
