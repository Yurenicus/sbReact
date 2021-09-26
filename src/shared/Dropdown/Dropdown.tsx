import * as React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styles from './dropdown.scss';

interface IDropdownProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    containerClass?: string;
    dropdownClass?: string;
    position: Object;
}

const NOOP = () => {};

export function Dropdown({ containerClass, dropdownClass, children, position, onClose = NOOP }: IDropdownProps) {
    // const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    // React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    // React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    // const handleOpen = () => {
    //     if (isOpen === undefined) {
    //         setIsDropdownOpen(!isDropdownOpen);
    //     }
    // }

    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    
    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.container} ref={ref} style={position}>
            <div className={containerClass}>
                <div className={dropdownClass}>
                    {children}
                </div>
            </div>
        </div>
    ), node);
}
