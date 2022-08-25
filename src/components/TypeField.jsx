import { ClickAwayListener } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { typeFieldBoxStyle, hiddenInputStyle } from "../styles/styles";
import Cursor from "./Cursor";

const textStyle = {
    whiteSpace: "pre",
};

export default function TypeField() {
    const { state, setState } = useContext(AppContext);
    const [showCursor, setShowCursor] = useState(false);
    const [text, setText] = useState("qwe ewq qwe qwe qwe qwe qwe qwe qwe");
    const [typedText, setTypedText] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(text.charAt(letterIndex));
    const textInputRef = useRef(null);
    const clickHandle = () => {
        setShowCursor(true);
        if (textInputRef) {
            textInputRef.current.focus();
        }
    };

    const inputHandle = (event) => {
        if (event.nativeEvent.data !== currentLetter) {
            const newState = { ...state };
            newState.errorCounter++;
            setState(newState);
            return;
        }
        setLetterIndex((prev) => prev + 1);
        setCurrentLetter(text.charAt(letterIndex + 1));
        setTypedText((prev) => prev + currentLetter);
        setState({ ...state, isDone: typedText.length === text.length - 1 });
    };

    const handleClickAway = () => {
        setShowCursor(false);
        if (textInputRef) {
            textInputRef.current.blur();
        }
    };

    return state.isDone ? null : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", boxShadow: "0 0 10px #dfdfdf" }}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={typeFieldBoxStyle} onClick={clickHandle}>
                    <input style={hiddenInputStyle} ref={textInputRef} onChange={inputHandle}></input>
                    <div style={{ ...textStyle, opacity: 0.3 }}>{typedText}</div>
                    {showCursor && <Cursor />}
                    <div style={textStyle}>{text.slice(typedText.length, text.length)}</div>
                </Box>
            </ClickAwayListener>
        </Box>
    );
}
