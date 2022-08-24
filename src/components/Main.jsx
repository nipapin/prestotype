import { Box } from "@mui/system";
import { useState } from "react";
import { mainBoxStyle } from "../styles/styles";
import ErrorCount from "./ErrorCount";
import TypeSpeed from "./TypeSpeed";
import TypeField from "./TypeField";

export default function Main() {
    const [placeholder, setPlaceHolder] = useState("qwe ewq qwe ewq qwe ewq");

    return (
        <Box sx={{ p: "16px" }}>
            <Box sx={mainBoxStyle}>
                <ErrorCount />
                <TypeSpeed />
            </Box>
            <TypeField />
        </Box>
    );
}
