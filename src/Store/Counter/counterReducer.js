
const intialState = {
    counter: 0
}

function counterReducer(state = intialState, action) {

    switch (action.type) {
        case "CLICK_TO_INCREMENT": {
            return {
                ...state,
                counter: state.counter + 1
            }
        };
        case "CLICK_TO_DECREMENT": {
            return {
                ...state,
                counter: state.counter - 1
            }
        };

        default:
            return state;
    }
}

export default counterReducer;