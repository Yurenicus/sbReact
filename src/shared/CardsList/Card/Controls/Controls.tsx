import * as React from 'react';
import styles from './controls.scss';
import { Actions } from './Actions';
import { CommentsButton } from './CommentsButton';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
    return (
        <div className={styles.controls}>
            <KarmaCounter count={234} />
            <CommentsButton />
            <Actions />
        </div>
    );
}
