const initialState = {
    backgroundColor: "FFFFFF",
bodyColor: "222222",
primaryColor: "F5B83B",
titleColor: "000000",

};

export default (state = initialState, action) => {
    
if (action.type === 'Onboarding_backgroundColor') {
    return {
        ...state,
        backgroundColor: action.payload,
    };
}

if (action.type === 'Onboarding_bodyColor') {
    return {
        ...state,
        bodyColor: action.payload,
    };
}

if (action.type === 'Onboarding_primaryColor') {
    return {
        ...state,
        primaryColor: action.payload,
    };
}

if (action.type === 'Onboarding_titleColor') {
    return {
        ...state,
        titleColor: action.payload,
    };
}


    return state;
};
            