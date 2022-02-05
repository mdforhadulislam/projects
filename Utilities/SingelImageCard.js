import React from 'react';

function SingelImageCard({image}) {
    return (
            <div style={{width:"10vw",height:"10vw",borderRadius:".7vw",background:`#3131 url(${image.file}) center
            no-repeat`,backgroundSize:"cover",display:"inline-block",margin:"0vw .7vw 0vw 0vw"}} ></div>
    )
}

export default React.memo(SingelImageCard)