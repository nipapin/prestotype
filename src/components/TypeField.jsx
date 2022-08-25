import { useContext, useEffect, useRef, useState } from "react";

import { Box, CircularProgress, ClickAwayListener } from "@mui/material";

import { AppContext } from "../contexts/AppContext";

import { typeFieldBoxStyle, hiddenInputStyle, textStyle, typeFieldMainBoxStyle } from "../styles/styles";

import Cursor from "./Cursor";

export default function TypeField({ time }) {
    const { state, setState } = useContext(AppContext);
    const [typedText, setTypedText] = useState(state.typedText);
    const [letterIndex, setLetterIndex] = useState(0);
    const [currentLetter, setCurrentLetter] = useState("");

    const textInputRef = useRef(null);

    const clickHandle = () => {
        setState({ ...state, showCursor: true });
        if (textInputRef) {
            textInputRef.current.focus();
        }
    };
    const inputHandle = (event) => {
        const mutateEntries = state.allTypedEntries + event.nativeEvent.data;
        setState({ ...state, allTypedEntries: mutateEntries });

        if (event.nativeEvent.data !== currentLetter) {
            const newState = { ...state };
            newState.errorCounter++;
            setState(newState);
            return;
        }
        setLetterIndex((prev) => prev + 1);
        setCurrentLetter(state.currentSentence.charAt(letterIndex + 1));
        setTypedText((prev) => prev + currentLetter);
        const typingSpeed = Math.round((60 * state.typedText.length) / time);
        const isDone = typedText.length === state.currentSentence.length - 1;
        const mutateTypedText = state.typedText + currentLetter;
        setState({ ...state, isDone, typedText: mutateTypedText, typingSpeed });
    };

    const handleClickAway = () => {
        setState({ ...state, showCursor: false });
        if (textInputRef) {
            textInputRef.current.blur();
        }
    };

    useEffect(() => {
        setCurrentLetter(state.currentSentence.charAt(0));
        setTypedText("");
        setLetterIndex(0);
    }, [state.currentSentence]);

    return state.isDone ? null : (
        <Box sx={typeFieldMainBoxStyle}>
            {state.currentSentence === "" ? (
                <CircularProgress />
            ) : (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box sx={typeFieldBoxStyle} onClick={clickHandle}>
                        <input style={hiddenInputStyle} ref={textInputRef} onChange={inputHandle}></input>
                        <div style={{ ...textStyle, opacity: 0.3 }}>{typedText}</div>
                        {state.showCursor && <Cursor />}
                        <div style={textStyle}>{state.currentSentence.slice(typedText.length, state.currentSentence.length)}</div>
                    </Box>
                </ClickAwayListener>
            )}
        </Box>
    );
}
