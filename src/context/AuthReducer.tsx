import { AuthState } from "./AuthContext";

type AuthAction = | { type: 'SignIn'}
                  | { type: 'LogOut'}
                  | { type: 'Favorite', payload: string }
                  | { type: 'username', payload: string }

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState =>{
    
    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'No Doe'
            }
            break;
        case 'LogOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: 'No Doe'
            }
            break;    
        case 'Favorite':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'username':
            return {
                ...state,
                userName: action.payload
            }        
        default:
            return state;
    }
}





