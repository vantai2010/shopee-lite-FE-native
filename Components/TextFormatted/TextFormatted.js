import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import textVI from "../../utils/language/vi"
import textEN from "../../utils/language/en"
import keyMap from "../../utils/constant/keyMap";



export default function TextFormatted({ id }) {
    const language = useSelector(state => state.app.language)
    const path = id.split('.')

    return (
        <>
            {
                language === keyMap.VI ? path.reduce((obj, key) => obj && obj[key], textVI) :
                    path.reduce((obj, key) => obj && obj[key], textEN)
            }
        </>
    );
}
