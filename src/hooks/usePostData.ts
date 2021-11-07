import * as React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface IPostData {
    postArray?: [];
}

interface IPostObj {
    obj: Object;
    data: Object;
}

export function usePostData() {
    const [data, setData] = React.useState<IPostData>({});
    const token = useSelector<RootState>(state => state.app.token);

    React.useEffect(() => {
        if (!token) return;
        axios.get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const postData = resp.data.data ? resp.data.data.children.map((obj: IPostObj) => obj.data) : [];
            setData({ postArray: postData ? postData : [] });
        })
        .catch(console.log);
    }, []);

    return [data];
}
