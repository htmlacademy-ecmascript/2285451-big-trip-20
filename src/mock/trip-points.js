import {getRandomArrayElement} from '../utils.js';


const mockPoints = [

{
    id: '2',
    basePrice: 294,
    dateFrom: '2024-02-05T21:28:01.397Z',
    dateTo: '2024-02-06T03:28:01.397Z',
    destination: 'что-то',
    isFavorite: true,
    offers: [
    ],
    type: 'ship',
  },

  {
    id: '3',
    basePrice: 700,
    dateFrom: '2024-02-05T21:28:01.397Z',
    dateTo: '2024-02-06T03:28:01.397Z',
    destination: 'что-то там',
    isFavorite: true,
    offers: [
    ],
    type: 'Train',
  },

];

function getRandomTask() {
  return getRandomArrayElement(mockPoints);
}


const mockDesk = [

  {
      sity: 'NY',
      id: '3',
    },
  
    {
      sity: 'LA',
      id: '4',
    },
  
  ];


console.log(mockDesk);

function getRandomSity() {
  return getRandomArrayElement(mockDesk);
}

console.log(getRandomSity());

export {getRandomTask, getRandomSity};

