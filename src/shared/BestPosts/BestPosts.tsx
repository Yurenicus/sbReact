import * as React from 'react';
import { postContext } from '../context/postContext';
import styles from './bestposts.scss';

export function BestPosts() {
    const data = React.useContext(postContext);
    const posts: [] = data.postArray ? data.postArray : [];

    return (
        <div className={styles.posts}>
            {posts.map(({ id, author, subreddit, title, permalink }) => (
                <div key={id} className={styles.post}>
                    <a href={'https://www.reddit.com'+ permalink} className={styles.title}>{title}</a>
                    <br />
                    <span>Author: {author}</span>
                    <br />
                    <span>Subreddit: {subreddit}</span>
                </div>
            ))}
        </div>
    );
}
