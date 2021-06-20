import * as React from 'react';
import styles from './preview.scss';

export function Preview() {
    return (
        <div className={styles.preview}>
            <img src="https://cdn.dribbble.com/users/59947/screenshots/15845445/media/4f2038e9507843484963aac5f0467a68.jpg" alt="" className={styles.previewImg} />
        </div>
    );
}
