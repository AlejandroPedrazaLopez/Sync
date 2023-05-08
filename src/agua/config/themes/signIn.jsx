const initialState = {
    backgroundColor: "FFFFFF",
primaryColor: "F5B83B",
shadowColor: "AAAAAA",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'SignIn_backgroundColor') {
    return {
        ...state,
        backgroundColor: action.payload,
    };
}

if (action.type === 'SignIn_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}

if (action.type === 'SignIn_shadowColor') {
    return {
        ...state,
        shadowColor: action.payload,
    };
}

if (action.type === 'SignIn_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            