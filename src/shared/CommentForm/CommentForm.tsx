import * as React from 'react';
import styles from './commentForm.scss';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export function CommentForm({ value, onSubmit, onChange }: Props) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange} />
      <button className={styles.button} type="submit">Комментировать</button>
    </form>
  );
}
