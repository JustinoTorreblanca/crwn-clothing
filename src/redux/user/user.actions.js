import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

//^^^tiene que ser igual lo que configuramos en action.type y el reducers type//