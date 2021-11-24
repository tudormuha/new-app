export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const addAPI = (payload) => {
  return {
    type: "AddAPI",
    payload: payload,
  };
};
export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};