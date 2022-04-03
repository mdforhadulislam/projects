import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import style from 'styled-components';
import Card from './Card';

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
        <Wrraper>
            <div className="uploading__file__container">
                <div className="uploading__file__container__title">Upload Document</div>
                <div className="uploading__file__container__main__box">
                    {uploadeFile.length !== 0 ? (
                        <div
                            style={{ width: `${uploadeFile.length * 14}vw` }}
                            className="uploading__file__container__main__box__image__carousel__container">
                            {uploadeFile.length >= 3 ? (
                                <div
                                    className="uploading__file__container__main__box__image__carousel__container__left__button"
                                    onClick={(e) => {
                                        Number(
                                            e.target.parentElement.style.marginLeft.replace(
                                                'vw',
                                                ''
                                            )
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
                                    className="uploading__file__container__main__box__image__carousel__container__right__button"
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
                        className="uploading__file__container__main__box__button"
                        onClick={() => {
                            setClickFile(true);
                            setUploadIcon(false);
                        }}></div>
                ) : (
                    ''
                )}

                {clickFile ? (
                    <div className="uploading__file__container__main__box__set__name">
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
                            id="chossButtonLabel">
                            Choose File
                        </label>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </Wrraper>
    );
}

export default React.memo(UploadingFile);

const Wrraper = style.div`
.uploading__file__container {
    width: 100%;
    height: auto;
    padding: 1vw 0vw;
}
.uploading__file__container__title {
    font-size: 1.3vw;
    padding: 0vw 0vw 0.5vw 0vw;
}
.uploading__file__container__main__box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
}
.uploading__file__container__main__box__image__carousel__container {
    width: 300%;
    height: auto;
    transition: all 0.3s;
}
.uploading__file__container__main__box__image__carousel__container__left__button {
    width: 1.7vw;
    height: 1.7vw;
    background-image: url(../Assets/images/dashboard/broder-left-icon.svg);
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 50%;
    left: 1%;
    cursor: pointer;
    z-index: 5;
}
.uploading__file__container__main__box__image__carousel__container__right__button {
    width: 1.7vw;
    height: 1.7vw;
    background-image: url(../Assets/images/dashboard/broder-right-icon.svg);
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: 50%;
    left: 94.3%;
    cursor: pointer;
    z-index: 5;
}
.documents__container {
    width: 14vw;
    height: 14vw;
    display: inline-block;
}
.documents__container__header {
    width: 100%;
    height: auto;
    padding: 0.5vw;
}
.documents__container__header__title {
    font-size: 1vw;
    display: flex;
    align-items: center;
}
.documents__container__header__title img:nth-child(1) {
    width: 1.5vw !important;
    height: 1.5vw !important;
    margin-left: 0.5vw;
    cursor: pointer;
}
.documents__container__header__title img:nth-child(2) {
    width: 1.7vw !important;
    margin-left: 0.5vw;
    height: 1.7vw !important;
    cursor: pointer;
}
.documents__container__body {
    width: 13vw;
    height: 12vw;
}
.documents__container__body__image {
    width: 13vw;
    height: 12vw;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    border-radius: 0.5vw;
    margin: 0.5vw 0.5vw 0.5vw 0vw;
}

.uploading__file__container__main__box__button {
    width: 13vw;
    height: 12vw;
    background: #3131 url(../Assets/images/dashboard/upload-cloud-line.svg) center no-repeat;
    border-radius: 0.5vw;
    background-size: 40%;
    cursor: pointer;
}
.uploading__file__container__main__box__set__name {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1vw 0vw;
}

.uploading__file__container__main__box__set__name input:nth-child(1) {
    width: 14vw;
    height: auto;
    padding: 0.7vw;
    outline: none;
    border: none;
    font-size: 1.15vw;
    background-color: rgb(245, 245, 245);
    font-family: aller, sans-serif;
    margin: 0vw 0.5vw 0vw 0vw;
    border-radius: 0.4vw;
}
.uploading__file__container__main__box__set__name input:nth-child(2) {
    display: none;
}

#chossButtonLabel {
    width: 8vw;
    height: auto;
    padding: 0.7vw;
    background-color: #da1e37;
    border-radius: 0.4vw;
    color: white;
    cursor: pointer;
    font-size: 1.2vw;
}

`;
