export const reducer = (state, action) => {

  switch (action.type) {
    case "USER_SET":
      return { ...state, user: action.payload };
    case "TODOS_SET":
      return { ...state, todos: action.payload };
    default:
      return state;
  }

}