import React from 'react';
import styles from '@/components/ui/flex.module.css';

const FlexCol = ({children, className}) => {
    return (
        <div className={`${className ? styles._ + " " + styles.col + " " + className : styles._+ " " + styles.col}`}>
            {children}
        </div>
    );
};

export default FlexCol;