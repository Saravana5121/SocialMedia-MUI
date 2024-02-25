import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Button variant="text" startIcon={<SettingsIcon />} color="secondary">
        Settings
      </Button>
      <Button variant="contained" startIcon={<SettingsIcon />}>
        Contained
      </Button>
      <Button variant="outlined" startIcon={<SettingsIcon />}>
        Outlined
      </Button>
    </>
  );
}

export default App;
