const initialState = {
    backgroundColor: "FFFFFF",
bodyColor: "222222",
shadowColor: "AAAAAA",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'SimpleStat_backgroundColor') {
    return {
        ...state,
        backgroundColor: action.payload,
    };
}

if (action.type === 'SimpleStat_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'SimpleStat_shadowColor') {
    return {
        ...state,
        shadowColor: action.payload,
    };
}

if (action.type === 'SimpleStat_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            