const auth = (state, action) => {
    switch(action.type){
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload.accessToken)
            return {...state, name:action.payload.username, email:action.payload.email, id:action.payload.id,
                is_authenticated:true, is_admin:action.payload.is_admin}
        case "LOG_OUT":
            localStorage.removeItem('token')
            return {...state, name:"", email:"", is_authenticated:false}
        case "USER_LOADED":
            return {...state, name:action.payload.username, email:action.payload.email, id: action.payload.id,
                is_authenticated:true, is_admin: action.payload.is_admin}
        case "LOADING_ON":
            return {...state, is_loading: true}
        case "LOADING_OFF":
            return {...state, is_loading: false}

        default:
            return state
    }
}

export default auth