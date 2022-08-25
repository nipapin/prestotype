import { useContext } from "react";

import { Box, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";

import TextFieldsIcon from "@mui/icons-material/TextFields";

import { AppContext } from "../contexts/AppContext";

import { BaseSettings } from "../functions/BaseSettings";

export default function SelectTask() {
    const { state, setState } = useContext(AppContext);
    const handleClick = (sentence, index) => {
        setState({ ...BaseSettings, currentSentenceIndex: index, currentSentence: sentence, isMenuOpen: false, sentences: state.sentences, typedText: "", showCursor: false });
    };
    return (
        <List>
            {state.sentences
                .sort((a, b) => a.split(" ").length - b.split(" ").length)
                .map((sentence, index) => {
                    const words = sentence.split(" ");
                    return (
                        <ListItemButton key={sentence} selected={state.currentSentenceIndex === index} onClick={() => handleClick(sentence, index)}>
                            <ListItemIcon>
                                <TextFieldsIcon />
                            </ListItemIcon>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <Typography>{`${words[0]} ${words[1]}`}</Typography>
                                <Typography sx={{ ml: "8px" }}>{`${words.length} words`}</Typography>
                            </Box>
                        </ListItemButton>
                    );
                })}
        </List>
    );
}
