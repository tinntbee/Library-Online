import * as type from "../types"

export function signIn(user){
    return {
        type: type.SIGN_IN,
        payload: user,
    }
}

export function getUser(){
    return {
        type: type.GET_USER,
        payload: '',
    }
}
