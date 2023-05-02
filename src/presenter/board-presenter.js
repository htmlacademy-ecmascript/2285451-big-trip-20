import {NUBER_OF_TRIPS} from '../const.js';
import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';
import NewTripPoint from '../view/new-trip-point.js';
import NewTripPoinForm from '../view/new-trip-point-form.js';

import {render} from '../render.js';
import {RenderPosition} from '../render.js';

export default class BoardPresenter {
  tripList = new NewTripPoinstList();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.tripList, this.boardContainer);
    render(new NewTripSort(), this.tripList.getElement(), RenderPosition.BEFOREBEGIN);

    for (let i = 0; i < NUBER_OF_TRIPS; i++) {
      render(new NewTripPoint(), this.tripList.getElement());
    }
    render(new NewTripPoinForm(), this.tripList.getElement(), RenderPosition.AFTERBEGIN);
  }
}
