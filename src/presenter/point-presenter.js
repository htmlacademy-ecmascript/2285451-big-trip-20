import NewTripPoint from '../view/new-trip-point.js';
import NewTripPointForm from '../view/new-trip-point-form.js';

import {render, RenderPosition, replace, remove} from '../framework/render.js';


export default class PointPresenter {
  #pointContainer = null;
  #pointComponent = null;
  #pointFormComponent = null;
  #handleDataChange = null;


  #point = null;
  #city = null;
  #offer = null;

  constructor({pointContainer, onDataChange}) {
    this.#pointContainer = pointContainer;
    this.#handleDataChange = onDataChange;


  }

  init(point,city, offer) {

    this.#point = point;
    this.#city = city;
    this.#offer = offer;

    const prevPointComponent = this.#pointComponent;
    const prevPointFormComponent = this.#pointFormComponent;


    this.#pointComponent = new NewTripPoint({
        point: this.#point,
        city: this.#city,
        offer:this.#offer,
        onEditClick: this.#handleEditClick,
        onFavoriteClick: this.#handleFavoriteClick,
      });
   

    this.#pointFormComponent = new NewTripPointForm({
        point: this.#point,
        city: this.#city,
        offer:this.#offer,
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
    if (this.#pointContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointContainer.contains(prevPointFormComponent.element)) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);

   }

   #replacePointToForm() {
    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }
  
  #replaceFormToPoint() {
    replace(this.#pointComponent,this.#pointFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
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

