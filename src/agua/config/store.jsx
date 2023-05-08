import { createStore, combineReducers } from 'redux';
import Default from './themes/default';
import Onboarding from './themes/onboarding';

            
const reducers = combineReducers({
    Default,
Onboarding,

});

const store = createStore(reducers);

export default (store);