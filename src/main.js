import NewTripFilter from './view/filter-trip.js';
import NewTrip from './view/real-trip.js';
import BoardPresenter from './presenter/board-presenter.js';

import {render} from './render.js';
import {RenderPosition} from './render.js';

const mainContainer = document.querySelector('.page-body');
const tripHeaderContainer = mainContainer.querySelector('.trip-main');
const filterContainer = tripHeaderContainer.querySelector('.trip-controls__filters');

const tripListContainer = mainContainer.querySelector('.trip-events');

render(new NewTripFilter(), filterContainer,RenderPosition.BEFOREEND);
render(new NewTrip(), tripHeaderContainer, RenderPosition.AFTERBEGIN);

const boardPresenter = new BoardPresenter({boardContainer:tripListContainer});
boardPresenter.init();
