import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
// import { saveToken } from '../store/token/actions';

export function useToken() {
    const token = useSelector<RootState, string>(state => state.app.token);
    // const dispatch = useDispatch();
    
    React.useEffect(() => {
        if (window.__token__) {
            // dispatch(saveToken());
        }
    }, []);

    return [token];
}
