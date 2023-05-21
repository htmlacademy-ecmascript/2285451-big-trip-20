import {getAllOffer} from '../mock/trip-offers.js';

export default class OffersModel {
  #offers = getAllOffer();

  get offers() {
    return this.#offers;
  }
}
