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
    changeFavoriteIcon: ( name: string) => void;
    userName: (name: string) => void;
    logout: () => void;
}

export const AuthContext = createContext( {} as AuthContextProps ) 

export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({ type: 'SignIn' })
    }

    const changeFavoriteIcon = (name: string) =>{
        dispatch({ type: 'Favorite', payload: name})
    }

    const userName = (name: string) =>{
        dispatch({ type: 'username', payload: name})
    }

    const logout =() => {
        dispatch({ type: 'LogOut' })
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon,
            logout,
            userName
        }}>
            { children}
        </AuthContext.Provider>
    )
}



