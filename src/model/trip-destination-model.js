import {getAllDestinations} from '../mock/trip-destinations.js';

export default class DestinationsModel {
  destinations = getAllDestinations();

  getDestinations() {
    return this.destinations;
  }
}
