import {createSelector} from 'reselect';

//v primer argument an array of input selectors, last arg a function that gets the return of the input selctor//
const selectUser = state => state.user;
export const selectCurrentUser =
createSelector(
  [selectUser],
  (user) => user.currentUser

);
