import {actions} from './actions'

const initialState = {
    brands: [],
    brand: null,
    models: [],
    model: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_BRANDS:
            return {...state, brands: action.value};
        case actions.SET_BRAND:
            return {...state, brand: action.value};
        case actions.SET_MODELS:
            return {...state, models: action.value};
        case actions.SET_MODEL:
            return {...state, model: action.value};
        default:
            return state;
    }
};

export default reducer;