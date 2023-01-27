import { ADD_HABBIT, DELETE_HABBIT, GET_LOCAL_DATA, UPDATE_APP_DAILY, UPDATE_HABBIT } from "../actions";
import { getLocalData, setLocalData, weekData } from "../components/utils/localData";

const INITIALSTATE = {
  habbits: [],
};

if (localStorage.getItem("localData") === null) {
  setLocalData(INITIALSTATE);
}

const reducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GET_LOCAL_DATA:
      state = getLocalData();
      return state;
    case ADD_HABBIT:
      state.habbits.push(action.payload);
      let id = action.payload.id;
      state[id] = weekData();
      setLocalData(state);

      state = getLocalData();
      return state;
    
    case UPDATE_APP_DAILY: 
      setLocalData(action.payload);
      state = getLocalData();
      return state;
    
    case UPDATE_HABBIT:
      setLocalData(action.payload);
      state = getLocalData();
      return state;
    
    case DELETE_HABBIT:
      setLocalData(action.payload);
      state = getLocalData();
      return state;
    default:
      return state;
  }
};

export default reducer;
