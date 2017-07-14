import { PRIVATE_KEY, URL } from "../export/const";
import axios from "axios";
import store from "../index";

import { addTown, setWarnTownName } from "../actionTypes";

const fetchByName = name => {
  let request = `${URL}?q=${name}&units=metric&APPID=${PRIVATE_KEY}`;

  axios
    .get(request)
    .then(r => store.dispatch(addTown(r.data, name)))
    .catch(err => {
      store.dispatch(setWarnTownName());
    });
};

export default fetchByName;
