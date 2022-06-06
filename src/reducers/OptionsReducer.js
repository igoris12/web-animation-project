
const OptionsReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.deploy }
        case 'CHANGE_ANIMATION':
            return { ...state, animation: action.deploy }
        default:
            return state
    }
}

export default OptionsReducer;