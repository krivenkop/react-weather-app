import {
  ADD_TOWN,
  DEL_TOWN,
  SET_CURRENT_TOWN,
  SET_DEFAULT_TOWN,
  SET_WARN_TOWN_NAME,
  SET_WARN_NEVER
} from "../actionTypes";

let initialState = {
  towns: [],
  warnTownName: { condition: false, never: false },
  current: undefined,
  defaultTown: undefined
};

if (localStorage.getItem("mainStore")) {
  initialState = JSON.parse(localStorage.getItem("mainStore")).mainStore;
}

export default (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case ADD_TOWN:
      return Object.assign({}, state, {
        towns: [
          ...state.towns,
          {
            town: action.data.payload,
            origName: action.data.name,
            uniqueKey: action.data.name + "-" + Date.now()
          }
        ]
      });
    case SET_DEFAULT_TOWN:
      return {
        ...state,
        defaultTown: action.payload
      };
    case DEL_TOWN:
      return {
        ...state,
        towns: state.towns.filter(el => el.uniqueKey !== action.data.payload)
      };
    case SET_CURRENT_TOWN:
      return {
        ...state,
        current: action.payload
      };
    case SET_WARN_TOWN_NAME:
      if (state.warnTownName.never === false) {
        return {
          ...state,
          warnTownName: {
            ...state.warnTownName,
            condition: !state.warnTownName.condition
          }
        };
      } else {
        return { ...state };
      }
    case SET_WARN_NEVER:
      return {
        ...state,
        warnTownName: {
          never: true,
          condition: false
        }
      };

    default:
      return { ...state };
  }
};
