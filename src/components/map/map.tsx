import { useRef, useEffect } from 'react';
import { MapType } from '../../const';
import { City } from '../../types/offer';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  city: City;
  mapType: string;
};

const Map = ({offers, city, mapType}: MapProps) => {
  const selectedOffers = offers.filter((offer) => offer.city.name === city.name);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      selectedOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, selectedOffers]);

  return (
    <section className={`${mapType === MapType.Main ? MapType.Main : MapType.Offer}__map map`} ref={mapRef}/>
  );
};

export { Map };
