import * as React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
// import { MenuIcon, CommentsIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon } from '../../../Icons';
import { EIcons, Icon } from '../../../Icon';

export function Menu() {
    const [isDropdownOpened, setIsDropdownOpened] = React.useState(false);

    // find button position for correct dropdown style
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const buttonEl = btnRef.current;
    const buttonRect = buttonEl ? buttonEl.getBoundingClientRect() : null;
    const position = buttonRect ? {
        top: buttonRect.top,
        left: buttonRect.left + (buttonRect.width / 2)
    } : {};

    return (
        <div className={styles.menu}>
            <button className={styles.menuButton} onClick={() => { setIsDropdownOpened(true); }} ref={btnRef}>
                <Icon name={EIcons.menu} size={31} />
            </button>
            {isDropdownOpened && (
                <Dropdown
                    containerClass={styles.dropdownHolder}
                    dropdownClass={styles.dropdown}
                    onClose={() => { setIsDropdownOpened(false); }}
                    position={position}
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
                    <button className={styles.menuClose} onClick={() => { setIsDropdownOpened(false); }}>Закрыть</button>
                </Dropdown>
            )}
        </div>
    );
}
