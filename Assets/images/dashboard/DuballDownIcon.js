import React from 'react';

export default function DuballDownIcon({ width }) {
    return (
        <svg
            width={width !== '' ? width : '76'}
            height={width !== '' ? width : '76'}
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_9_1532)">
                <path
                    d="M38 70C55.6731 70 70 55.6731 70 38C70 20.3269 55.6731 6 38 6C20.3269 6 6 20.3269 6 38C6 55.6731 20.3269 70 38 70Z"
                    fill="white"
                />
            </g>
            <path
                d="M26.0005 26L38.1001 38.0996L50.1997 26"
                stroke="#707070"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26.0005 37L38.1001 49.0996L50.1997 37"
                stroke="#707070"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <filter
                    id="filter0_d_9_1532"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_9_1532"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_9_1532"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
