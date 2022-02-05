import React from 'react';
import { Wrapper } from '../StyledCss/StyledCss';
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
            {/* indivisual list */}
            {Array.from({ length: 10 }).map((_, idx) => (
                <div
                    key={idx}
                    className="row shadow-sm p-1 rounded px-2 py-2 align-items-center mx-4 my-3">
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
                                    <h4>Masud Reja</h4>
                                    <span>ID: Dp435783</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end">
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
