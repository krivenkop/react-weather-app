import { PRIVATE_KEY, URL } from "../export/const";
import axios from "axios";
import store from "../index";

import { addTown, setWarnTownName } from "../actionTypes";

var cyrillicToTranslit = require('cyrillic-to-translit-js');

const fetchByName = name => {

  let request = `${URL}?q=${cyrillicToTranslit().transform(name)}&units=metric&APPID=${PRIVATE_KEY}`;

  axios
    .get(request)
    .then(r => store.dispatch(addTown(r.data, name)))
    .catch(err => {
      store.dispatch(setWarnTownName());
    });
};

export default fetchByName;
