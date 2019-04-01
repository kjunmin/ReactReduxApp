import { LOAD_BUS_SCHEDULE } from "../constants/action-types";

const initialState = {
    busDetails: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_BUS_SCHEDULE:
            return Object.assign({}, state, {
                busDetails: action.payload
            })
        default: 
            return state;
    }
};

export default rootReducer;