const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return !state;
    default:
      return state;
  };
};

export default isLoginReducer;