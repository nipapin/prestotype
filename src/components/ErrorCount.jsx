import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { legengBoxStyle, counterStyle, counterLegendStyle } from "../styles/styles";

export default function ErrorCount() {
    const { state } = useContext(AppContext);
    return (
        <Box sx={legengBoxStyle}>
            <Typography sx={counterStyle}>{state.errorCounter}</Typography>
            <Typography sx={counterLegendStyle}>mistakes</Typography>
        </Box>
    );
}
