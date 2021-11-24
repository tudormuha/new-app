const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = true);

    case "SIGN_OUT":{

      localStorage.removeItem("token");
      return (state = false);

    }
      
    default:
      return state;
  }
};

export default loggedReducer;
