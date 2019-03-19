import openPointTemplate from '../templates/open-point';
import {createElement, getElement} from '../utils/utils';

export class OpenPoint {
  constructor(data) {
    this.description = data.description;
    this.offers = data.offers;
    this.price = data.price;
    this.picture = data.picture;
    this._element = null;
    this._onSubmit = null;
    this._onSubmitClick = this._onSubmitClick.bind(this);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  _bind() {
    getElement(this._element, `.point__button--save`)
      .addEventListener(`click`, this._onSubmitClick);
  }

  _unbind() {
    getElement(this._element, `.point__button--save`)
      .removeEventListener(`click`, this._onSubmitClick);
  }

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
    this._unbind();
    this._element = null;
  }
}
