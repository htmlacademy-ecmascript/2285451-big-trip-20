import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';
import NewTripPoint from '../view/new-trip-point.js';
import NewTripPoinForm from '../view/new-trip-point-form.js';

import {render, RenderPosition, replace} from '../framework/render.js';

export default class BoardPresenter {
  #tripList = new NewTripPoinstList();

  #boardContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  #boardPoints = [];
  #boardCities = [];
  #boardOffers = [];

  constructor({boardContainer, pointsModel, destinationsModel, offersModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#boardCities = [...this.#destinationsModel.destinations];
    this.#boardOffers = [...this.#offersModel.offers];

    render(this.#tripList, this.#boardContainer);
    render(new NewTripSort(), this.#tripList.element, RenderPosition.BEFOREBEGIN);

    for (let i = 0; i < this.#boardPoints.length; i++) {
      // render(new NewTripPoint({point: this.#boardPoints[i], city: this.#boardCities.find((item) => item.id === this.#boardPoints[i].destination),
      //   offer: this.#boardOffers.find((item) => item.type === this.#boardPoints[i].type) }), this.#tripList.element);

      this.#renderPoint(this.#boardPoints[i],
        this.#boardCities.find((item) => item.id === this.#boardPoints[i].destination),
        this.#boardOffers.find((item) => item.type === this.#boardPoints[i].type));
    }
    // render(new NewTripPoinForm({point: this.#boardPoints[1], city: this.#boardCities.find((item) => item.id === this.#boardPoints[1].destination),
    //   offer: this.#boardOffers.find((item) => item.type === this.#boardPoints[1].type)}), this.#tripList.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point,city,offer) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new NewTripPoint({point, city, offer, onEditClick: () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }});

    const pointFormComponent = new NewTripPoinForm({point, city, offer, onFormSubmit: () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }
    });

    function replacePointToForm() {
      replace(pointFormComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointFormComponent);
    }
    render(pointComponent, this.#tripList.element);
  }
}
