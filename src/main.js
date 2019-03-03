import {filterTemplate, pointTemplate} from './templates';

import {filters as filtersConfig} from './config';
import {getAllElements, getElement, renderElement} from './utils';

const filterWrapper = getElement(`.trip-filter`);
const dayItems = getElement(`.trip-day__items`);

const clearBoard = () => {
  dayItems.innerHTML = ``;
  renderElement(dayItems, pointTemplate);
};

renderElement(filterWrapper, filterTemplate, filtersConfig);
renderElement(dayItems, pointTemplate, 7);

const filterElement = getAllElements(`.trip-filter input`);

Array.from(filterElement).forEach((element) => {
  element.addEventListener(`click`, clearBoard);
});
