import * as React from 'react';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../../../store/token/actions';
import { IconAnon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './userblock.scss';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(saveToken());
  }, []);

  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=DzEa3n31F5ya7E6bvV4-BA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" 
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <IconAnon/>
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.grey99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
