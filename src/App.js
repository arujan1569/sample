import LoginForm from "./LoginForm";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LoginForm />
    </Box>
  );
}

export default App;

