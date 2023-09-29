import styles from './Button.module.css';
import {ReactNode} from 'react';
interface Props {
    children: ReactNode;
    color: string;//'primary' | 'danger';
    onClick: () => void;
}

const Button = ({children, color, onClick} : Props) => {
    return (
        <button className={[styles.btn, styles['btn-'+ color]].join(" ")}  onClick={onClick}> {children}</button>
    );
}

export default Button;