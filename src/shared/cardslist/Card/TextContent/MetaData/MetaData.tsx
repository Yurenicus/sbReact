import * as React from 'react';
import styles from './metadata.scss';

export function MetaData() {
    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                <img src="https://cdn.dribbble.com/users/721278/avatars/mini/a18e0aaffda22ab6beca8ae4dda36375.jpeg" alt="avatar" className={styles.avatar} />
                <a href="#user-url" className={styles.username}>Вася Пупкин</a>
            </div>
            <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано </span>
                4 часа назад
            </span>
        </div>
    );
}
