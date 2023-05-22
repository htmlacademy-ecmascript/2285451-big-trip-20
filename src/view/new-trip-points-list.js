import {createElement} from '../render.js';

import AbstractView from '../framework/view/abstract-view.js';

const createTripPointListTemplate = () => ('<ul class="trip-events__list"></ul>');

export default class NewTripPoinstList extends AbstractView {

  get template() {
    return createTripPointListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
