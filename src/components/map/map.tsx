import { useRef, useEffect } from 'react';
import { City } from '../../types/offer';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';

import { Offer } from '../../types/offer';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  city: City;
};

const Map = ({offers, city}: MapProps) => {
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
  // }, [map]);

  return (
    <section className="cities__map map" ref={mapRef}/>
  );
};

export { Map };
