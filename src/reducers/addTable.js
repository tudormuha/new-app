const table = (state={first: {user: "Tudor"}}, action) => {
    switch (action.type){
        case "AddTable":
        return state = {...state, ...action.payload};
        default:
            return state;
    }
};

export default table;