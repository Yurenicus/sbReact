import * as React from 'react';
import styles from './card.scss';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Menu } from './Menu';
import { Controls } from './Controls';

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}
