import NewTripFilter from './view/new-trip-filter.js';
import NewTrip from './view/new-trip.js';
import BoardPresenter from './presenter/board-presenter.js';

import {render, RenderPosition} from './framework/render.js';

import PointsModel from './model/trip-point-model.js';
import DestinationsModel from './model/trip-destination-model.js';
import OffersModel from './model/trip-offer-model.js';


const pointsModel = new PointsModel;
const destinationsModel = new DestinationsModel;
const offersModel = new OffersModel;


const mainContainer = document.querySelector('.page-body');
const tripHeaderContainer = mainContainer.querySelector('.trip-main');
const filterContainer = tripHeaderContainer.querySelector('.trip-controls__filters');

const tripListContainer = mainContainer.querySelector('.trip-events');

render(new NewTripFilter(), filterContainer, RenderPosition.BEFOREEND);
render(new NewTrip(), tripHeaderContainer, RenderPosition.AFTERBEGIN);

const boardPresenter = new BoardPresenter({boardContainer:tripListContainer, pointsModel, destinationsModel, offersModel});
boardPresenter.init();
