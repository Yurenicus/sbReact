import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { BestPosts } from './shared/BestPosts';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';
// import { setToken } from './store/token/actions';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

function AppComponent() {
    React.useEffect(() => {
        // const token = localStorage.getItem('token') || window.__token__;
        // store.dispatch(setToken(token));
    }, []);

    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <CardsList />
                    <BestPosts />
                </Content>
            </Layout>
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);
