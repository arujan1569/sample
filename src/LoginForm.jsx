import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    alert("Email submitted successfully!");
  };

  return (
    <Box
      sx={{
        width: 360,
        p: 4,
        borderRadius: 3,
        boxShadow: 4,
        backgroundColor: "#fff",
        textAlign: "center"
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Welcome to ThinkGPT
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Your Gateway to Intelligent Interaction
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error)}
          helperText={error}
        />

        <Button
          type="submit"
          fullWidth
          sx={{
            mt: 2,
            py: 1.2,
            background: "linear-gradient(90deg, #8b5cf6, #06b6d4)"
          }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>

      <Typography variant="body2" mt={2}>
        Already have an account?{" "}
        <Typography
          component="span"
          color="primary"
          sx={{ cursor: "pointer", fontWeight: 500 }}
        >
          Login
        </Typography>
      </Typography>

      <Divider sx={{ my: 3 }}>or continue with</Divider>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{ py: 1.2 }}
      >
        Google account
      </Button>
    </Box>
  );
};

export default LoginForm;
