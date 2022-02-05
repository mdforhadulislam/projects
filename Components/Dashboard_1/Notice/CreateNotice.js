import React from 'react';
import styles from './CreateNotice.module.css';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
const CreateNotice = ({ setIsTrue, setData, dataForm }) => {
    const position = ['Managing Director', 'CEO', 'Managing'];
    const [isDropDown, setIsDropDown] = React.useState(false);
    const [isDropDownValue, setIsDropDownValue] = React.useState('');
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setIsTrue(false);
            setData([...dataForm, data]);
        }
    };

    return (
        <form
            className={styles.create_new_notice_section}
            id={styles.create_new_notice_section}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.create_new_notice_container}>
                {/* <!__ NOTICE CREATE DATE START __> */}
                <div className={styles.create_note_date_section}>
                    <div className={styles.create_note_date}>
                        <h6>Select Date</h6>

                        <div className={styles.note_date_input}>
                            <input
                                type="date"
                                defaultValue="2021_09_11"
                                id={styles.note_date}
                                {...register('data')}
                            />
                            <div className={styles.calender_icon}></div>
                        </div>
                    </div>
                </div>
                {/* <!__ NOTICE CREATE DATE END __>

    <!__ NOTICE CREATE DATE START __> */}
                <div className={styles.create_note_info_section}>
                    <h6>Id/record number</h6>
                    <input type="text" {...register('id', { required: true })} />
                    {errors.id && <span>This field is required</span>}
                </div>
                {/* <!__ NOTICE CREATE DATE END __>

    <!__ NOTICE CREATE SUBJECT START __> */}
                <div className={styles.create_note_subject_section}>
                    <h6>Subject</h6>
                    <input type="text" {...register('subject', { required: true })} />
                    {errors.subject && <span>This field is required</span>}
                </div>
                {/* <!__ NOTICE CREATE SUBJECT END __>

    <!__ NOTICE CREATE TEXT START __> */}
                <div className={styles.create_note_text_section}>
                    <h6>Describe Your Notice</h6>
                    <textarea placeholder="Type Your Notice..." {...register('notice')}></textarea>
                </div>
                {/* <!__ NOTICE CREATE TEXT END __>

    <!__ NOTICE CREATE FOOTER START __> */}
                <div className={styles.create_note_footer_section}>
                    <div className={styles.create_note_footer}>
                        <h6>Enter Your Name</h6>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                        <h6>Position</h6>
                        <InputDrop>
                            <input
                                onClick={() => setIsDropDown(true)}
                                type="text"
                                defaultValue={isDropDownValue}
                                placeholder="Managing Director ....."
                                {...register('position', { required: true })}
                            />
                            {isDropDown && (
                                <ListItem
                                    onClick={(e) => {
                                        setIsDropDownValue(e.target.innerText);
                                        setIsDropDown(false);
                                    }}
                                >
                                    <p>Managing Director</p>
                                    <p>CEO</p>
                                    <p>Managing </p>
                                </ListItem>
                            )}
                        </InputDrop>
                    </div>
                </div>
                {/* <!__ NOTICE CREATE FOOTER END __> */}
            </div>

            {/* <!__ NOTICE CREATE BUTTON START __> */}
            <div className={styles.create_note_button_section}>
                <button className={styles.btn_danger} type="submit">
                    Submit
                </button>
                <button
                    className={styles.btn_outline}
                    onClick={() => {
                        setIsTrue(false);
                    }}
                >
                    Cancel
                </button>
            </div>
            {/* <!__ NOTICE CREATE BUTTON END __> */}
        </form>
    );
};

export default CreateNotice;
const InputDrop = styled('div')`
    input {
        background-color: white;
        :focus {
            outline: none !important;
            border: 1px solid red;
        }
    }
`;
const ListItem = styled('div')`
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    margin-top: 0.5rem;

    p {
        font-size: 0.9rem;
        border-bottom: 1px solid lightgray;
        padding: 0.5rem 0.5rem;
        margin-bottom: 0;
        border-radius: 0.3rem;
        :last-child {
            border-bottom: none;
        }
        :hover {
            background-color: #c22333;
            color: white;
        }
    }
`;
