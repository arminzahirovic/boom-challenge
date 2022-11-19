import { ActionReducer } from '@ngrx/store';
import { merge, pick } from 'lodash';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
    const value = localStorage.getItem(localStorageKey);
    if (value) {
        return JSON.parse(value);
    }

    return;
}

const stateKeys = ['wins', 'losses'];
const localStorageKey = '__boom_challenge_storage__';

export function localStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  let onInit = true;
  return function(state, action) {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
