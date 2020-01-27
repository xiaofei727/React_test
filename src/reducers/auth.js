const initialState = {
    isAuthenticated: false
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}