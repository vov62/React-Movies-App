import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
        }}>
            <BeatLoader color={'#C91228'} size={20} />

        </div>
    )
}
