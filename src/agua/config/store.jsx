import { createStore, combineReducers } from 'redux';
import Default from './themes/default';
import Onboarding from './themes/onboarding';
import Card from './themes/card';
import GreetingsTitle from './themes/greetingsTitle';
import SimpleStat from './themes/simpleStat';
import SignIn from './themes/signIn';
import IconBadge from './themes/iconBadge';

            
const reducers = combineReducers({
    Default,
Onboarding,
Card,
GreetingsTitle,
SimpleStat,
SignIn,
IconBadge,

});

const store = createStore(reducers);

export default (store);