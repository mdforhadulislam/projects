import React from 'react';
import { WhiteBg, Wrapper } from '../StyledCssFile/StyledCss';
import Image from 'next/image';
import userPhoto from '../../../../../../Assets/images/dashboard/user.jpg';
import iconLogo from '../../../../../../Assets/images/dashboard/imgIcon.svg';
import arrowBack from '../../../../../../Assets/icon/ArrowBackIcon.svg';
import styled from 'styled-components';
import logo from '../../../../../../Assets/images/common_img/dutypediaLarge.png';

const ViewAll = () => {
    return (
        <WhiteBg>
            <Wrapper>
                <BackgroundImage>
                    <div className="bgWrap">
                        <Image
                            alt="Dutypedia logo"
                            src={logo}
                            layout="fill"
                            objectFit="cover"
                            width={473}
                            height={588}
                            quality={100}
                        />
                    </div>
                </BackgroundImage>
                <h5 className="text-start mb-3 mx-4" onClick={() => window.history.go(-1)}>
                    <Image src={arrowBack} /> <span className="ps-3">Back</span>
                </h5>
                {/* individual list */}
                {Array.from({ length: 10 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="row shadow-all rounded10 px-2 py-2 align-items-center mx-2 mx-md-4 my-4">
                        <div className="col">
                            <div className="d-flex py-2">
                                <div className="member-list-profile-image-container position-relative">
                                    <ImageStyle>
                                        <Image src={userPhoto} />
                                    </ImageStyle>
                                    <ImageLogoIcon>
                                        <Image src={iconLogo} />
                                    </ImageLogoIcon>
                                </div>
                                <div className="ps-2 d-flex align-items-center">
                                    <div className="ps-md-4">
                                        <H4Style>
                                            <h4 className="u-name">Masud Reja</h4>
                                        </H4Style>
                                        <span className="u-id d-none d-md-block">ID: Dp435783</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col text-end viewAll">
                            <a href="/dashboard_1/groups/groupcard/routine/workOutRoutine/afterCreateTableRoutine">
                                View Routine
                            </a>
                        </div>
                    </div>
                ))}
            </Wrapper>
        </WhiteBg>
    );
};

export default ViewAll;
//background image
const BackgroundImage = styled('div')`
    position: relative;
    .bgWrap {
        position: absolute;
        height: 558px;
        width: 473px;
        margin-top: 20%;
        margin-left: 30%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    }
    @media (max-width: 768px) {
        .bgWrap {
            margin-left: 20%;
            margin-top: 30%;
            height: 358px;
            width: 273px;
        }
    }
    @media (max-width: 400px) {
        display: none;
    }
`;
const ImageStyle = styled('div')`
    width: 68px;
    height: 68px;
    img {
        border-radius: 10px;
    }
`;
const ImageLogoIcon = styled('div')`
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -6px;
    right: -7px;
`;
const H4Style = styled('h4')`
    @media (max-width: 600px) {
        .u-name {
            font-size: 17px;
        }
    }
    @media (max-width: 476px) {
        .u-name {
            font-size: 14px;
        }
    }
`;
