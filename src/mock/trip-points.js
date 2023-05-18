import {getArray} from '../utils.js';

const mockPoints = [

  {
    id: '2',
    basePrice: 294,
    dateFrom: '2019-03-18T9:00',
    dateTo: '2019-03-18T11:30',
    destination: '2',
    isFavorite: true,
    offers: [
    ],
    type: 'Train',
  },

  {
    id: '3',
    basePrice: 500,
    dateFrom: '2019-03-18T11:30',
    dateTo: '2019-03-18T11:40',
    destination: '3',
    isFavorite: false,
    offers: [
      '42a2ae15-874a-4825-ae36-63f127e506f9',

    ],
    type: 'Ship',
  },
  {
    id: '1',
    basePrice: 360,
    dateFrom: '2019-03-18T13:00',
    dateTo: '2019-03-18T15:30',
    destination: '1',
    isFavorite: true,
    offers: [
    ],
    type: 'Taxi',
  },

];

function getAllPoints() {
  return getArray(mockPoints);
}
export {getAllPoints};
