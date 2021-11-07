import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token
});

export const saveToken = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch, getState) => {
  let token = getState().app.token;
  let localToken: string | undefined | null = localStorage.getItem(
    "token"
  );
  let externalToken: string | undefined | null = window.__token__;

  if (!token) {
    if (
      localToken !== null &&
      localToken !== "undefined" &&
      localToken !== undefined
    ) {
      dispatch(setToken(localToken));
    } else if (
      externalToken !== null &&
      externalToken !== "undefined" &&
      externalToken !== undefined
    ) {
      localStorage.setItem("token", `${window.__token__}`);
      dispatch(setToken(externalToken));
    }
  }
};
