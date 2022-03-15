import React from 'react';

export default function SearchIcon({ width, height }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width !== '' ? width : '24.3'}
            height={height !== '' ? height : '24.3'}
            viewBox="0 0 24.318 24.318">
            <path
                id="search"
                d="M27.671,26.4l-6.8-6.831a9.9,9.9,0,1,0-1.3,1.3l6.831,6.8ZM5.171,13.271a8.1,8.1,0,1,1,8.1,8.1A8.1,8.1,0,0,1,5.171,13.271Z"
                transform="translate(-3.353 -3.353)"
                fill="#666"
            />
        </svg>
    );
}
