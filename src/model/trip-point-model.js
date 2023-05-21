import {getAllPoints} from '../mock/trip-points';

export default class PointsModel {

  #points = getAllPoints();

  get points() {
    return this.#points;
  }
}
