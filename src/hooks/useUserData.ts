import * as React from 'react';
import axios from 'axios';
import { useToken } from './useToken';

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = React.useState<IUserData>({});
    const [token] = useToken();

    React.useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            setData({ name: userData.name, iconImg: userData.icon_img });
        })
        .catch(console.log);
    }, [token]);

    return [data];
}
