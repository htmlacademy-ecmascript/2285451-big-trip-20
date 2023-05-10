import NewTripFilter from './view/new-trip-filter.js';
import NewTrip from './view/new-trip.js';
import BoardPresenter from './presenter/board-presenter.js';

import {render} from './render.js';
import {RenderPosition} from './render.js';

import TasksModel from './model/trip-point-model.js';
import SityModel from './model/sity.js';


const tasksModel = new TasksModel;
const sityModel = new SityModel;

 
const mainContainer = document.querySelector('.page-body');
const tripHeaderContainer = mainContainer.querySelector('.trip-main');
const filterContainer = tripHeaderContainer.querySelector('.trip-controls__filters');

const tripListContainer = mainContainer.querySelector('.trip-events');

render(new NewTripFilter(), filterContainer, RenderPosition.BEFOREEND);
render(new NewTrip(), tripHeaderContainer, RenderPosition.AFTERBEGIN);

const boardPresenter = new BoardPresenter({boardContainer:tripListContainer, tasksModel, sityModel});
boardPresenter.init();

console.log(boardPresenter);