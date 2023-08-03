import { useRef, useEffect, useState } from 'react';
import { MapType, DEFAULT_MARKER_SRC, CURRENT_MARKER_SRC } from '../../const';
import { Marker, Icon, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks';

type MapProps = {
  mapType: string;
  hoveredOfferId?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MARKER_SRC,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_MARKER_SRC,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = ({mapType, hoveredOfferId}: MapProps) => {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const [currentCityName, setCurrentCityName] = useState(city.name);

  if (map && currentCityName !== city.name) {
    map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    setCurrentCityName(city.name);
  }

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          offer.id === hoveredOfferId ? currentCustomIcon : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [offers, map, hoveredOfferId]);

  return (
    <section className={`${mapType === MapType.Main ? MapType.Main : MapType.Offer}__map map`} ref={mapRef}/>
  );
};

export { Map };
