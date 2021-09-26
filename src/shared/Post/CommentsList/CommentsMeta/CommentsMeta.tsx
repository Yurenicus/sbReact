import * as React from 'react';
import styles from './commentsmeta.scss';

export function CommentsMeta() {
    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                <img src="https://cdn.dribbble.com/users/721278/avatars/mini/a18e0aaffda22ab6beca8ae4dda36375.jpeg" alt="avatar" className={styles.avatar} />
                <a href="#user-url" className={styles.username}>Вася Пупкин</a>
            </div>
            <span className={styles.createdAt}>
                4 часа назад
            </span>
            <span className={styles.leagueLabel}>Лига юристов</span>
        </div>
    );
}
