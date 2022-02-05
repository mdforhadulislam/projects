import React from 'react';
import userIcon from '../Assets/icon/users.svg';
import StyleSheet from './UploadProfileImage.module.css';

export default function UploadProfileImage({ value, actions, decprition }) {
    let imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                actions(reader.result);
            }
        };
        if (e.target.files[0].size / (1024 * 1024) <= 2) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className={StyleSheet.upload__profile__image__container}>
            {value === '' ? (
                <div style={{ background: `url(${userIcon})` }}></div>
            ) : (
                <div style={{ background: `url(${value})` }}></div>
            )}
            <input type="file" id="uploadImage" onChange={imageHandler} />
            <label htmlFor="uploadImage"></label>
            {value ? '' : <p>{decprition}</p>}
        </div>
    );
}
