import {getAllDestinations} from '../mock/trip-destinations.js';

export default class DestinationsModel {
  #destinations = getAllDestinations();

  get destinations() {
    return this.#destinations;
  }
}
