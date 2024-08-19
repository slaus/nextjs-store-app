import React from 'react';
import styles from '@/components/ui/flex.module.css';

const Flex = ({children, className}) => {
    return (
        <div className={`${className ? styles._ + " " + className : styles._}`}>
            {children}
        </div>
    );
};

export default Flex;