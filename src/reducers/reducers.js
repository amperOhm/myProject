import constants from "../actions/constants";

export default function reducer(state = {}, action) {
    if (action.type === constants.TEST_ACTION) {
        console.log('action.type : ' + action.type);
        return { ...state, data: { ...state.data, ...action.values } };

    }
    return state;
}