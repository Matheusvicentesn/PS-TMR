import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import { Home } from "./pages/Home";

function App() {
  const themeColors = createTheme({
    palette: {
      primary: {
        light: "#00A335",
        main: "#00A335",
        dark: "#bedcbc",
        contrastText: "#FFFFFF",
      },
      secondary: {
        light: "#00A335",
        main: "#002630",
        dark: "#00A335",
        contrastText: "#00A335",
      },
    },
    typography: {
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={themeColors}>
        <GlobalStyles styles={{ body: { backgroundColor: "#bedcbc" } }} />
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
