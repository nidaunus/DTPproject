import { TextField, Button } from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = () => {
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }
    };
    return (
        <div>
            <form>
                <Typography>
                    Login
              </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="form-input"
                    size="large"
                    onClick={submitForm}>
                    Login
            </Button>
                {error && (
                    <Alert severity="error" onClick={() => setError(null)}>
                        {props.error || error}
                    </Alert>
                )}
            </form>
        </div >
    )
};

export default Login;