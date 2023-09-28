import React from "react"


const Line = ({line}) => {
    return (
        <div className="line">
            <svg width="240" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="240" y2="0.5" stroke="black"/>
            </svg>

        </div>
    )
}

export {Line}