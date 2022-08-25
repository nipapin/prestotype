import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function SelectTask() {
    const { state } = useContext(AppContext);
    return (
        <List sx={{ "&::-webkit-scrollbar": { display: "none!important" } }}>
            {state.sentences.map((sentence) => {
                const words = sentence.split(" ");
                return (
                    <ListItemButton key={sentence}>
                        <ListItemIcon>
                            <TextFieldsIcon />
                        </ListItemIcon>
                        <ListItemText>{`${words[0]} ${words[1]}`}</ListItemText>
                    </ListItemButton>
                );
            })}
        </List>
    );
}
