import { useEffect, useState } from "react";

import axios from "axios";

import { Box, SwipeableDrawer } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppContext } from "./contexts/AppContext";

import { BaseSettings } from "./functions/BaseSettings";

import { mainBoxStyle, appBoxStyle } from "./styles/styles";

import CustomAppBar from "./components/CustomAppBar";
import SelectTask from "./components/SelectTask";
import ErrorCount from "./components/ErrorCount";
import TypeSpeed from "./components/TypeSpeed";
import TypeField from "./components/TypeField";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1392FD",
        },
    },
});

function App() {
    const [initialState, setInitialState] = useState(BaseSettings);
    const [time, setTime] = useState(1);

    const toggleDrawer = (open) => {
        setInitialState({ ...initialState, isMenuOpen: open });
    };

    useEffect(() => {
        axios.get("https://baconipsum.com/api/?type=meat-and-filler").then((res) => {
            const sentences = res.data
                .map((line) => line.split(".").map((sentence) => sentence.trim().toLowerCase()))
                .reduce((prev, next) => [...prev, ...next], [])
                .filter((sentence) => sentence.length);
            const currentSentence = sentences[0];
            setInitialState((prev) => {
                return { ...prev, sentences, currentSentence };
            });
        });
    }, [initialState.updateTrigger]);

    useEffect(() => {
        if (initialState.isDone) {
            setTime(1);
            return;
        }
        const timer = setInterval(() => setTime(time + 1), 1000);
        return () => clearInterval(timer);
    }, [time, initialState.isDone]);

    return (
        <AppContext.Provider value={{ state: initialState, setState: (newValue) => setInitialState(newValue) }}>
            <ThemeProvider theme={theme}>
                <Box sx={appBoxStyle}>
                    <SwipeableDrawer anchor="right" open={initialState.isMenuOpen} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)}>
                        <SelectTask />
                    </SwipeableDrawer>
                    <CustomAppBar />
                    <Box sx={{ p: "16px" }}>
                        <Box sx={mainBoxStyle}>
                            <ErrorCount />
                            <TypeSpeed time={time} />
                        </Box>
                        <TypeField time={time} />
                    </Box>
                </Box>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;
