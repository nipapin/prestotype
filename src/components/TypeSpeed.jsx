import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { counterStyle, legengBoxStyle, counterLegendStyle } from "../styles/styles";

export default function TypeSpeed() {
    return (
        <Box sx={legengBoxStyle}>
            <Typography sx={counterStyle}>0</Typography>
            <Typography sx={counterLegendStyle}>ch/min</Typography>
        </Box>
    );
}
