import {getArray} from '../utils.js';

const mockOffers = [
  {
    type: 'Taxi',
    offers: [
      {
        id: '6f283a18-7ca7-4734-b107-a183da52ed4c',
        title: 'Business class',
        price: 159
      },
      {
        id: '4a0fe49d-12f5-4272-9412-1cf23cff329e',
        title: 'Drive slowly',
        price: 150
      }
    ]
  },
  {
    type: 'Ship',
    offers: [
      {
        id: 'a7cadbca-56f0-4e7f-91e3-93dbfd6aee4c',
        title: 'Infotainment system',
        price: 154
      },
      {
        id: '42a2ae15-874a-4825-ae36-63f127e506f9',
        title: 'Order meal',
        price: 147
      },
    ]
  },
  {
    type: 'Train',
    offers: [
      {
        id: 'bb8f230b-c68d-46e5-a2d9-d26ec54c38a5',
        title: 'Book a taxi',
        price: 165
      },
      {
        id: 'be2d5748-9f9b-40db-8965-905a805b104b',
        title: 'Order a breakfas',
        price: 49
      },
    ]
  },
];

function getAllOffer() {
  return getArray(mockOffers);
}
export {getAllOffer};
