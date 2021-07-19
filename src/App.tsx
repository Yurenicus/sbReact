import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
// import { assignId, generateId, generateRandomString } from './utils/react/generateRandomIndex';
// import { merge } from './utils/js/merge';
// import { GenericList } from './shared/GenericList';
// import { Dropdown } from './shared/Dropdown';

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                {/* <div style={{padding: 20}}>
                    <br/>
                    <Dropdown 
                        onClose={() => console.log('closed')}
                        onOpen={() => console.log('opened')}
                        // isOpen={false}
                        button={<button>test</button>}
                    >
                        <CardsList />
                    </Dropdown>
                </div> */}
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);
