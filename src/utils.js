import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import relativeTime from'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.extend(duration);

const DATE_FORMAT = 'MMM DD';
const DATE_FROM_TO_FORMAT = 'HH:mm';
const DATE_INPUT_FORMAT = 'DD/MM/YYhh:mm';

const MILLSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MILLSEC_IN_HOUR = MILLSEC_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;
const MILLSEC_IN_DAY = MILLSEC_IN_HOUR * HOUR_IN_DAY;

const getArray = (items) => items;

const getCorrectDateFormat = (anyDate) => anyDate ? dayjs(anyDate).format(DATE_FORMAT) : '';

const getInputDateFormat = (anyDate) => anyDate ? dayjs(anyDate).format(DATE_INPUT_FORMAT) : '';

const getCorrectDateFromToFormat = (anyDate) => anyDate ? dayjs(anyDate).format(DATE_FROM_TO_FORMAT) : '';

function getDurationInPoint (dateFrom, dateTo) {
  const deltaTime = dayjs(dateTo).diff(dayjs(dateFrom));

  let durationInPoint = 0;

  switch(true){
    case (deltaTime >= MILLSEC_IN_DAY) : durationInPoint = dayjs.duration(deltaTime).format('DD[D] HH[H] mm[M]');
      break;
    case (deltaTime >= MILLSEC_IN_HOUR) : durationInPoint = dayjs.duration(deltaTime).format('HH[H] mm[M]');
      break;
    case (deltaTime < MILLSEC_IN_HOUR) : durationInPoint = dayjs.duration(deltaTime).format(' mm[M]');
      break;
  }
  return durationInPoint;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}


export {getArray, getCorrectDateFormat, getDurationInPoint, getCorrectDateFromToFormat,getInputDateFormat,updateItem };
