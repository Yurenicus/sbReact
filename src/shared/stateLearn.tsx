import * as React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './stateLearn.scss';

interface IStarWarsNameClassState {
    name: string;
    count: number;
}

export class StarWarsNameClass extends React.Component<{}, IStarWarsNameClassState> {
    state: Readonly<IStarWarsNameClassState> = {
        name: this.randomName(),
        count: 0
    };

    // constructor(props: {}) {
    //     super(props);

    //     this.state = {
    //         name: '123'
    //     };
    // }
    public render() {
        return(
            <section className={styles.container}>
                <span className={styles.name}>{this.state.name}</span>
                <button className={styles.button} onClick={this.handleClick}>Имя</button>
            </section>
        );
    }

    private handleClick = () => {
        this.setState({name: this.randomName()});
        this.setState((state, props) => ({ count: state.count + 1}), () => {console.log('>> ', this.state.count)})
    }

    private randomName(): string {
        return uniqueNamesGenerator({ dictionaries: [starWars], length: 1});
    }
}
