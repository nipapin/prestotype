import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AppContext } from "../contexts/AppContext";
import { counterStyle, legengBoxStyle, counterLegendStyle } from "../styles/styles";

export default function TypeSpeed({ time }) {
    const { state } = useContext(AppContext);
    return (
        <Box sx={legengBoxStyle}>
            <Typography sx={counterStyle}>{state.isDone ? state.typingSpeed : `${Math.round((60 * state.typedText.length) / time)}`}</Typography>
            <Typography sx={counterLegendStyle}>ch/min</Typography>
        </Box>
    );
}
