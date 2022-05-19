const signupFormReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_FIRSTNAME":
            return { ...state, firstName: payload }
        case "SET_LASTNAME":
            return { ...state, lastName: payload }
        case "SET_USERNAME":
            return { ...state, username: payload }
        case "SET_EMAIL":
            return { ...state, email: payload }
        case "SET_PASSWORD":
            return { ...state, password: payload }
        case "SET_CONFIRMPASSWORD":
            return { ...state, confirmPassword: payload }
        default:
            return state;
    }
}
export { signupFormReducer }