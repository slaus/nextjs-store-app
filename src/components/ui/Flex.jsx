import React from 'react';
import styles from '@/components/ui/flex.module.css';

const Flex = ({children, className="", style}) => {

    const combinedClassName = className.split(' ').map((cls) => styles[cls]).join(' ');

    return (
        <div className={`${styles._} ${combinedClassName}`} style={style}>
            {children}
        </div>
    );
};

export default Flex;