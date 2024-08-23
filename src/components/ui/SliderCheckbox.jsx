import React, { useState } from 'react';
import styles from "@/components/ui/slider-checkbox.module.css";
import {useDelivery, useDeliveryFee} from '@/context/AppContext';

const SliderCheckbox = () => {

  const { delivery, setDelivery } = useDelivery();
  const { deliveryFee, setDeliveryFee } = useDeliveryFee();
  const [checked, setChecked] = useState(delivery);
  console.log("delivery " + deliveryFee);

  const toggleChecked = () => {
    setChecked(!checked);
    setDelivery(!delivery);
  };

  return (
    <div
      className={`${styles.slider} ${checked ? styles.checked : ''}`}
      onClick={toggleChecked}
    >
      <div className={styles.circle}></div>
    </div>
  );
};

export default SliderCheckbox;
