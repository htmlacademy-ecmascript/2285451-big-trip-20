import {getAllPoints} from '../mock/trip-points';

export default class PointsModel {

  points = getAllPoints();

  getPoints() {
    return this.points;
  }
}
