import * as React from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentForm.scss';

export function CommentForm() {
  const { value, onChange } = React.useContext(commentContext);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
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
