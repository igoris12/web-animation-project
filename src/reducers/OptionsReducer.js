
const OptionsReducer = (state, action) => {
    switch (action.type) {
        case 'change':
            console.log(state);
            return state = action.deploy;
        default:
            return state
    }
}

export default OptionsReducer;