import * as React from 'react';
import { userContext } from '../../context/userContext';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const {iconImg, name} = React.useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
