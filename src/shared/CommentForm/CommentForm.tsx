import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';
import styles from './commentForm.scss';

export function CommentForm() {
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;

  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment( event.target.value));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button className={styles.button} type="submit">Комментировать</button>
    </form>
  );
}
