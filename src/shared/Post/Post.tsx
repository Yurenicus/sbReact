import * as React from 'react';
import ReactDOM from 'react-dom';
import { Controls } from '../CardsList/Card/Controls';
import { MetaData } from '../CardsList/Card/TextContent/MetaData';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsList } from './CommentsList';
import styles from './post.scss';

interface IPost {
  onClose?: () => void;
}

export function Post(props: IPost) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;
  
  return ReactDOM.createPortal(
    (
    <div className={styles.modal} ref={ref}>
      <div className={styles.header}>
        <div className={styles.headerControls}>
          <Controls />
        </div>
        <div className={styles.headerText}>
          <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
          <MetaData />
        </div>
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis repellendus aliquid accusantium porro sequi mollitia ipsum adipisci facere, natus magni veniam nobis, nisi architecto dolor dolorem excepturi ullam animi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis repellendus aliquid accusantium porro sequi mollitia ipsum adipisci facere, natus magni veniam nobis, nisi architecto dolor dolorem excepturi ullam animi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis repellendus aliquid accusantium porro sequi mollitia ipsum adipisci facere, natus magni veniam nobis, nisi architecto dolor dolorem excepturi ullam animi!</p>
      </div>
      <CommentFormContainer />
      <CommentsList />
    </div>
    ), node);
}
