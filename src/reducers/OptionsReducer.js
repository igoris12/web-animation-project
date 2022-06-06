
const OptionsReducer = (state, action) => {
    switch (action) {
        case 'change':
            return state = action.deploy;
        default:
            return state
    }
}

export default OptionsReducer;