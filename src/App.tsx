import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from './shared/context/postContext';
import { BestPosts } from './shared/BestPosts';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';


const store = createStore(rootReducer, composeWithDevTools())

function AppComponent() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);
