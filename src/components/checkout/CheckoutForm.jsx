import React from 'react';
import styles from "@/components/checkout/checkout-form.module.css";
import { BiUser, BiPhone, BiMap, BiMapAlt, BiTime, BiChevronDown, BiMessage } from "react-icons/bi";
import SliderCheckbox from '@/components/ui/SliderCheckbox';
import { useDelivery, useDeliveryFee } from '@/context/AppContext';

const CheckoutForm = () => {

    const { delivery, setDelivery } = useDelivery();
    const { deliveryFee, setDeliveryFee } = useDeliveryFee();

    return (
        <div className={styles._}>
            <h3 className={styles.title}>Your Options</h3>
            <form className={styles.form}>
                <div className={styles.delivery}>
                    <div className={styles.label}>With Delivery?</div>
                    <SliderCheckbox />
                </div>
                <div className={styles.group}>
                    <div className={styles.icon}>
                        <BiUser size={24} />
                    </div>
                    <input type="text" name="name" placeholder="Your Name" className={styles.input} />
                </div>
                <div className={styles.group}>
                    <div className={styles.icon}>
                        <BiPhone size={24} />
                    </div>
                    <input type="phone" name="phone" placeholder="Phone Number" className={styles.input} />
                </div>
                {delivery &&
                    <>
                        <div className={styles.group}>
                            <div className={styles.icon}>
                                <BiMap size={24} />
                            </div>
                            <input type="text" name="address" placeholder="Your Address" className={styles.input} />
                        </div>
                        <div className={styles.group}>
                            <div className={styles.icon}>
                                <BiMapAlt size={24} />
                            </div>
                            <input type="text" name="city" placeholder="Your City" className={styles.input} />
                        </div>
                        <div className={styles.group}>
                            <div className={styles.icon}>
                                <BiTime size={24} />
                            </div>
                            <input type="text" name="schedule" placeholder="Chose a Schedule" className={styles.input} />
                        </div>
                    </>
                }
                <div className={styles.group}>
                    <div className={styles.icon}>
                        <BiMessage size={24} />
                    </div>
                    <input type="text" name="comment" placeholder="Extra Comment" className={styles.input} />
                </div>
                <button type="submit" className={styles.confirm}>Confirm</button>
            </form>
        </div>
    );
};

export default CheckoutForm;