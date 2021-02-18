export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

//^^^tiene que ser igual lo que configuramos en action.type y el reducers type//