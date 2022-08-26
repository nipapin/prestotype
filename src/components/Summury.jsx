import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, LinearProgress, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { BaseSettings } from "../functions/BaseSettings";

export default function Summury() {
    const { state, setState } = useContext(AppContext);
    const [progress, setProgress] = useState(0);

    const toggleHandle = (open) => {
        setState({ ...state, isDone: open });
    };

    const tryAgainHandle = () => {
        setState({ ...BaseSettings, currentSentence: state.currentSentence, sentences: state.sentences });
    };

    const newGameHandle = () => {
        setState({ ...BaseSettings, updateTrigger: !state.updateTrigger });
    };

    useEffect(() => {
        const finalValue = Math.round(100 * (state.currentSentence.length / (state.typedText.length + state.errorCounter)));
        const id = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= finalValue ? finalValue : prevProgress + 1));
        }, 1000 / 60);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <Drawer open={state.isDone} onClose={() => toggleHandle(true)}>
            <Dialog open={true} sx={{ minWidth: "500px" }} fullWidth>
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography>Your Result</Typography>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <ErrorOutlineIcon sx={{ width: "48px", height: "48px", fill: "tomato" }} />
                            <Typography sx={{ fontSize: "48px" }}>{state.errorCounter}</Typography>
                            <Typography>mistakes</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <SpeedIcon sx={{ width: "48px", height: "48px", fill: "#003585" }} />
                            <Typography sx={{ fontSize: "48px" }}>{state.typingSpeed}</Typography>
                            <Typography>characters / min</Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <AccessTimeIcon sx={{ width: "48px", height: "48px", fill: "#1392FD" }} />
                            <Typography sx={{ fontSize: "48px" }}>{state.time}</Typography>
                            <Typography>seconds</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ m: "16px 0" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography>Your accuracy</Typography>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>{`${progress}%`}</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={progress} sx={{ m: "16px 0" }} />
                    <Divider sx={{ m: "16px 0" }} />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={tryAgainHandle}>
                        Try Again
                    </Button>
                    <Button variant="contained" onClick={newGameHandle}>
                        New
                    </Button>
                </DialogActions>
            </Dialog>
        </Drawer>
    );
}
