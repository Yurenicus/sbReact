import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { EColor, Text } from './shared/Text';
import { EIcons, Icon } from './shared/Icon';
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
                {/* <br />
                <Text size={20}>ololol</Text>
                <Text As={'h1'} size={28} color={EColor.orange}>trololo</Text>
                <Text size={20} color={EColor.green}>whoopwhoopwhoop</Text>
                <Icon name={EIcons.block} size={28} /> */}
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);
