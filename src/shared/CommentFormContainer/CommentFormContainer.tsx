import * as React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentForm } from '../CommentForm';

export function CommentFormContainer() {
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
    <CommentForm    
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
  );
}
