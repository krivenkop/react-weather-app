import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import reducers from "./reducers";
import { PRIVATE_KEY, URL } from "./export/const";
import { setDefaultTown } from "./actionTypes";
import { createStore } from "redux";
import "./index.css";
import Main from "./containers/Main";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

const store = createStore(reducers, {});

export default store;

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

let unsubscribe = store.subscribe(() => {
  localStorage.setItem('mainStore', JSON.stringify(store.getState()));
  console.log('Store updated: ', store.getState())
})

navigator.geolocation.getCurrentPosition(
  pos => {
    let request = `${URL}?lat=${pos.coords.latitude}&lon=${pos.coords
      .longitude}&units=metric&APPID=${PRIVATE_KEY}`;
    axios
      .get(request)
      .then(res => {
        store.dispatch(setDefaultTown(res.data));
      })
  },
  err => {
    let request = `${URL}?q=Kiev&units=metric&APPID=${PRIVATE_KEY}`;
    axios.get(request).then(res => {
      store.dispatch(setDefaultTown(res.data));
    });
  }
);
