const initialState = {
    bodyColor: "222222",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'GreetingsTitle_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'GreetingsTitle_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            