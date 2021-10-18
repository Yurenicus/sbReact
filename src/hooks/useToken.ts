import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../store';

export function useToken() {
    // const [token, setToken] = React.useState('');
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        if (window.__token__) {
            // setToken(window.__token__);
            dispatch(setToken(token));
        }
    }, []);

    return [token];
}
