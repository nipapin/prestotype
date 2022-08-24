import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { legengBoxStyle, counterStyle, counterLegendStyle } from "../styles/styles";

export default function ErrorCount() {
    return (
        <Box sx={legengBoxStyle}>
            <Typography sx={counterStyle}>0</Typography>
            <Typography sx={counterLegendStyle}>mistakes</Typography>
        </Box>
    );
}
