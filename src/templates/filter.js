export default function ({checked, label}) {
  const lowercasedLabel = label.toLowerCase();
  return `<input
            type="radio"  
            id="filter-${lowercasedLabel}"
            name="filter" 
            value=${lowercasedLabel} 
            ${checked && `checked`}
          >
          <label
            class="trip-filter__item"
            for="filter-${lowercasedLabel}">
            ${label.toUpperCase()}
          </label>
  `;
}
