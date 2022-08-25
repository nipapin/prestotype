import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import { logoStyle, toolbarStyle, toolbarButtonStyle } from "../styles/styles";
import uiLogo from "../assets/ui_logo.png";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function CustomAppBar() {
    const { state, setState } = useContext(AppContext);

    const refresh = () => {
        setState({
            ...setState,
            isDone: false,
            errorCounter: 0,
        });
    };

    const toggleHandle = () => {
        const newState = { ...state };
        newState.isMenuOpen = !newState.isMenuOpen;
        setState(newState);
    };

    return (
        <AppBar>
            <Toolbar sx={toolbarStyle}>
                <img src={uiLogo} alt="app logo" style={logoStyle} />
                <Box>
                    <IconButton onClick={refresh}>
                        <RefreshIcon sx={toolbarButtonStyle} />
                    </IconButton>
                    <IconButton onClick={toggleHandle}>
                        <SettingsIcon sx={toolbarButtonStyle} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
