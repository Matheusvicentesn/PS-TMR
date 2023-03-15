import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
