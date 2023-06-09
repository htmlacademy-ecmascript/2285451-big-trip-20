import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';

import PointPresenter from '../presenter/point-presenter.js';

import {updateItem} from '../utils.js';

import {render, RenderPosition} from '../framework/render.js';

export default class BoardPresenter {
  #tripList = new NewTripPoinstList();

  #sortComponent = new NewTripSort();


  #boardContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #boardPoints = [];
  #boardCities = [];
  #boardOffers = [];

  #pointPresenters = new Map();

  constructor({boardContainer, pointsModel, destinationsModel, offersModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;

  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint,this.#boardCities, this.#boardOffers);
  };

  #renderSort() {
    render(this.#sortComponent, this.#tripList.element,RenderPosition.AFTERBEGIN);
  }

  // #clearTaskList() {
  //   this.#pointPresenters.forEach((presenter) => presenter.destroy());
  //   this.#pointPresenters.clear();
  // }

  #renderTasks(from, to) {
    this.#boardPoints
      .slice(from, to)
      .forEach((point) => this.#renderPoint(point, this.#boardCities, this.#boardOffers));
  }

  #renderTaskList() {

    this.#renderTasks(0, Math.min(this.#boardPoints.length));
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#boardCities = [...this.#destinationsModel.destinations];
    this.#boardOffers = [...this.#offersModel.offers];

    this.#renderBoard();
  }

  #renderPoint(point, cities, offer) {

    const pointPresenter = new PointPresenter ({
      pointContainer: this.#tripList.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });
    pointPresenter.init(point, cities, offer);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderBoard() {
    render(this.#tripList, this.#boardContainer);

    this.#renderSort();
    this.#renderTaskList();
  }
}
