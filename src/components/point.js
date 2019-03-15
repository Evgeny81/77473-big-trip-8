import {createElement} from '../utils/utils';
import {pointTemplate} from '../templates';

export class Point {
  constructor(data) {
    this._type = data.type;
    this._icon = data.icon;
    this._price = data.price;
    this._timeHours = data.timeHours;
    this._timeMinutes = data.timeMinutes;
    this._element = null;
    this._onClick = null;
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
      .addEventListener(`click`, this._onClickWrapper.bind(this));
  }

  unrender() {
    this._element = null;
  }

  _unbind() {}

  get template() {
    const {
      _type: type,
      _icon: icon,
      _price: price,
      _timeHours: timeHours,
      _timeMinutes: timeMinutes
    } = this;
    return pointTemplate({type, icon, price, timeHours, timeMinutes});
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }
}
