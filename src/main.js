import {OpenPoint} from './components/open-point';
import {Point} from './components/point';
import {filterTemplate, pointTemplate} from './templates';
import {filtersConfig, pointsConfig} from './config';
import {createRandomConfigs, getElement, getRandomInt, renderElement} from './utils/utils';

const filterWrapper = getElement(document, `.trip-filter`);
const dayItems = getElement(document, `.trip-day__items`);

const clearBoard = () => {
  dayItems.innerHTML = ``;
  renderElement(dayItems, pointTemplate, createRandomConfigs(pointsConfig, (getRandomInt(3, 7))));
};

renderElement(filterWrapper, filterTemplate, filtersConfig);

filterWrapper.addEventListener(`click`, clearBoard);

const point = new Point(pointsConfig());
const openPoint = new OpenPoint(pointsConfig());
dayItems.appendChild(point.render());

point.onClick = () => {
  openPoint.render();
  dayItems.replaceChild(openPoint.element, point.element);
  point.unrender();
};

openPoint.onSubmit = () => {
  point.render();
  dayItems.replaceChild(point.element, openPoint.element);
  openPoint.unrender();
};
