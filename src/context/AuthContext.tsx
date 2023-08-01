//import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer';

export interface AuthState{
    isLoggedIn: boolean;
    userName?:string;
    favoriteIcon?:string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
}


export const AuthContext = createContext( {} as AuthContextProps ) 

export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({ type: 'SignIn' })
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn
        }}>
            { children}
        </AuthContext.Provider>
    )
}



