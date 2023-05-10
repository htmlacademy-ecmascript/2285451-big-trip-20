import {getRandomSity} from '../mock/trip-points';

const SITY_COUNT = 5;

export default class SityModel {
  sities = Array.from({length: SITY_COUNT}, getRandomSity);
  
  getTasks() {
    return this.sities;
  }
}
