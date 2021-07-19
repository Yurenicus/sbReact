import * as React from 'react';
import styles from './textcontent.scss';
import { MetaData } from './MetaData';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <MetaData />
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельности поможет</a>
            </h2>
        </div>
    );
}
