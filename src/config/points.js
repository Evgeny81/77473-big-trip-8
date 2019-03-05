import {anyOf, getRandomInt} from '../utils';

export default () => ({
  type: anyOf([`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `checkin`, `sightseeing`, `restaurant`]).join(``),
  icon: {
    taxi: `🚕`,
    bus: `🚌`,
    train: `🚂`,
    ship: `🛳️`,
    transport: `🚊`,
    drive: `🚗`,
    flight: `✈`,
    checkin: `🏨`,
    sightseeing: `🏛`,
    restaurant: `🍴`
  },
  picture: `http://picsum.photos/300/150?r=${Math.random()}`,
  offer: anyOf([`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`], getRandomInt()),
  description: anyOf([`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`], getRandomInt(1, 3)).join(``),
  date: Date.now() + getRandomInt(0, 7) * 24 * 60 * 60 * 1000 * getRandomInt(-1, 2),
  duration: getRandomInt(0, 5),
  price: `$ ${getRandomInt(1, 200)}`,
  timeHours: `${getRandomInt(0, 11)}h`,
  timeMinutes: `${getRandomInt(0, 59)}m`
});
