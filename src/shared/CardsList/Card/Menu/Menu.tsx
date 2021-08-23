import * as React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon, CommentsIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon } from '../../../Icons';
import { EIcons, Icon } from '../../../Icon';

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                containerClass={styles.dropdownHolder}
                dropdownClass={styles.dropdown}
                button={
                    <button className={styles.menuButton}>
                        <Icon name={EIcons.menu} size={31} />
                    </button>
                }
            >   
                <ul className={styles.list}>
                    <li>
                        <Icon name={EIcons.comments} size={14} />
                        <span>Комментарии</span>
                    </li>
                    <li>
                        <Icon name={EIcons.share} size={14} />
                        <span>Поделиться</span>
                    </li>
                    <li>
                        <Icon name={EIcons.block} size={14} />
                        <span>Скрыть</span>
                    </li>
                    <li>
                        <Icon name={EIcons.save} size={14} />
                        <span>Сохранить</span>
                    </li>
                    <li>
                        <Icon name={EIcons.warning} size={14} />
                        <span>Пожаловаться</span>
                    </li>
                </ul>
                <button className={styles.menuClose}>Закрыть</button>
            </Dropdown>
        </div>
    );
}
