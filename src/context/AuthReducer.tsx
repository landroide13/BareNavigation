import { AuthState } from "./AuthContext";

type AuthAction = { type: 'SignIn'}

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState =>{
    
    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'No Doe'
            }
            break;
    
        default:
            return state;
    }
}





