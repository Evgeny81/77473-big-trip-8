import openPointTemplate from '../templates/open-point';
import {getElement} from '../utils/utils';
import Component from './component';

export class OpenPoint extends Component {
  constructor(data) {
    super();
    this.description = data.description;
    this.offers = data.offers;
    this.price = data.price;
    this.picture = data.picture;
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

  bind() {
    getElement(this._element, `.point__button--save`)
      .addEventListener(`click`, this._onSubmitClick);
  }

  unbind() {
    getElement(this._element, `.point__button--save`)
      .removeEventListener(`click`, this._onSubmitClick);
  }

  get template() {
    const {description, offers, price, picture} = this;
    return openPointTemplate({description, offers, price, picture});
  }
}
