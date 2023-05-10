import {getRandomTask} from '../mock/trip-points';

const TASK_COUNT = 2;

export default class TasksModel {
  tasks = Array.from({length: TASK_COUNT}, getRandomTask);

  getTasks() {
    return this.tasks;
  }
}

