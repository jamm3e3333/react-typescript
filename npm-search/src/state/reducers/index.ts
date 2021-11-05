import { combineReducers } from "redux";
import repositoriesReducer from './repositories-reducer';

const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;

//ReturnType tells what kind of type the function will return -> <typeof <function> >
export type RootState = ReturnType<typeof reducers>;