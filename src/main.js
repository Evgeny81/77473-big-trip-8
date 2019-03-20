import {filterTemplate} from './templates';
import {filtersConfig, pointsConfig} from './config';
import {clearBoard, createPoint, getElement, getRandomInt, renderElement} from './utils/utils';

const filterWrapper = getElement(document, `.trip-filter`);
const dayItems = getElement(document, `.trip-day__items`);

renderElement(filterWrapper, filterTemplate, filtersConfig);

filterWrapper.addEventListener(`click`, () => {
  clearBoard(dayItems);
  for (let i = 0; i < getRandomInt(3, 7); i++) {
    createPoint(dayItems, pointsConfig);
  }
});

createPoint(dayItems, pointsConfig);
