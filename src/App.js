import { Box } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { appBoxStyle } from "../src/styles/styles";
import CustomAppBar from "./components/CustomAppBar";
import Main from "./components/Main";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1392FD",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={appBoxStyle}>
                <CustomAppBar />
                <Main />
            </Box>
        </ThemeProvider>
    );
}

export default App;
