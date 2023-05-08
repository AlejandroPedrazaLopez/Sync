import { createStore, combineReducers } from 'redux';
import Default from './themes/default';
import Onboarding from './themes/onboarding';
import Card from './themes/card';
import GreetingsTitle from './themes/greetingsTitle';
import SimpleStat from './themes/simpleStat';
import SignIn from './themes/signIn';

            
const reducers = combineReducers({
    Default,
Onboarding,
Card,
GreetingsTitle,
SimpleStat,
SignIn,

});

const store = createStore(reducers);

export default (store);