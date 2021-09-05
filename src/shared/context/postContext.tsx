import * as React from 'react';
import { usePostData } from '../../hooks/usePostData';

export interface IPostContextData {
    postArray?: [];
}

export const postContext = React.createContext<IPostContextData>({});

export function PostContextProvider({ children }: { children: React.ReactNode; }) {
    const [data] = usePostData();

    return (
        <postContext.Provider value={data}>
            {children}
        </postContext.Provider>
    );
}
