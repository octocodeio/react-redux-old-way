import ActionTypes from "../../constants/ActionTypes"

export function increment() {
    return {
        type: ActionTypes.INCREMENT
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function addUser(user) {
    return {
        type: "ADD_USER",
        payload: user
    }
}