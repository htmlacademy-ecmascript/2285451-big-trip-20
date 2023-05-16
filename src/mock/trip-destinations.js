import {getArray} from '../utils.js';

const mockDestinations = [
  {
    id: '1',
    description: 'Paris - for those who value comfort and coziness',
    name: 'Paris',
    pictures: [],
  },
  {
    id: '3',
    description: 'NY - for those who value comfort and coziness',
    name: 'NY',
    pictures : [
      {
        src: 'https://20.objects.pages.academy/static/destinations/12.jpg',
        description: 'Oslo with a beautiful old town',
      },
      {
        src: 'https://20.objects.pages.academy/static/destinations/7.jpg',
        description: 'LA a perfect place to stay with a family',
      },
      {
        src: 'https://20.objects.pages.academy/static/destinations/15.jpg',
        description: 'LA a perfect place to stay with a family'
      },
    ]
  },
  {
    id: '2',
    description: 'LA - for those who value comfort and coziness',
    name: 'LA',
    pictures : [
      {
        src: 'https://20.objects.pages.academy/static/destinations/7.jpg',
        description: 'LA a perfect place to stay with a family',
      },
      {
        src: 'https://20.objects.pages.academy/static/destinations/17.jpg',
        description: 'LA a perfect place to stay with a family'
      },
      {
        src: 'https: //20.objects.pages.academy/static/destinations/18.jpg',
        description: 'LA with crowded streets',
      }
    ]
  },
];

function getAllDestinations() {
  return getArray(mockDestinations);
}
export {getAllDestinations};
