import * as React from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    containerClass?: string;
    dropdownClass?: string;
}

const NOOP = () => {};

export function Dropdown({ containerClass, dropdownClass, button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={containerClass}>
                    <div className={dropdownClass} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
