
import NewTripPoinstList from '../view/trip-list.js';
import NewSortTrip from '../view/sort-trips.js';
import NewTripPoint from '../view/trip-point.js';
import NewTripPoinForm from '../view/new-point-form.js';

import {render} from '../render.js';
import {RenderPosition} from '../render.js';

export default class BoardPresenter {
  tripList = new NewTripPoinstList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripList, this.boardContainer);
    render(new NewSortTrip(), this.tripList.getElement(),RenderPosition.BEFOREBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new NewTripPoint(), this.tripList.getElement());
    }
    render(new NewTripPoinForm(), this.tripList.getElement(),RenderPosition.AFTERBEGIN);
  }
}
