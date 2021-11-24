const api = (state={}, action) => {
    switch (action.type){
        case "AddAPI":
        return state = {...state, ...action.payload};
        default:
            return state;
    }
};

export default api;