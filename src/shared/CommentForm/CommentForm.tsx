import { ErrorMessage, Field, Form, Formik, FormikHelpers, useFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';
import styles from './commentForm.scss';

// type Props = {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: React.FormEvent) => void;
// }

export function CommentForm() {
  return (
    <Formik
       initialValues={{ comment: '' }}
       validationSchema={Yup.object({
         comment: Yup.string()
           .min(4, 'Введите больше 3-х символов')
           .required('Введите больше 3-х символов')
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
    >
      <Form className={styles.form}>
        <Field className={styles.input} name="comment" as="textarea" />
        <ErrorMessage name="comment" />
        <button className={styles.button} type="submit">Комментировать</button>
      </Form>
    </Formik>
  );
  
  // const [value, setValue] = React.useState('');
  // const [touched, setTouched] = React.useState(false);
  // const [valueError, setValueError] = React.useState('');

  // function handleSubmit(event: React.FormEvent) {
  //   event.preventDefault();
  //   setTouched(true);
  //   setValueError(validateValue());

  //   const isFormValid = !validateValue();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена!');
  // }

  // function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  // }

  // function validateValue() {
  //   if (value.length <= 3) return 'Введите больше 3-х символов';
  //   return '';
  // }

  // return (
  //   <form className={styles.form} onSubmit={handleSubmit}>
  //     <textarea 
  //       className={styles.input} 
  //       value={value} 
  //       onChange={handleChange} 
  //       aria-invalid={valueError ? 'true' : undefined}
  //     />
  //     {touched && valueError && (<div>{valueError}</div>)}

  //     <button className={styles.button} type="submit">Комментировать</button>
  //   </form>
  // );
}
