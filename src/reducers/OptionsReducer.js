
const OptionsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.deploy }
        default:
            return state
    }
}

export default OptionsReducer;