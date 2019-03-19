export const getElement = (container, selector) => (
  container.querySelector(selector)
);

export const getRandomInt = (min = 0, max = 2) => (
  Math.floor(Math.random() * (max + 1 - min)) + min
);

export const anyOf = (array, length = 0) => {
  const selectedValues = new Set();
  while (selectedValues.size <= length) {
    selectedValues.add(array[getRandomInt(0, array.length - 1)]);
  }
  return [...selectedValues];
};

export const renderElement = (parent, element, config = getRandomInt(3, 7)) => {
  const elementsQuantity = Array.isArray(config) ? config.length : config;
  for (let i = 0; i < elementsQuantity; i++) {
    parent.insertAdjacentHTML(
        `beforeend`,
        element(config[i])
    );
  }
};

export const createRandomConfigs = (config, quantity) => {
  const configs = [];
  for (let i = 0; i < quantity; i++) {
    configs.push(config());
  }
  return configs;
};

export const createElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper.firstChild;
};
