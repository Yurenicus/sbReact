import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from './shared/context/postContext';
import { BestPosts } from './shared/BestPosts';

function AppComponent() {
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header />
                    <Content>
                        <PostContextProvider>
                            <CardsList />
                            <BestPosts />
                        </PostContextProvider>
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />);
