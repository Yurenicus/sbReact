import * as React from 'react';
import styles from './commentslist.scss';
import { SingleComment } from './SingleComment';

export function CommentsList() {
  return (
    <div className={styles.commentsList}>
      <SingleComment />
    </div>
  );
}
