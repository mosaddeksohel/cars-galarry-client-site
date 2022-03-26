import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import carsReducrs from "./reducers/carReducers";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const rootReducers = combineReducers({
  carsReducrs,
});

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
