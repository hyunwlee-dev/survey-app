import { LOCALSTORAGGE_KEY } from '@constants';
import type { SurveyInfo } from '@types';

export default class LocalStorage {
  private key = LOCALSTORAGGE_KEY;

  save(surveyInfo: SurveyInfo) {
    localStorage.setItem(this.key, JSON.stringify(surveyInfo));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  remove() {
    return localStorage.removeItem(this.key);
  }
}
