'use client';

import { MapContainer, TileLayer, Marker, useMap, useMapEvents, GeoJSON } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import { Hgo_Info } from '../../../landing/maps/Hgo';

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

const SearchMunicipio = () => {
  const map = useMap();
  const [selectedMunicipio, setSelectedMunicipio] = useState('');

  // Extraemos la lista de municipios desde las features del GeoJSON
  const options = Hgo_Info.features.map(feature => feature.properties.NOM_MUN);

  const handleSearch = (e) => {
    const municipio = e.target.value;
    setSelectedMunicipio(municipio);
    if (municipio !== '') {
      // Buscar la feature que coincida con el nombre seleccionado
      const feature = Hgo_Info.features.find(f => f.properties.NOM_MUN === municipio);
      if (feature) {
        // Creamos una capa temporal para obtener los límites del polígono
        const layer = L.geoJSON(feature);
        const bounds = layer.getBounds();
        // Ajustar el mapa a los límites del polígono con zoom máximo de 12
        if (bounds.isValid()) {
          map.fitBounds(bounds, { maxZoom: 12 });
        }
      }
    }
  };

  return (
    <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000, background: 'white', padding: '5px' }}>
      <select onChange={handleSearch} value={selectedMunicipio}>
        <option value="">Buscar municipio</option>
        {options.map((nom, index) => (
          <option key={index} value={nom}>{nom}</option>
        ))}
      </select>
    </div>
  );
};

const MapaUbicacion = ({ setFieldValue }) => {
  return (
    <MapContainer
      center={[20.44819465937593, -98.41534285830343]}
      zoom={8}
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

      {/* Agregamos el componente de búsqueda */}
      <SearchMunicipio />

      {/* Capa GeoJSON */}
      <GeoJSON
        data={Hgo_Info}
        style={() => ({
          color: '#3388ff',
          weight: 2,
          fillOpacity: 0.3,
        })}
      />

      <LocationPicker setFieldValue={setFieldValue} />
    </MapContainer>
  );
};

export default MapaUbicacion;
