import * as React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  // const {iconImg, name} = React.useContext(userContext)
  const { data, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}
