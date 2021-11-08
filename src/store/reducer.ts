import { useDispatch } from "react-redux";
import { ActionCreator, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
// import { saveToken, SetTokenAction, SET_TOKEN } from "./token/actions";
// import { SetTokenAction, SET_TOKEN } from "./token/actions";
import { tokenReducer, TokenState } from "./token/reducer";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text
});

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token
});

const initialState: RootState = {
    commentText: 'Тестовый текст',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
};

type MyAction = UpdateCommentAction
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT: 
            return {
                ...state,
                commentText: action.text,
            };
        
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }
};
