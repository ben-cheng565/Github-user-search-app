import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import ModeSwitch from "./components/ModeSwitch";

const App = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username) {
      setUrl(`https://api.github.com/users/${username}`);
    }
  }, [username]);

  return (
    <>
      <ModeSwitch />
      <SearchInput setUsername={setUsername} />
      <SearchResult url={url} />
    </>
  );
};

export default App;
