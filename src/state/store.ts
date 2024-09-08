import {
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import {countriesReducer} from "./countriesReducer";

const rootReducer = combineReducers({
    countriesReducer: countriesReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

export default store;