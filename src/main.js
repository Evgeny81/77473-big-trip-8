import {filterTemplate, pointTemplate} from './templates';
import {filtersConfig, pointsConfig} from './config';
import {createRandomConfigs, getAllElements, getElement, getRandomInt, renderElement} from './utils';

const filterWrapper = getElement(`.trip-filter`);
const dayItems = getElement(`.trip-day__items`);

const clearBoard = () => {
  dayItems.innerHTML = ``;
  renderElement(dayItems, pointTemplate, createRandomConfigs(pointsConfig, (getRandomInt(3, 7))));
};

renderElement(filterWrapper, filterTemplate, filtersConfig);
renderElement(dayItems, pointTemplate, createRandomConfigs(pointsConfig, 7));

const filterElement = getAllElements(`.trip-filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});
