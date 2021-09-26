import * as React from 'react';
import { AnswerForm } from '../../../AnswerForm';
import { EIcons, Icon } from '../../../Icon';
import styles from './commentscontrols.scss';

export function CommentsControls() {
  const [isCommentOpened, setIsCommentOpened] = React.useState(false);

  function handleClick() {
    setIsCommentOpened(true);
  }

  // тестовая переменная, т.к. нет юзеров для передачи
  const name = 'Вася Пупкин';

  return (
    <div className={styles.controls}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleClick}>
          <Icon name={EIcons.comments} size={14} />
          <span>Ответить</span>
        </button>
        <button className={styles.button}>
          <Icon name={EIcons.share} size={14} />
          <span>Поделиться</span>
        </button>
        <button className={styles.button}>
          <Icon name={EIcons.warning} size={14} />
          <span>Пожаловаться</span>
        </button>
      </div>
      {isCommentOpened && 
        <div className={styles.comment}>
          <AnswerForm name={name} />
        </div>
      }  
    </div>
  );
}
