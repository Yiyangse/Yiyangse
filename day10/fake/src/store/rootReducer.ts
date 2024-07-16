import { Action } from 'redux';
import { AppState } from './AppState';

const initialAppState = {
  today: new Date(),
};

export const rootReducer = (
  prevstate: AppState = initialAppState,
  action: Actions
) => {
  switch (action.type) {
    case 'setToday': {
      return { ...state, today: action.today };
    }
  }
  return state;
};