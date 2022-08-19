import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import ModeSwitch from "./components/ModeSwitch";
import useLocalState from "./common/hooks/useLocalState";
import GlobalStyle from "./common/globalStyle";
import { theme } from "./constants/styles";

const App = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [themeMode, setThemeMode] = useLocalState("theme-mode", theme.light);

  useEffect(() => {
    if (username) {
      setUrl(`https://api.github.com/users/${username}`);
    }
  }, [username]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <ModeSwitch themeMode={themeMode} setThemeMode={setThemeMode} />
      <SearchInput setUsername={setUsername} />
      <SearchResult url={url} />
    </ThemeProvider>
  );
};

export default App;
