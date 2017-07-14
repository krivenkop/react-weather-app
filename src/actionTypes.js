export const ADD_TOWN = "ADD_TOWN";
export const DEL_TOWN = "DEL_TOWN";

export const SET_CURRENT_TOWN = "SET_CURRENT_TOWN";
export const SET_DEFAULT_TOWN = "SET_DEFAULT_TOWN";

export const SET_WARN_TOWN_NAME = "SET_WARN_TOWN_NAME";
export const SET_WARN_NEVER = "SET_WARN_NEVER";

export function addTown(payload, name) {
  return {
    type: ADD_TOWN,
    data: {
      payload,
      name
    }
  }
}

export function delTown(payload) {
  return {
    type: DEL_TOWN,
    data: {
      payload
    }
  }
}

export function setCurrentTown(payload) {
  return {
    type: SET_CURRENT_TOWN,
    payload
  }
}

export function setDefaultTown(payload) {
  return {
    type: SET_DEFAULT_TOWN,
    payload
  }
}

export function setWarnTownName() {
  return {
    type: SET_WARN_TOWN_NAME
  }
}

export function setWarnNever() {
  return {
    type: SET_WARN_NEVER
  }
}
