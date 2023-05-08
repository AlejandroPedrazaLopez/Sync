const initialState = {
    backgroundColor: "FFFFFF",
bodyColor: "222222",
primaryColor: "F5B83B",
shadowColor: "AAAAAA",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'Card_backgroundColor') {
    return {
        ...state,
        backgroundColor: action.payload,
    };
}

if (action.type === 'Card_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'Card_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}

if (action.type === 'Card_shadowColor') {
    return {
        ...state,
        shadowColor: action.payload,
    };
}

if (action.type === 'Card_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            