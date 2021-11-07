import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { IUserData, meRequestAsync } from '../store/me/actions';
import { saveToken } from '../store/token/actions';

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const token = useSelector<RootState>(state => state.app.token);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(saveToken());
        if (!token) return;
        dispatch(meRequestAsync());
    }, [token]);

    return {
        data,
        loading
    };
}
