import React from 'react';
import styles from "@/components/checkout/checkout-form.module.css";
import { BiUser, BiPhone, BiMap, BiMapAlt, BiTime, BiChevronDown, BiMessage } from "react-icons/bi";
import SliderCheckbox from '@/components/ui/SliderCheckbox';
import { useDelivery, useDeliveryFee, useFormState } from '@/context/AppContext';
import { useForm } from "react-hook-form";
import { getFormValidations } from "../../helpers";
import ConfirmAlertModal from "@/components/others/ConfirmAlertModal";
import Overlay from '@/components/others/Overlay';
import Modal from '@/components/ui/Modal';

const CheckoutForm = () => {

    const { setFormState } = useFormState();
    const { delivery, setDelivery } = useDelivery();
    const { deliveryFee, setDeliveryFee } = useDeliveryFee();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
    const [showModal, setModal] = React.useState(false);
    const validations = getFormValidations();

    const onSubmit = (formState) => {
        setFormState(formState);
        setModal(true);
    };

    return (
        <>
            <div className={styles._}>
                <h3 className={styles.title}>Your Options</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.delivery}>
                        <div className={styles.label}>With Delivery?</div>
                        <SliderCheckbox />
                    </div>
                    <div className={`${styles.group} ${errors?.name ? styles.err : ''}`}>
                        <div className={styles.icon}>
                            <BiUser size={24} />
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={styles.input}
                            {...register("name", validations.name)}
                        />
                        {errors?.name && (
                            <p className={styles.error}>
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className={`${styles.group} ${errors?.phone ? styles.err : ''}`}>
                        <div className={styles.icon}>
                            <BiPhone size={24} />
                        </div>
                        <input
                            type="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className={styles.input}
                            {...register("phone", validations.phone)}
                        />
                        {errors?.phone && (
                            <p className={styles.error}>
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    {delivery &&
                        <>
                            <div className={`${styles.group} ${errors?.address ? styles.err : ''}`}>
                                <div className={styles.icon}>
                                    <BiMap size={24} />
                                </div>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Your Address"
                                    className={styles.input}
                                    {...register("address", validations.address)}
                                />
                                {errors?.address && (
                                    <p className={styles.error}>
                                        {errors.address.message}
                                    </p>
                                )}
                            </div>
                            <div className={`${styles.group} ${errors?.city ? styles.err : ''}`}>
                                <div className={styles.icon}>
                                    <BiMapAlt size={24} />
                                </div>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Your City"
                                    className={styles.input}
                                    {...register("city", validations.city)}
                                />
                                {errors?.city && (
                                    <p className={styles.error}>
                                        {errors.city.message}
                                    </p>
                                )}
                            </div>
                            <div className={`${styles.group} ${errors?.schedule ? styles.err : ''}`}>
                                <div className={styles.icon}>
                                    <BiTime size={24} />
                                </div>
                                <input
                                    type="text"
                                    name="schedule"
                                    placeholder="Chose a Schedule"
                                    className={styles.input}
                                    {...register("schedule", validations.schedule)}
                                />
                                {errors?.schedule && (
                                    <p className={styles.error}>
                                        {errors.schedule.message}
                                    </p>
                                )}
                            </div>
                        </>
                    }
                    <div className={`${styles.group} ${errors?.comment ? styles.err : ''}`}>
                        <div className={styles.icon}>
                            <BiMessage size={24} />
                        </div>
                        <input
                            type="text"
                            name="comment"
                            placeholder="Extra Comment"
                            className={styles.input}
                            {...register("comment", validations.comment)}
                        />
                        {errors?.comment && (
                            <p className={styles.error}>
                                {errors.comment.message}
                            </p>
                        )}
                    </div>
                    <button type="submit" className={styles.confirm}>Confirm</button>
                </form>
            </div>
            {showModal &&
                <Overlay>
                    <Modal setIsModalOpen={setModal}>
                        <ConfirmAlertModal showModal={showModal} setModal={setModal} />
                    </Modal>
                </Overlay>
            }
        </>
    );
};

export default CheckoutForm;