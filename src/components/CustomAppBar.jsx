import { useContext } from "react";

import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { logoStyle, toolbarStyle, toolbarButtonStyle } from "../styles/styles";

import uiLogo from "../assets/ui_logo.png";

import { AppContext } from "../contexts/AppContext";

import { BaseSettings } from "../functions/BaseSettings";

export default function CustomAppBar() {
    const { state, setState } = useContext(AppContext);
    const refresh = () => {
        const updateTrigger = !state.updateTrigger;
        setState({ ...BaseSettings, updateTrigger, showCursor: false, isDone: false });
    };

    const toggleHandle = () => {
        const newState = { ...state };
        newState.isMenuOpen = !newState.isMenuOpen;
        setState(newState);
    };

    const toggleLogin = () => {
        const newState = { ...state };
        newState.isLoginOpen = !newState.isLoginOpen;
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
                        <ListIcon sx={toolbarButtonStyle} />
                    </IconButton>
                    <IconButton onClick={toggleLogin}>
                        {window.localStorage.getItem("prestouser") ? (
                            <Avatar sx={{ bgcolor: "white", color: "#1392FD", width: "24px", height: "24px" }}>{window.localStorage.getItem("prestouser")[0].toUpperCase()}</Avatar>
                        ) : (
                            <AccountCircleIcon sx={toolbarButtonStyle} />
                        )}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
