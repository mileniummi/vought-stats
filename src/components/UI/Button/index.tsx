import React, {ReactNode} from 'react';
import styles from "./index.module.css"
import classNames from "classnames";

interface ButtonProps {
    children: ReactNode | string
    onClick?: () => void
    variant?: "default" | "white"
}

const Button: React.FC<ButtonProps> = ({children, onClick, variant}) => {
    return (
        <button onClick={onClick} className={classNames(styles.button, variant === "white" && styles.white)}>
            {children}
        </button>
    );
};

export default Button;