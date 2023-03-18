const cart = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {...state, total: action.payload}
        case "REMOVE_PRODUCT":
            return {...state, total: action.payload}
        default:
            return state
    }
}

export default cart