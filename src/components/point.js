import {createElement} from '../utils/utils';
import {pointTemplate} from '../templates';

export class Point {
  constructor(data) {
    this._type = data.type;
    this._icon = data.icon;
    this._price = data.price;
    this._timeHours = data.timeHours;
    this._timeMinutes = data.timeMinutes;
    this._startDate = data.startDate;
    this._endDate = data.endDate;
    this._element = null;
    this._onClick = null;
    this._onClickWrapper = this._onClickWrapper.bind(this);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get element() {
    return this._element;
  }

  _onClickWrapper() {
    return typeof this._onClick === `function` && this._onClick();
  }

  _bind() {
    this._element
      .addEventListener(`click`, this._onClickWrapper);
  }

  unrender() {
    this._unbind();
    this._element = null;
  }

  _unbind() {
    this._element.removeEventListener(`click`, this._onClickWrapper);
  }

  get template() {
    const {
      _type: type,
      _icon: icon,
      _price: price,
      _timeHours: timeHours,
      _timeMinutes: timeMinutes,
      _startDate: startDate,
      _endDate: endDate
    } = this;
    return pointTemplate({type, icon, price, timeHours, timeMinutes, startDate, endDate});
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }
}
