import * as React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostData {
    postArray?: [];
}

interface IPostObj {
    obj: Object;
    data: Object;
}

export function usePostData() {
    const [data, setData] = React.useState<IPostData>({});
    const token = React.useContext(tokenContext);

    React.useEffect(() => {
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
