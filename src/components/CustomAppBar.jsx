import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import { logoStyle, toolbarStyle, toolbarButtonStyle } from "../styles/styles";
import uiLogo from "../assets/ui_logo.png";

export default function CustomAppBar() {
    return (
        <AppBar>
            <Toolbar sx={toolbarStyle}>
                <img src={uiLogo} alt="app logo" style={logoStyle} />
                <Box>
                    <IconButton>
                        <RefreshIcon sx={toolbarButtonStyle} />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon sx={toolbarButtonStyle} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
