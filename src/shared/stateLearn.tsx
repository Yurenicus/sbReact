import * as React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';
import styles from './stateLearn.scss';

interface IStarWarsNameClassState {
    name: string;
    count: number;
}
interface IStarWarsNameFunctionState {
    name: string;
    count: number;
}

export function StarWarsNameClass () {
    const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1});
    // const [name, setName] = React.useState(randomName); // S | () => S
    // const [count, setCount] = React.useState(0); // S | () => S
    // const handleClick = () => { 
    //     setName(randomName); 
    //     setCount((prevCount: number) => prevCount + 1);
    // };
    // console.log('>> ', count);

    const [state, setState] = React.useState<IStarWarsNameFunctionState>({name: randomName(), count: 0});
    const handleClick = () => {
        // setState((prevState) => ({name: randomName(), count: prevState.count + 1}));

        // для изменения состояний по одному нужно сделать spread всех состояний '...prevState':
        setState((prevState) => ({...prevState, name: randomName()}));
        setState((prevState) => ({...prevState, count: prevState.count + 1}));
    };
    console.log('>> ', state.count);
    
    return (
        <section className={styles.container}>
            <span className={styles.name}>{state.name}</span>
            <button className={styles.button} onClick={handleClick}>Имя</button>
        </section>
    );
}
// export class StarWarsNameClass extends React.Component<{}, IStarWarsNameClassState> {
//     state: Readonly<IStarWarsNameClassState> = {
//         name: this.randomName(),
//         count: 0
//     };

//     // constructor(props: {}) {
//     //     super(props);

//     //     this.state = {
//     //         name: '123'
//     //     };
//     // }
//     public render() {
//         return(
//             <section className={styles.container}>
//                 <span className={styles.name}>{this.state.name}</span>
//                 <button className={styles.button} onClick={this.handleClick}>Имя</button>
//             </section>
//         );
//     }

//     private handleClick = () => {
//         this.setState({name: this.randomName()});
//         this.setState((state, props) => ({ count: state.count + 1}), () => {console.log('>> ', this.state.count)})
//     }

//     private randomName(): string {
//         return uniqueNamesGenerator({ dictionaries: [starWars], length: 1});
//     }
// }
