/* eslint-disable camelcase */
import * as language from 'constants/language';
import translationEN from './en/translation.json';
import translationZH from './zh/translation.json';
import translationZH_TW from './zh-tw/translation.json';

console.log(language);

export const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
  'zh-tw': {
    translation: translationZH_TW,
  },
};
