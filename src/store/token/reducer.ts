import { Reducer } from "react";
import { SetTokenAction, SET_TOKEN } from "./actions";

export type SetTokenActions = SetTokenAction;

export const tokenReducer: Reducer<string, SetTokenActions> = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.token
            
        default:
            return state;
    }
};