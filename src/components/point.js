import {pointTemplate} from '../templates';
import Component from './component';

export class Point extends Component {
  constructor(data) {
    super();
    this.type = data.type;
    this.icon = data.icon;
    this.price = data.price;
    this.timeHours = data.timeHours;
    this.timeMinutes = data.timeMinutes;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this._onClick = null;
    this._onClickWrapper = this._onClickWrapper.bind(this);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  _onClickWrapper() {
    return typeof this._onClick === `function` && this._onClick();
  }

  bind() {
    this._element
      .addEventListener(`click`, this._onClickWrapper);
  }

  unbind() {
    this._element.removeEventListener(`click`, this._onClickWrapper);
  }

  get template() {
    const {
      type,
      icon,
      price,
      timeHours,
      timeMinutes,
      startDate,
      endDate
    } = this;
    return pointTemplate({type, icon, price, timeHours, timeMinutes, startDate, endDate});
  }
}
