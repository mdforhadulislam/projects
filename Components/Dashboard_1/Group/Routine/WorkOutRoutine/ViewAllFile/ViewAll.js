import React from 'react';
import { Wrapper } from '../StyledCssFile/StyledCss';
import Image from 'next/image';
import userPhoto from '../../../../../../Assets/images/dashboard/user.jpg';
import iconLogo from '../../../../../../Assets/images/dashboard/imgIcon.svg';
import arrowBack from '../../../../../../Assets/icon/ArrowBackIcon.svg';
import styled from 'styled-components';

const ViewAll = () => {
    return (
        <Wrapper>
            <h5 className="text-start mb-3 mx-4" onClick={() => window.history.go(-1)}>
                <Image src={arrowBack} /> <span className="ps-3">Back</span>
            </h5>
            {/* individual list */}
            {Array.from({ length: 10 }).map((_, idx) => (
                <div
                    key={idx}
                    className="row shadow-sm p-1 rounded px-2 py-2 align-items-center mx-2 mx-md-4 my-3">
                    <div className="col">
                        <div className="d-flex">
                            <div className="member-list-profile-image-container position-relative">
                                <ImageStyle>
                                    <Image src={userPhoto} />
                                </ImageStyle>
                                <ImageLogoIcon>
                                    <Image src={iconLogo} />
                                </ImageLogoIcon>
                            </div>
                            <div className="ps-2 d-flex align-items-center">
                                <div>
                                    <H4Style>
                                        <h4 className="u-name">Masud Reja</h4>
                                    </H4Style>
                                    <span className="u-id d-none d-md-block">ID: Dp435783</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end viewAll">
                        <a href="#viewRoutine">View Routine</a>
                    </div>
                </div>
            ))}
        </Wrapper>
    );
};

export default ViewAll;
const ImageStyle = styled('div')`
    width: 68px;
    height: 68px;
    img {
        border-radius: 10px;
    }
`;
const ImageLogoIcon = styled('div')`
    position: absolute;
    width: 22px;
    bottom: -7px;
    right: 0;
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
