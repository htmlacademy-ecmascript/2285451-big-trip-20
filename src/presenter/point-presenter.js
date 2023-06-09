import NewTripPoint from '../view/new-trip-point.js';
import NewTripPointForm from '../view/new-trip-point-form.js';

import {render, replace, remove} from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointContainer = null;
  #pointComponent = null;
  #pointFormComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #point = null;
  #cities = null;
  #alloffers = null;

  #mode = Mode.DEFAULT;

  constructor({pointContainer, onDataChange , onModeChange}) {
    this.#pointContainer = pointContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point, cities, alloffers) {

    this.#point = point;
    this.#cities = cities;
    this.#alloffers = alloffers;

    const prevPointComponent = this.#pointComponent;
    const prevPointFormComponent = this.#pointFormComponent;


    this.#pointComponent = new NewTripPoint({
      point: this.#point,
      cities: this.#cities,
      alloffers:this.#alloffers,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointFormComponent = new NewTripPointForm({
      point: this.#point,
      cities: this.#cities,
      alloffers:this.#alloffers,
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleFormSubmit,
    }
    );

    if (prevPointComponent === null || prevPointFormComponent === null) {
      render(this.#pointComponent, this.#pointContainer);
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm() {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent,this.#pointFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point,isFavorite: !this.#point.isFavorite});
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };
}
