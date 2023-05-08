const initialState = {
    primaryColor: "F5B83B",

};

export default (state = initialState, action) => {
    
if (action.type === 'IconBadge_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}


    return state;
};
            