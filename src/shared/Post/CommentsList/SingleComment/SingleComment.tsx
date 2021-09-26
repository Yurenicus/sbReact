import React from 'react';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { EColor, Text } from '../../../Text';
import { CommentsControls } from '../CommentsControls';
import { CommentsMeta } from '../CommentsMeta';
import styles from './singlecomment.scss';

export function SingleComment() {
  return (
    <div className={styles.comment}>
      <div className={styles.aside}>
        <KarmaCounter showCount={false} />
      </div>
      <div className={styles.content}>
        <CommentsMeta />
        <Text size={14} color={EColor.black}>
          Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
        </Text>
        <CommentsControls />
      </div>
      
    </div>
  );
}
