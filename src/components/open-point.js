import openPointTemplate from '../templates/open-point';
import {createElement} from '../utils/utils';

export class OpenPoint {
  constructor(data) {
    this.description = data.description;
    this.offers = data.offers;
    this.price = data.price;
    this.picture = data.picture;
    this._element = null;
    this._onSubmit = null;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  _bind() {
    this._element
      .addEventListener(`click`, this._onSubmitClick.bind(this));
  }

  _unbind() {}

  get element() {
    return this._element;
  }

  get template() {
    const {description, offers, price, picture} = this;
    return openPointTemplate({description, offers, price, picture});
  }

  render() {
    this._element = createElement(this.template);
    this._bind();
    return this._element;
  }

  unrender() {
    this._element = null;
  }
}
