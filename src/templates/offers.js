export default (value, price) => {
  const valueWithDashes = value.toLowerCase().split(` `).join(`-`);
  return `
    <input class="point__offers-input visually-hidden" type="checkbox" id=${valueWithDashes} name="offer" value=${valueWithDashes}>
    <label for=${valueWithDashes} class="point__offers-label">
      <span class="point__offer-service">${value}</span> + <span class="point__offer-price">${price}</span>
    </label>
  `;
};
