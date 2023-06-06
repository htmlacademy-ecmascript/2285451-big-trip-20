import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';
import NewTripPoint from '../view/new-trip-point.js';
import NewTripPoinForm from '../view/new-trip-point-form.js';

import PointPresenter from '../presenter/point-presenter.js';

import {updateItem} from '../utils.js';



import {render, RenderPosition, replace} from '../framework/render.js';



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

  #handleTaskChange = (updatedTask) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedTask);
    this.#pointPresenters.get(updatedTask.id).init(updatedTask);
  };


  #renderSort() {
    render(this.#sortComponent, this.#tripList.element,RenderPosition.AFTERBEGIN);
  }

  #clearTaskList() {
    this.this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.this.#pointPresenters.clear();
  }

  #renderTasks(from, to) {
    this.#boardPoints
      .slice(from, to)
      .forEach((point) => this.#renderPoint(point,
        this.#boardCities.find((item) => item.id === point.destination),
        this.#boardOffers.find((item) => item.type === point.type)));
  }

  #renderTaskList() {

    this.#renderTasks(0, Math.min(this.#boardPoints.length));
  }


  init() {
    this.#boardPoints = [...this.#pointsModel.points];
    this.#boardCities = [...this.#destinationsModel.destinations];
    this.#boardOffers = [...this.#offersModel.offers];
   
    this.#renderBoard();

    // for (let i = 0; i < this.#boardPoints.length; i++) {
    //   // render(new NewTripPoint({point: this.#boardPoints[i], city: this.#boardCities.find((item) => item.id === this.#boardPoints[i].destination),
    //   //   offer: this.#boardOffers.find((item) => item.type === this.#boardPoints[i].type) }), this.#tripList.element);

    //   this.#renderPoint(this.#boardPoints[i],
    //     this.#boardCities.find((item) => item.id === this.#boardPoints[i].destination),
    //     this.#boardOffers.find((item) => item.type === this.#boardPoints[i].type));
    // }
    // render(new NewTripPoinForm({point: this.#boardPoints[1], city: this.#boardCities.find((item) => item.id === this.#boardPoints[1].destination),
    //   offer: this.#boardOffers.find((item) => item.type === this.#boardPoints[1].type)}), this.#tripList.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point,city,offer) {

    const pointPresenter = new PointPresenter ({
      pointContainer: this.#tripList.element,
      onDataChange: this.#handleTaskChange,
    });
  
  //   const escKeyDownHandler = (evt) => {
  //     if (evt.key === 'Escape') {
  //       evt.preventDefault();
  //       replaceFormToPoint();
  //       document.removeEventListener('keydown', escKeyDownHandler);
  //     }
  //   };

  //   const pointComponent = new NewTripPoint({point, city, offer, onEditClick: () => {
  //     replacePointToForm();
  //     document.addEventListener('keydown', escKeyDownHandler);
  //   }});

  //   const pointFormComponent = new NewTripPoinForm({point, city, offer, onFormSubmit: () => {
  //     replaceFormToPoint();
  //     document.removeEventListener('keydown', escKeyDownHandler);
  //   },
  //   onEditClick: () => replaceFormToPoint(),
  //   });

  //   function replacePointToForm() {
  //     replace(pointFormComponent, pointComponent);
  //   }

  //   function replaceFormToPoint() {
  //     replace(pointComponent, pointFormComponent);
  //   }
  //   render(pointComponent, this.#tripList.element);
      pointPresenter.init(point,city,offer);
      
      this.#pointPresenters.set(point.id, pointPresenter);
   }


  #renderBoard() {
    render(this.#tripList, this.#boardContainer);

    this.#renderSort();
    this.#renderTaskList();
  }


}
