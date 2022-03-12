import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Card from './Card';
import StyleSheet from './UploadingFile.module.css';

function UploadingFile({ uploadeFile, actions, deleteActions }) {
    let [documentName, setDocumentName] = useState('');
    let [clickFile, setClickFile] = useState(false);
    let [uploadIcon, setUploadIcon] = useState(true);
    let [leftButton, setLeftButton] = useState(5);
    let [rightButton, setRightButton] = useState(-5);
    let [progress, setProgress] = useState(0);
    let [progressHeight, setProgressHeight] = useState(100);

    let imageHandler = async (e) => {
        const formData = new FormData();
        const id = Math.round(Math.random() * 1000000000000);
        formData.append('file', e.target.files[0]);
        formData.append('title', documentName);
        formData.append('id', id);
        const reader = new FileReader();
        reader.onload = () => {
            actions(
                formData,
                (ProgressEvent) => {
                    let progress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
                    let progressHeight =
                        100 - Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
                    setProgress(progress);
                    setProgressHeight(progressHeight);
                },
                reader.result,
                documentName,
                id
            );
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        setClickFile(false);
        setUploadIcon(true);
        setDocumentName('');
    }, [uploadeFile]);

    return (
        <div className={StyleSheet.uploading__file__container}>
            <div className={StyleSheet.uploading__file__container__title}>Upload Document</div>
            <div className={StyleSheet.uploading__file__container__main__box}>
                {uploadeFile.length !== 0 ? (
                    <div
                        style={{ width: `${uploadeFile.length * 14}vw` }}
                        className={
                            StyleSheet.uploading__file__container__main__box__image__carousel__container
                        }>
                        {uploadeFile.length >= 3 ? (
                            <div
                                className={
                                    StyleSheet.uploading__file__container__main__box__image__carousel__container__left__button
                                }
                                onClick={(e) => {
                                    Number(
                                        e.target.parentElement.style.marginLeft.replace('vw', '')
                                    ) <= 0
                                        ? setLeftButton(leftButton + 5)
                                        : setLeftButton(0);
                                    e.target.parentElement.style.marginLeft = `${leftButton}vw`;
                                    setRightButton(-5);
                                }}></div>
                        ) : (
                            ''
                        )}

                        {uploadeFile.map((aboutImage) => {
                            return (
                                <Card
                                    key={aboutImage.id}
                                    title={aboutImage.title}
                                    id={aboutImage.id}
                                    file={aboutImage.file}
                                    setLeftButton={setLeftButton}
                                    setRightButton={setRightButton}
                                    actions={(value) => deleteActions(value)}
                                    progress={progress}
                                    progressHeight={progressHeight}
                                />
                            );
                        })}

                        {uploadeFile.length >= 3 ? (
                            <div
                                className={
                                    StyleSheet.uploading__file__container__main__box__image__carousel__container__right__button
                                }
                                onClick={(e) => {
                                    setRightButton(rightButton - 5);
                                    e.target.parentElement.style.marginLeft = `${rightButton}vw`;
                                    setLeftButton(0);
                                }}></div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>

            {uploadIcon ? (
                <div
                    className={StyleSheet.uploading__file__container__main__box__button}
                    onClick={() => {
                        setClickFile(true);
                        setUploadIcon(false);
                    }}></div>
            ) : (
                ''
            )}

            {clickFile ? (
                <div className={StyleSheet.uploading__file__container__main__box__set__name}>
                    <input
                        type="text"
                        placeholder="Enter Document Name..."
                        onChange={(e) => {
                            setDocumentName(e.target.value);
                        }}
                        value={documentName}
                    />
                    <input type="file" id="chossButton" onChange={imageHandler} />

                    <label
                        htmlFor={documentName === '' ? '' : 'chossButton'}
                        style={documentName === '' ? { opacity: '40%' } : { opacity: '100%' }}
                        id={StyleSheet.chossButtonLabel}>
                        Choose File
                    </label>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default React.memo(UploadingFile);
