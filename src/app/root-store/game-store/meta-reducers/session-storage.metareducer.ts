import { ActionReducer } from "@ngrx/store";
import { merge, pick } from 'lodash';

function setSavedState(state: any, sessionStorageKey: string): void {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
}

function getSavedState(sessionStorageKey: string): any {
    const value = sessionStorage.getItem(sessionStorageKey);
    if (value) {
        return JSON.parse(value);
    }

    return;
}

const stateKeys = [
    'board',
    'inProgress',
    'isFinished',
    'boomsAround',
    'smileysAround',
    'consecutiveSmileys',
    'consecutiveBooms',
    'numberOfPlays',
    'result'

];
const sessionStorageKey = '__boom_challenge_storage__';

export function sessionStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  let onInit = true;
  return function(state, action) {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = getSavedState(sessionStorageKey);
      return merge(nextState, savedState);
    }

    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, sessionStorageKey);
    return nextState;
  };
}
