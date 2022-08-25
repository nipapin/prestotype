import { Box, SwipeableDrawer } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppContext } from "./contexts/AppContext";
import { appBoxStyle } from "../src/styles/styles";
import CustomAppBar from "./components/CustomAppBar";
import Main from "./components/Main";
import SelectTask from "./components/SelectTask";
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1392FD",
        },
    },
});

function App() {
    const [initialState, setInitialState] = useState({
        isDone: false,
        errorCounter: 0,
        sentences: [],
        isMenuOpen: false,
    });

    const toggleDrawer = (open) => {
        setInitialState({ ...initialState, isMenuOpen: open });
    };

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler").then((res) => {
            const sentences = res.data
                .map((line) => line.split(".").map((sentence) => sentence.trim()))
                .reduce((prev, next) => [...prev, ...next], [])
                .filter((sentence) => sentence.length);
            setInitialState({ ...initialState, sentences });
        });
    }, []);

    return (
        <AppContext.Provider value={{ state: initialState, setState: (newValue) => setInitialState(newValue) }}>
            <ThemeProvider theme={theme}>
                <Box sx={appBoxStyle}>
                    <SwipeableDrawer anchor="right" open={initialState.isMenuOpen} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)}>
                        <SelectTask />
                    </SwipeableDrawer>
                    <CustomAppBar />
                    <Main />
                </Box>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
