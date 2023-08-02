import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '7247a40a-ff01-49e3-8c0c-694c03ad4f8c',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 208,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35054,
      longitude: 4.908976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  },
  {
    id: '55a0b4b1-114b-4883-bdfd-2b4a39c27cf2',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 242,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37154,
      longitude: 4.889976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8
  },
  {
    id: 'f3d7f525-b58c-46cc-bc34-fac20815a762',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 106,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.364540000000005,
      longitude: 4.9019759999999994,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.6
  },
  {
    id: 'a43e0ffe-e64a-459c-8703-4077861d7c74',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 120,
    previewImage: 'https://13.design.pages.academy/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36354,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6
  }
];
