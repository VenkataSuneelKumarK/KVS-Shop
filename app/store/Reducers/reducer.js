/**
 * Created by kanamars on 07/10/19.
 */
const intialStore = {
  keyStrokes : "sun"
};
const reducer = (store = intialStore, action) =>{

    if(action.type === 'UPDATEKEYSTROKES'){
        return {
            ...store,
            keyStrokes: action.value
        }
    }

  return store;
};

export default reducer;