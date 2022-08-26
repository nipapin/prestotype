import { Box, Button, Dialog, DialogContent, DialogTitle, Drawer, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../functions/FirebaseApp";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export default function Login() {
    const { state, setState } = useContext(AppContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const toggleHandle = (open) => {
        setState({ ...state, isLoginOpen: open });
    };

    const signHandle = (event) => {
        event.preventDefault();

        const docRef = doc(db, "users", "usersdata");
        getDoc(docRef).then((snapshot) => {
            const currentUsers = JSON.parse(snapshot.data().user);
            const currentUser = {
                name,
                email,
            };
            const userId = Date.now();
            currentUsers[userId] = currentUser;
            updateDoc(docRef, { user: JSON.stringify(currentUsers) }).then(() => {
                window.localStorage.setItem("prestouser", name);
                toggleHandle(false);
            });
        });
    };

    const signViaGoogle = () => {
        toggleHandle(false);
        signInWithPopup(auth, provider);
    };

    return (
        <Drawer open={state.isLoginOpen} onClose={() => toggleHandle(false)}>
            <Dialog open={true} sx={{ minWidth: "500px" }} fullWidth>
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography>Sign In</Typography>
                    <IconButton onClick={() => toggleHandle(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }} component="form" onSubmit={signHandle}>
                        <TextField label="Name" sx={{ m: "8px 0" }} onChange={(event) => setName(event.target.value)} fullWidth required />
                        <TextField label="E-mail" sx={{ m: "8px 0" }} onChange={(event) => setEmail(event.target.value)} fullWidth required />
                        <Button sx={{ m: "8px 0" }} variant="contained" fullWidth type="submit">
                            Join via Mail
                        </Button>
                    </Box>
                    <Typography>or</Typography>
                    <IconButton onClick={signViaGoogle}>
                        <GoogleIcon sx={{ fill: "#1392FD" }} />
                    </IconButton>
                </DialogContent>
            </Dialog>
        </Drawer>
    );
}
