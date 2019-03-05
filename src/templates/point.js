import {getRandomInt} from '../utils';

export default ({type, icon, price, timeHours, timeMinutes}) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setHours(getRandomInt(0, 23));
  startDate.setMinutes(getRandomInt(0, 59));
  endDate.setHours(startDate.getHours() + parseInt(timeHours, 10));
  endDate.setMinutes(startDate.getMinutes() + parseInt(timeMinutes, 10));
  return `<article class="trip-point">
          <i class="trip-icon">${icon[type]}</i>
          <h3 class="trip-point__title">${type}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${startDate.getHours()}:${startDate.getMinutes()}&nbsp;&mdash; ${endDate.getHours()}:${endDate.getMinutes()}</span>
            <span class="trip-point__duration">${timeHours} ${timeMinutes}</span>
          </p>
          <p class="trip-point__price">${price}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">Order UBER +&euro;&nbsp;20</button>
            </li>
            <li>
              <button class="trip-point__offer">Upgrade to business +&euro;&nbsp;20</button>
            </li>
          </ul>
        </article>
  `;
};
