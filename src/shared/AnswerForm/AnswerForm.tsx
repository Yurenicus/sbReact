import * as React from 'react';
import styles from './answerForm.scss';

interface ICommentForm {
  name?: string;
};

export function AnswerForm(props: ICommentForm) {
  const [value, setValue] = React.useState('');
  const ref = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.textContent = props.name ? props.name + ', ' : ''; // начальное значение передал через ref, т.к. если передать через стейт, то фокус ставится в начало строки
      ref.current.focus();
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  // для не управляемого компонента надо убрать стейты и написать defaultValue, данные забирать через ref

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={ref} />
      <button className={styles.button} type="submit">Комментировать</button>
    </form>
  );
}
