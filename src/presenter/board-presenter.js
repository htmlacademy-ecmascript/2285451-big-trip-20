import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';
import NewTripPoint from '../view/new-trip-point.js';
import NewTripPoinForm from '../view/new-trip-point-form.js';

import {render} from '../render.js';
import {RenderPosition} from '../render.js';

export default class BoardPresenter {
  tripList = new NewTripPoinstList();

  constructor({boardContainer, pointsModel, destinationsModel, offersModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.boardCities = [...this.destinationsModel.getDestinations()];
    this.boardOffers = [...this.offersModel.getOffers()];

    render(this.tripList, this.boardContainer);
    render(new NewTripSort(), this.tripList.getElement(), RenderPosition.BEFOREBEGIN);

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new NewTripPoint({point: this.boardPoints[i], city: this.boardCities.find((item) => item.id === this.boardPoints[i].destination),
        offer: this.boardOffers.find((item) => item.type === this.boardPoints[i].type) }), this.tripList.getElement());
    }
    render(new NewTripPoinForm({point: this.boardPoints[1], city: this.boardCities.find((item) => item.id === this.boardPoints[1].destination),
      offer: this.boardOffers.find((item) => item.type === this.boardPoints[1].type)}), this.tripList.getElement(), RenderPosition.AFTERBEGIN);
  }
}
