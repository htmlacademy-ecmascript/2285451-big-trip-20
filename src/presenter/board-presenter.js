import {NUBER_OF_TRIPS} from '../const.js';
import NewTripPoinstList from '../view/new-trip-points-list.js';
import NewTripSort from '../view/new-trip-sort.js';
import NewTripPoint from '../view/new-trip-point.js';
import NewTripPoinForm from '../view/new-trip-point-form.js';

import {render} from '../render.js';
import {RenderPosition} from '../render.js';

export default class BoardPresenter {
  tripList = new NewTripPoinstList();

  constructor({boardContainer, tasksModel, sityModel}) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
    this.sityModel = sityModel;
    
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];
    this.boardSities = [...this.sityModel.getTasks()];
    console.log(this.boardSities);


    render(this.tripList, this.boardContainer);
    render(new NewTripSort(), this.tripList.getElement(), RenderPosition.BEFOREBEGIN);

    for (let i = 0; i < this.boardTasks.length; i++) {
     render(new NewTripPoint({task: this.boardTasks[i]}), this.tripList.getElement());
     
       for (let k = 0; k < this.boardSities.length; k++){
        if(this.boardTasks[i].id === this.boardSities[k].id){
      
          render(new NewTripPoint({task: this.boardTasks[i], set: this.boardSities[k]}), this.tripList.getElement());
       
      }
 
       }
    }

    // for (let i = 0; i < this.boardSities.length; i++) {
    //   render(new NewTripPoint({sity:this.boardSities[i]}), this.tripList.getElement());   
    // }

     
    render(new NewTripPoinForm(), this.tripList.getElement(), RenderPosition.AFTERBEGIN);
  }
}
